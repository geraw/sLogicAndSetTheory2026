<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  left:  { type: Array, default: () => ['1','2','3'] },
  right: { type: Array, default: () => ['A','B','C'] },
  edges: { type: Array, default: () => [['L1','RA','']] },
  width:  { type: Number, default: 420 },   // rendered size
  height: { type: Number, default: 300 },   // rendered size
  gapY:   { type: Number, default: 90 },
  leftX:  { type: Number, default: 100 },
  rightX: { type: Number, default: 320 },
  topY:   { type: Number, default: 60 },
  r:      { type: Number, default: 20 },
})

const svgRef = ref(null)

function centerOf(id) {
  const el = document.getElementById(id)
  // circles only; read SVG attributes (SVG coord-space)
  const cx = Number(el.getAttribute('cx'))
  const cy = Number(el.getAttribute('cy'))
  return { x: cx, y: cy }
}

function draw() {
  const svg = svgRef.value
  if (!svg) return
  const edgesGroup = svg.querySelector('#edges')
  edgesGroup.innerHTML = ''

  props.edges.forEach(([fromId, toId, label]) => {
    const a = centerOf(fromId)
    const b = centerOf(toId)

    // straight edge
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    line.setAttribute('x1', a.x); line.setAttribute('y1', a.y)
    line.setAttribute('x2', b.x); line.setAttribute('y2', b.y)
    line.setAttribute('stroke', 'black')
    line.setAttribute('stroke-width', '2')
    line.setAttribute('marker-end', 'url(#arrow)')
    edgesGroup.appendChild(line)

    // label
    if (label) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.textContent = label
      text.setAttribute('x', (a.x + b.x)/2)
      text.setAttribute('y', (a.y + b.y)/2 - 10)
      text.setAttribute('text-anchor', 'middle')
      text.setAttribute('font-size', '12')
      text.setAttribute('font-family', 'sans-serif')
      edgesGroup.appendChild(text)
    }
  })
}

onMounted(draw)
watch(() => props.edges, draw)
watch(() => [props.left, props.right], draw, { deep: true })
</script>

<template>
  <!-- Use viewBox so external scaling is safe -->
  <svg ref="svgRef"
       :width="width" :height="height"
       viewBox="0 0 420 300"
       xmlns="http://www.w3.org/2000/svg"
       style="background:none;">
    <g id="edges"></g>

    <!-- left column -->
    <g id="left">
      <circle v-for="(l,i) in left"
              :id="'L'+l" :key="l"
              :cx="leftX" :cy="topY + i*gapY" :r="r"
              fill="#e6f0ff" stroke="#0044cc" stroke-width="2"/>
      <text v-for="(l,i) in left"
            :x="leftX" :y="topY + i*gapY + 9"
            text-anchor="middle" font-family="sans-serif" font-size="10">
        {{ l }}
      </text>
    </g>

    <!-- right column -->
    <g id="right">
      <circle v-for="(rLab,i) in right"
              :id="'R'+rLab" :key="rLab"
              :cx="rightX" :cy="topY + i*gapY" :r="r"
              fill="#e8ffe6" stroke="#009933" stroke-width="2"/>
      <text v-for="(rLab,i) in right"
            :x="rightX" :y="topY + i*gapY + 9"
            text-anchor="middle" font-family="sans-serif"  font-size="10">
        {{ rLab }}
      </text>
    </g>

    <defs>
      <!-- Arrow stays crisp at any scale -->
      <marker id="arrow" markerUnits="userSpaceOnUse"
              markerWidth="12" markerHeight="8" refX="12" refY="4" orient="auto">
        <path d="M0,0 L12,4 L0,8 Z" fill="black"/>
      </marker>
    </defs>
  </svg>
</template>
