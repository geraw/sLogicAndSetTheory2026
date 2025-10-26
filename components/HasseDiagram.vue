<template>
  <div class="inline-block" :style="{ width: svgWidth + 'px', height: svgHeight + 'px' }">
    <svg :viewBox="[0, 0, svgWidth, svgHeight].join(' ')" :width="svgWidth" :height="svgHeight" xmlns="http://www.w3.org/2000/svg" class="overflow-visible">
      <!-- edges -->
      <g :stroke="edgeColor" :stroke-width="strokeWidth" stroke-linecap="round">
        <line v-for="(e, i) in displayEdges" :key="'e' + i"
              :x1="pos[e[0]].x" :y1="pos[e[0]].y"
              :x2="pos[e[1]].x" :y2="pos[e[1]].y" />
      </g>

      <!-- nodes -->
      <g>
        <g v-for="n in nodes" :key="n.id" :transform="`translate(${pos[n.id].x}, ${pos[n.id].y})`" style="cursor: pointer" @click="onNodeClick(n)">
          <slot name="node" :node="n" :level="levelOf[n.id]">
            <foreignObject v-if="n.content" :x="-nodeRadius * 1.5" :y="-nodeRadius" :width="nodeRadius * 3" :height="nodeRadius * 2">
              <div xmlns="http://www.w3.org/1999/xhtml" style="position: relative; width: 100%; height: 100%;">
                <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0;">
                  <ellipse :cx="nodeRadius * 1.5" :cy="nodeRadius" :rx="nodeRadius * 1.5" :ry="nodeRadius" :fill="nodeFill" :stroke="nodeStroke" :stroke-width="2" />
                </svg>
                <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; z-index: 1;">
                  <component :is="n.content" />
                </div>
              </div>
            </foreignObject>
            <ellipse v-else :rx="nodeRadius * 1.5" :ry="nodeRadius" :fill="nodeFill" :stroke="nodeStroke" :stroke-width="2" />
            <text v-if="!n.content" text-anchor="middle" dominant-baseline="central" :font-size="fontSize" :dy="textDy">{{ n.label ?? n.id }}</text>
          </slot>
        </g>
      </g>

      <!-- annotations -->
      <g v-if="annotations">
        <g v-for="(ann, i) in annotations" :key="'ann' + i">
          <text :x="ann.x" :y="ann.y" text-anchor="middle" dominant-baseline="central" :font-size="fontSize" :fill="nodeStroke">{{ ann.text }}</text>
          <line v-if="ann.arrowTo && pos[ann.arrowTo]" :x1="ann.x" :y1="ann.y + 10" :x2="pos[ann.arrowTo].x" :y2="pos[ann.arrowTo].y - nodeRadius - 5" :stroke="edgeColor" :stroke-width="2" marker-end="url(#arrowhead)" />
        </g>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" :fill="edgeColor" />
          </marker>
        </defs>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'

type Node = { id: string; label?: string; content?: any }

type Edge = [string, string] // lower -> higher (strict order)

const props = defineProps({
  nodes: { type: Array as () => Node[], required: true },
  /** Strict relations u < v. Can include transitive edges; they'll be reduced to covers. */
  relations: { type: Array as () => Edge[], required: true },
  /** Optional explicit levels (0 = bottom). If omitted, computed by longest-path levels. */
  levels: { type: Object as () => Record<string, number> | null, default: null },
  nodeRadius: { type: Number, default: 16 },
  levelGap: { type: Number, default: 90 },
  nodeGap: { type: Number, default: 90 },
  padding: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 4 },
  edgeColor: { type: String, default: '#111827' },
  nodeFill: { type: String, default: 'white' },
  nodeStroke: { type: String, default: '#111827' },
  fontSize: { type: Number, default: 16 },
  textDy: { type: String, default: '0' },
  annotations: { type: Array as () => {text: string, x: number, y: number, arrowTo?: string}[], default: null },
})

const emit = defineEmits<{ (e: 'node:click', node: Node): void }>()

const idSet = computed(() => new Set(props.nodes.map(n => n.id)))

function topoOrder(edges: Edge[], ids: string[]): string[] {
  const incoming = new Map<string, number>()
  const out = new Map<string, string[]>()
  ids.forEach(id => { incoming.set(id, 0); out.set(id, []) })
  edges.forEach(([u, v]) => {
    if (!idSet.value.has(u) || !idSet.value.has(v)) return
    incoming.set(v, (incoming.get(v) || 0) + 1)
    out.get(u)!.push(v)
  })
  const q: string[] = []
  incoming.forEach((deg, id) => { if ((deg || 0) === 0) q.push(id) })
  const order: string[] = []
  while (q.length) {
    const u = q.shift()!
    order.push(u)
    for (const v of out.get(u)!) {
      incoming.set(v, (incoming.get(v) || 0) - 1)
      if ((incoming.get(v) || 0) === 0) q.push(v)
    }
  }
  return order
}

