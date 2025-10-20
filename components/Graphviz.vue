<script setup>
import { onMounted } from "vue";
import Viz from "viz.js";
import { Module, render } from "viz.js/full.render.js";

const props = defineProps({ dot: String });
onMounted(async () => {
  const viz = new Viz({ Module, render });
  const svg = await viz.renderSVGElement(props.dot);
  document.getElementById("graphviz").appendChild(svg);
});
</script>

<template>
  <div id="graphviz"></div>
</template>
