<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick, onActivated, onDeactivated } from 'vue'
import cytoscape, { Core } from 'cytoscape'

type NodeId = string | number
type EdgeSpec = (string | number)[] // [leftRef, rightRef, label?]

const props = withDefaults(defineProps<{
  left: NodeId[]        // left-side labels
  right: NodeId[]       // right-side labels
  edges: EdgeSpec[]     // pairs referencing left/right labels or aliases like "L1"/"R2"
  width?: number | string
  height?: number | string
  nodeColor?: string
  edgeColor?: string
  arrowColor?: string
  bg?: string
  minWidth?: number
  minHeight?: number
}>(), {
  left: () => [],
  right: () => [],
  edges: () => [],
  width: undefined,
  height: undefined,
  nodeColor: '#f7ff0',
  edgeColor: '#111',
  arrowColor: '#111',
  bg: 'transparent',
  minWidth: 300,
  minHeight: 200,
})

const containerRef = ref<HTMLDivElement | null>(null)
const cy = ref<Core | null>(null)
const resizeObserver = ref<ResizeObserver | null>(null)

// Helper ids: actual cytoscape node id will be "L:{label}" or "R:{label}"
function mkLeftId(label: NodeId) { return `L:${String(label)}` }
function mkRightId(label: NodeId) { return `R:${String(label)}` }

// Build alias map so edges can reference nodes by label or by "L1"/"R2" style aliases.
function buildAliasMap() {
  const map = new Map<string, string>()
  props.left.forEach((lbl, i) => {
    const id = mkLeftId(lbl)
    const s = String(lbl)
    map.set(s, id)
    map.set(id, id)
    map.set(`L${i + 1}`, id)
    map.set(`l${i + 1}`, id)
    map.set(String(i + 1), id) // allow numeric index references
  })
  props.right.forEach((lbl, i) => {
    const id = mkRightId(lbl)
    const s = String(lbl)
    map.set(s, id)
    map.set(id, id)
    map.set(`R${i + 1}`, id)
    map.set(`r${i + 1}`, id)
    map.set(String(i + 1), id)
  })
  return map
}

function computePositions(containerW: number, containerH: number) {
  // coerce to sensible numeric defaults (avoid NaN from string props like "100%")
  const w = Number.isFinite(containerW) && containerW > 0 ? containerW : (props.minWidth ?? 300)
  const h = Number.isFinite(containerH) && containerH > 0 ? containerH : (props.minHeight ?? 200)

  const leftCount = props.left.length || 1
  const rightCount = props.right.length || 1
  const leftX = w * 0.2
  const rightX = w * 0.8
  const topPadding = Math.max(20, h * 0.05)
  const usableH = Math.max(40, h - topPadding * 2)

  const leftGap = usableH / (leftCount + 1)
  const rightGap = usableH / (rightCount + 1)

  const leftPositions: Record<string, { x: number; y: number }> = {}
  const rightPositions: Record<string, { x: number; y: number }> = {}

  props.left.forEach((lbl, i) => {
    const id = mkLeftId(lbl)
    leftPositions[id] = { x: leftX, y: topPadding + (i + 1) * leftGap }
  })
  props.right.forEach((lbl, i) => {
    const id = mkRightId(lbl)
    rightPositions[id] = { x: rightX, y: topPadding + (i + 1) * rightGap }
  })

  return { ...leftPositions, ...rightPositions }
}

function buildElements() {
  const alias = buildAliasMap()
  const container = containerRef.value

  // Prefer real measured client size, fallback to numeric props or min sizes
  const rect = container
    ? { width: container.clientWidth || (props.minWidth ?? 300), height: container.clientHeight || (props.minHeight ?? 200) }
    : { width: (typeof props.width === 'number' ? props.width : parseInt(String(props.width || ''), 10) || (props.minWidth ?? 300)), height: (typeof props.height === 'number' ? props.height : parseInt(String(props.height || ''), 10) || (props.minHeight ?? 200)) }

  const positions = computePositions(rect.width, rect.height)

  const nodes = [
    ...props.left.map((lbl) => {
      const id = mkLeftId(lbl)
      const pos = positions[id] ?? { x: rect.width / 2, y: rect.height / 2 }
      return {
        data: { id, label: String(lbl) },
        // mark as left node so we can style it
        classes: 'left',
        position: { x: pos.x, y: pos.y },
        selectable: false,
        grabbable: false,
      }
    }),
    ...props.right.map((lbl) => {
      const id = mkRightId(lbl)
      const pos = positions[id] ?? { x: rect.width / 2, y: rect.height / 2 }
      return {
        data: { id, label: String(lbl) },
        // mark as right node so we can style it
        classes: 'right',
        position: { x: pos.x, y: pos.y },
        selectable: false,
        grabbable: false,
      }
    }),
  ]

  const edges = props.edges.map((e, i) => {
    const sourceToken = String(e[0])
    const targetToken = String(e[1])
    const aliasMap = buildAliasMap()
    const src = aliasMap.get(sourceToken) ?? aliasMap.get(sourceToken.replace(/^L|l/, '')) ?? mkLeftId(sourceToken)
    const tgt = aliasMap.get(targetToken) ?? aliasMap.get(targetToken.replace(/^R|r/, '')) ?? mkRightId(targetToken)
    const label = e[2] ? String(e[2]) : ''
    return {
      data: {
        id: `e${i}`,
        source: src,
        target: tgt,
        label,
      },
      selectable: false,
      grabbable: false,
    }
  })

  return [...nodes, ...edges]
}

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
        'font-size': 18,
        'text-margin-y': 0,
        'width': 36,
        'height': 36,
        'border-width': 2,
        'border-color': '#333',
      },
    },
    {
      selector: 'node.left',
      style: {
        'background-color': '#cfeeff', // light blue
      },
    },
    {
      selector: 'node.right',
      style: {
        'background-color': '#ffdede', // light red
      },
    },
    {
      selector: 'edge',
      style: {
        'line-color': props.edgeColor,
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': props.arrowColor,
        'width': 2,
        'arrow-scale': 1.2,
        'label': 'data(label)',
        'font-size': 11,
        'text-rotation': 'autorotate',
        'text-margin-y': -6,
        'text-background-color': '#fff',
        'text-background-opacity': 0.7,
        'text-background-padding': 2,
      },
    },
  ]
}

