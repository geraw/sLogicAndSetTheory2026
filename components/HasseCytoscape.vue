<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import cytoscape, { Core } from 'cytoscape'

type NodeId = string | number
type Node = { id: NodeId; label?: string }
type Edge = { source: NodeId; target: NodeId; label?: string }

const props = withDefaults(defineProps<{
  nodes: Node[]
  edges: Edge[]
  height?: number | string
  width?: number | string
  nodeColor?: string
  edgeColor?: string
}>(), {
  height: 400,
  width: 400,
  nodeColor: '#ffff00',
  edgeColor: '#111',
})

const containerRef = ref<HTMLDivElement | null>(null)
const cy = ref<Core | null>(null)
const resizeObserver = ref<ResizeObserver | null>(null)

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
        'font-size': 18,  // Enlarged font size
        'width': 60,      // Adjusted for ellipse shape
        'height': 40,     // Adjusted for ellipse shape
        'shape': 'ellipse',  // Changed to ellipse
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
        'target-arrow-color': props.edgeColor,
        'width': 3,
        'arrow-scale': 1.5,
        'label': 'data(label)',
        'font-size': 10,
        'text-rotation': 'autorotate',
        'text-margin-y': -5,
      },
    },
  ]
}

const actualNodes = props.nodes.length ? props.nodes : JSON.parse(containerRef.value?.dataset.nodes || '[]')
const actualEdges = props.edges.length ? props.edges : JSON.parse(containerRef.value?.dataset.edges || '[]')

function buildElements() {
  return [
    ...actualNodes.map(n => ({
      data: { id: String(n.id), label: n.label ?? String(n.id) },
      selectable: false,
      grabbable: false,
    })),
    ...actualEdges.map((e, i) => ({
      data: {
        id: `e${i}`,
        source: String(e.source),
        target: String(e.target),
        label: e.label ?? '',
      },
      selectable: false,
      grabbable: false,
    })),
  ]
}

function mountCy() {
  if (!containerRef.value) return
  if (cy.value) {
    try { cy.value.destroy() } catch { /* ignore */ }
    cy.value = null
  }

  cy.value = cytoscape({
    container: containerRef.value,
    elements: buildElements(),
    layout: { name: 'breadthfirst', directed: true, spacingFactor: 1.5 },
    wheelSensitivity: 0.2,
    boxSelectionEnabled: false,
    autoungrabify: true,
    style: getStyle(),
    pixelRatio: 1,
  })

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

watch(() => [props.nodes, props.edges], () => {
  if (!cy.value) return
  cy.value.elements().remove()
  cy.value.add(buildElements())
  cy.value.layout({ name: 'breadthfirst', directed: true, spacingFactor: 1.5 }).run()
  cy.value.fit(20)
}, { deep: true })
</script>

<template>
  <div
    ref="containerRef"
    :style="{
      width: typeof width === 'number' ? width + 'px' : width,
      height: typeof height === 'number' ? height + 'px' : height,
    }"
  />
</template>