<script setup lang="ts">
/** Front-matter props */
const props = defineProps<{
  /** grid template for columns: e.g. "3fr 2fr", "60% 40%", "320px 1fr" */
  cols?: string
  /** gap between columns/rows (any CSS length) */
  gap?: string
  /** extra classes for the header row */
  headerClass?: string
}>()

const cols = props.cols ?? '1fr 1fr'
const gap = props.gap ?? '1.5rem'
</script>

<template>
  <div class="slidev-layout two-cols-header-custom">
    <!-- header row spans both columns -->
    <div :class="['mb-4', headerClass]">
      <slot />
    </div>

    <!-- two columns -->
    <div
      class="grid items-start"
      :style="{ gridTemplateColumns: cols, gap }"
    >
      <div class="col-left">
        <slot name="left" />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>

    <!-- New 'after' row -->
    <div class="mt-4">
      <slot name="after" />
    </div>
  </div>
</template>


<style scoped>
.slidev-layout.two-cols-header-custom {
  /* keep things tidy on very narrow screens */
  container-type: inline-size;
}
@container (max-width: 720px) {
  .grid { grid-template-columns: 1fr !important; }
}
</style>
