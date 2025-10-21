<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import cytoscape, { Core } from 'cytoscape'

type NodeId = string | number
type Node = { id: NodeId; x: number; y: number; label?: string }
type Edge = { id?: string; source: NodeId; target: NodeId; label?: string; weight?: number; loopDirection?: string; color?: string }

const props = withDefaults(defineProps<{
  nodes: Node[]
  edges: Edge[]
  height?: number | string
  width?: number | string
  arrowColor?: string
  nodeColor?: string
  edgeColor?: string
  bg?: string
  loopDirection?: string
  controlPointDistance?: number
  loopSweep?: string
}>(), {
  height: undefined,
  width: undefined,
  arrowColor: '#111',
  nodeColor: '#ffff00',
  edgeColor: '#111',
  bg: 'transparent',
  loopDirection: '-90deg',
  controlPointDistance: 20,
  loopSweep: '45deg',
})

const containerRef = ref<HTMLDivElement | null>(null)
const cy = ref<Core | null>(null)
const resizeObserver = ref<ResizeObserver | null>(null)
const autoHeight = props.height === undefined
const autoWidth = props.width === undefined

function getStyle() {
  return [
    {
      selector: 'node',
      style: {
        'background-color': props.nodeColor,
        'label': 'data(label)',
        'color': '#111',
        'text-valign': 'center',
        'text-halign': 'center',
        'font-size': 40,
        'text-margin-y': 0,
        'width': 50,
        'height': 50,
        'border-width': 2,
        'border-color': '#333',
      },
    },
    {
      selector: 'edge',
      style: {
        'line-color': (ele) => ele.data('color') || props.edgeColor,
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': (ele) => ele.data('color') || props.arrowColor,
        'width': 3,
        'arrow-scale': 2,
        'label': 'data(label)',
        'font-size': 11,
        'text-rotation': 'autorotate',
        'text-margin-y': -6,
        'text-background-color': '#fff',
        'text-background-opacity': 0.7,
        'text-background-padding': 1,
        'loop-direction': (ele) => ele.data('loopDirection') || props.loopDirection,
        'loop-sweep': props.loopSweep,
        'control-point-distance': props.controlPointDistance,
        'control-point-weight': 0.5,
      },

    },
  ]
}

function buildElements() {
  return [
    ...props.nodes.map(n => ({
      data: { id: String(n.id), label: n.label ?? String(n.id) },
      ...(n.x !== undefined && n.y !== undefined ? { position: { x: n.x, y: n.y } } : {}),
      selectable: false,
      grabbable: false,
    })),
    ...props.edges.map((e, i) => ({
      data: {
        id: e.id ?? `e${i}`,
        source: String(e.source),
        target: String(e.target),
        label: e.label ?? '',
        weight: e.weight ?? 1,
        loopDirection: e.loopDirection,
        color: e.color,
      },
      selectable: false,
      grabbable: false,
    })),
  ]
}

function measureContainer() {
  const c = containerRef.value
  if (!c) return { width: 0, height: 0, valid: false }
  const w = Math.round(c.clientWidth || 0)
  const h = Math.round(c.clientHeight || 0)
  const valid = w > 16 && h > 16
  return { width: w, height: h, valid }
}

function applyMeasuredSize(width: number, height: number) {
  if (!cy.value) return
  // If elements were deferred (empty), add them now using measured size
  if (cy.value.elements().length === 0) {
    cy.value.add(buildElements())
    // lock fixed position nodes
    props.nodes.forEach(n => {
      if (n.x !== undefined && n.y !== undefined) {
        cy.value!.getElementById(String(n.id)).lock()
      }
    })
  }
  // Update cytoscape internals and re-run layout
  cy.value.resize()
  // Give browser a tick after resize for layout to be accurate
  setTimeout(() => {
    if (!cy.value) return
    try {
      cy.value.layout({ name: 'cose' }).run()
    } catch { /* ignore layout errors */ }
    cy.value.fit(20)
  }, 16)
}

function mountCy() {
  if (!containerRef.value) return
  // destroy existing instance if any
  if (cy.value) {
    try { cy.value.destroy() } catch { /* ignore */ }
    cy.value = null
  }

  // Create instance with no elements initially if container not measured yet
  const measured = measureContainer()
  const initialElements = measured.valid ? buildElements() : []

  cy.value = cytoscape({
    container: containerRef.value,
    elements: initialElements,
    layout: { name: 'preset' }, // positions (preset) or empty; we run cose after measurement
    wheelSensitivity: 0.2,
    boxSelectionEnabled: false,
    autoungrabify: true,
    style: getStyle(),
    pixelRatio: 1,
  })

  // lock fixed nodes if present
  props.nodes.forEach(n => {
    if (n.x !== undefined && n.y !== undefined) {
      cy.value!.getElementById(String(n.id)).lock()
    }
  })

  // If we already had a valid measurement, run layout now; otherwise defer to ResizeObserver
  if (measured.valid) {
    // run layout after nextTick so DOM settled
    nextTick().then(() => applyMeasuredSize(measured.width, measured.height))
  }

  // observe the container size and apply layout when it becomes valid / changes
  if (window.ResizeObserver && containerRef.value && !resizeObserver.value) {
    resizeObserver.value = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target !== containerRef.value) continue
        const cr = entry.contentRect
        const w = Math.round(cr.width)
        const h = Math.round(cr.height)
        if (w > 16 && h > 16) {
          applyMeasuredSize(w, h)
        }
      }
    })
    resizeObserver.value.observe(containerRef.value)
  }

  // disable user interactions
  cy.value.userZoomingEnabled(false)
  cy.value.userPanningEnabled(false)
}

onMounted(() => {
  mountCy()
})

onBeforeUnmount(() => {
  if (cy.value) {
    try { cy.value.destroy() } catch { /* ignore */ }
    cy.value = null
  }
  if (resizeObserver.value && containerRef.value) {
    try { resizeObserver.value.unobserve(containerRef.value) } catch { /* ignore */ }
    resizeObserver.value = null
  }
})

// Live updates if nodes/edges props change
watch(() => [props.nodes, props.edges, props.loopDirection, props.controlPointDistance, props.loopSweep], () => {
  if (!cy.value) return
  // If container hasn't been measured yet, just replace elements array so applyMeasuredSize will add them later
  const m = measureContainer()
  cy.value.elements().remove()
  cy.value.add(buildElements())
  // Lock fixed nodes
  props.nodes.forEach(n => {
    if (n.x !== undefined && n.y !== undefined) {
      cy.value!.getElementById(String(n.id)).lock()
    }
  })
  // Update style and re-run layout if we have valid size
  cy.value.style(getStyle())
  if (m.valid) {
    cy.value.resize()
    try { cy.value.layout({ name: 'cose' }).run() } catch { /* ignore */ }
    cy.value.fit(20)
  }
}, { deep: true })
</script>

<template>
  <div
    ref="containerRef"
    :style="{
      ...(autoWidth ? { minWidth: '300px' } : { width: typeof width === 'number' ? width + 'px' : width }),
      ...(autoHeight ? { minHeight: '200px' } : { height: typeof height === 'number' ? height + 'px' : height }),
      // background: bg,     
      // border: none,
      //borderRadius: '8px',
    }"
  />
</template>