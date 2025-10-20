<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import cytoscape, { Core } from 'cytoscape'

type NodeId = string | number
type Node = { id: NodeId; x: number; y: number; label?: string }
type Edge = { id?: string; source: NodeId; target: NodeId; label?: string; weight?: number; loopDirection?: string }

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
let cy: Core | null = null
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
        'line-color': props.edgeColor,
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': props.arrowColor,
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
      },
      selectable: false,
      grabbable: false,
    })),
  ]
}

function mountCy() {
  if (!containerRef.value) return
  cy = cytoscape({
    container: containerRef.value,
    elements: buildElements(),
    layout: { name: 'preset' }, // Temporary, will run cose after
    wheelSensitivity: 0.2,
    boxSelectionEnabled: false,
    autoungrabify: true,
    style: getStyle(),
    pixelRatio: 1,
  })

  // Lock nodes that have fixed positions
  props.nodes.forEach(n => {
    if (n.x !== undefined && n.y !== undefined) {
      cy.getElementById(String(n.id)).lock()
    }
  })

  cy.layout({ name: 'cose' }).run()

  cy.userZoomingEnabled(false)
  cy.userPanningEnabled(false)
}

onMounted(mountCy)

onBeforeUnmount(() => {
  if (cy) {
    cy.destroy()
    cy = null
  }
})

// Live updates if nodes/edges props change
watch(() => [props.nodes, props.edges, props.loopDirection, props.controlPointDistance, props.loopSweep], () => {
  if (!cy) return
  cy.elements().remove()
  cy.add(buildElements())
  // Lock nodes that have fixed positions
  props.nodes.forEach(n => {
    if (n.x !== undefined && n.y !== undefined) {
      cy.getElementById(String(n.id)).lock()
    }
  })
  cy.layout({ name: 'cose' }).run()
  cy.style(getStyle())  // Update style to reflect new props
}, { deep: true })
</script>

<template>
  <div
    ref="containerRef"
    :style="{
      ...(autoWidth ? { minWidth: '300px' } : { width: typeof width === 'number' ? width + 'px' : width }),
      ...(autoHeight ? { minHeight: '200px' } : { height: typeof height === 'number' ? height + 'px' : height }),
      background: bg,     
      border: none,
      borderRadius: '8px',
    }"
  />
</template>