function transitiveReduction(edges: Edge[], ids: string[]): Edge[] {
  // Build adjacency list
  const adj = new Map<string, Set<string>>()
  ids.forEach(id => adj.set(id, new Set()))
  edges.forEach(([u, v]) => {
    if (idSet.value.has(u) && idSet.value.has(v)) {
      adj.get(u)?.add(v)
    }
  })

  // For each edge u->v, check if a path u->..->v exists with length>=2.
  const reduced: Edge[] = []
  for (const [u, v] of edges) {
    if (!idSet.value.has(u) || !idSet.value.has(v)) continue
    // BFS from u, skipping v on first step
    const q: string[] = Array.from(adj.get(u) || []).filter(x => x !== v)
    const seen = new Set<string>([u])
    let reachable = false
    while (q.length && !reachable) {
      const x = q.shift()!
      if (x === v) {
        reachable = true
        break
      }
      if (seen.has(x)) continue
      seen.add(x)
      for (const y of adj.get(x) || []) q.push(y)
    }
    if (!reachable) reduced.push([u, v])
  }
  return reduced
}

const displayEdges = computed<Edge[]>(() => {
  if (!props.relations || !Array.isArray(props.relations)) {
    console.warn('[HasseDiagram] Invalid relations provided. Expected an array.')
    return []
  }

  const clean = props.relations
    .filter(edge => Array.isArray(edge) && edge.length === 2) // Ensure each edge is a valid pair
    .filter(([u, v]) => u !== v && idSet.value.has(u) && idSet.value.has(v))
  // De-duplicate
  const uniqKey = (e: Edge) => e[0] + '→' + e[1]
  const uniqMap = new Map<string, Edge>()
  clean.forEach(e => uniqMap.set(uniqKey(e), e))
  const uniq = Array.from(uniqMap.values())
  return transitiveReduction(uniq, props.nodes.map(n => n.id))
})

const levelOf = computed<Record<string, number>>(() => {
  if (props.levels) return props.levels
  // Compute longest-path levels via topological order
  const ids = props.nodes.map(n => n.id)
  const order = topoOrder(displayEdges.value, ids)
  const pred = new Map<string, string[]>()
  ids.forEach(id => pred.set(id, []))
  displayEdges.value.forEach(([u, v]) => pred.get(v)!.push(u))
  const lvl: Record<string, number> = {}
  order.forEach(id => {
    const ps = pred.get(id)!
    lvl[id] = ps.length ? Math.max(...ps.map(p => lvl[p])) + 1 : 0
  })
  return lvl
})

const layers = computed(() => {
  const map = new Map<number, Node[]>()
  for (const n of props.nodes) {
    const l = levelOf.value[n.id] ?? 0
    if (!map.has(l)) map.set(l, [])
    map.get(l)!.push(n)
  }
  // stable order by label/id for nicer layout
  Array.from(map.values()).forEach(arr => arr.sort((a,b)=> (a.label??a.id).localeCompare(b.label??b.id)))
  const entries = Array.from(map.entries()).sort((a, b) => a[0] - b[0])
  return entries.map(([level, arr]) => ({ level, nodes: arr }))
})

const widthByLayer = computed(() => Math.max(...layers.value.map(l => Math.max(1, l.nodes.length))))
const svgWidth = computed(() => props.padding*2 + Math.max(1, widthByLayer.value-1) * props.nodeGap)
const svgHeight = computed(() => props.padding*2 + Math.max(1, layers.value.length-1) * props.levelGap)

const pos = computed<Record<string, {x:number,y:number}>>(() => {
  const P: Record<string, {x:number,y:number}> = {}
  layers.value.forEach((layer, i) => {
    const count = layer.nodes.length
    const rowWidth = count > 1 ? (count - 1) * props.nodeGap : 0
    const startX = (svgWidth.value - rowWidth) / 2
    const y = svgHeight.value - props.padding - i * props.levelGap // bottom = level 0
    layer.nodes.forEach((n, j) => {
      // Use manual position if provided, otherwise calculate automatically
      P[n.id] = n.position || { x: startX + j * props.nodeGap, y }
    })
  })
  return P
})

function onNodeClick(n: Node) {
  emit('node:click', n)
}

// warn if graph is cyclic (posets must be DAGs)
watchEffect(() => {
  const ids = props.nodes.map(n => n.id)
  const order = topoOrder(displayEdges.value, ids)
  if (order.length !== ids.length) {
    console.warn('[HasseDiagram] The relations contain a cycle or disconnected ids. Layout may be incorrect.')
  }
})
</script>

<style scoped>
text { user-select: none; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
</style>