function mountCy() {
  if (!containerRef.value) return
  // if an instance already exists for this component, destroy it first
  if (cy.value) {
    try { cy.value.destroy() } catch { /* ignore */ }
    cy.value = null
  }
  const els = buildElements()
  cy.value = cytoscape({
    container: containerRef.value,
    elements: els,
    layout: { name: 'preset' },
    wheelSensitivity: 0.2,
    boxSelectionEnabled: false,
    autoungrabify: true,
    style: getStyle(),
    pixelRatio: 1,
  })

  // lock all nodes (fixed bipartite positions)
  cy.value?.nodes().forEach(n => n.lock())

  // ensure cytoscape knows the container size and fit to nodes
  cy.value?.resize()
  cy.value?.fit(20)
}

// Re-layout positions on resize
function relayout() {
  if (!cy.value || !containerRef.value) return
  // let cytoscape update internal sizes first
  cy.value.resize()
  const positions = computePositions(containerRef.value.clientWidth || (props.minWidth ?? 300), containerRef.value.clientHeight || (props.minHeight ?? 200))
  cy.value.nodes().forEach(n => {
    const id = n.id()
    const p = positions[id]
    if (p) {
      n.position(p)
    }
  })
  // refresh viewport to contain nodes
  cy.value.fit(20)
}

onMounted(async () => {
  await nextTick()
  mountCy()
  // do an initial relayout to make sure measured sizes are applied
  relayout()
  // respond to container resize so positions recalc (better than transform scale)
  if (window.ResizeObserver && containerRef.value) {
    resizeObserver.value = new ResizeObserver(() => {
      relayout()
    })
    resizeObserver.value.observe(containerRef.value)
  } else {
    window.addEventListener('resize', relayout)
  }
})

onBeforeUnmount(() => {
  if (cy.value) {
    try { cy.value.destroy() } catch { /* ignore */ }
    cy.value = null
  }
  if (resizeObserver.value && containerRef.value) {
    try { resizeObserver.value.unobserve(containerRef.value) } catch { /* ignore */ }
    resizeObserver.value = null
  } else {
    window.removeEventListener('resize', relayout)
  }
})

// Handle keep-alive: when activated, ensure instance is visible & relaid out;
onActivated(() => {
  // recreate if missing, else relayout when becoming visible
  if (!cy.value) mountCy()
  // nextTick to let DOM become visible
  nextTick().then(() => relayout())
})

// If deactivated, destroy heavy resources so next activation starts fresh
onDeactivated(() => {
  if (cy.value) {
    try { cy.value.destroy() } catch { /* ignore */ }
    cy.value = null
  }
  if (resizeObserver.value && containerRef.value) {
    try { resizeObserver.value.unobserve(containerRef.value) } catch { /* ignore */ }
    resizeObserver.value = null
  }
})

// live updates
watch(() => [props.left, props.right, props.edges, props.nodeColor, props.edgeColor, props.arrowColor], async () => {
  if (!cy.value) return
  cy.value.elements().remove()
  cy.value.add(buildElements())
  cy.value.style(getStyle())
  cy.value.nodes().forEach(n => n.lock())
  relayout()
}, { deep: true })
</script>

<template>
  <div
    ref="containerRef"
    :style="{
      ...(props.width ? { width: typeof props.width === 'number' ? props.width + 'px' : props.width } : { minWidth: props.minWidth + 'px' }),
      ...(props.height ? { height: typeof props.height === 'number' ? props.height + 'px' : props.height } : { minHeight: props.minHeight + 'px' }),
      background: props.bg,
      borderRadius: '8px',
      display: 'block',
      position: 'relative',
    }"
  />
</template>