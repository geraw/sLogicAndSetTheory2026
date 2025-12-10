<script setup lang="ts">
import { inject } from 'vue'

const { isOpen, close } = inject('proofState') as { isOpen: any, close: () => void }
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center text-left" @click="close">
      <div class="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl max-w-3xl max-h-[90vh] overflow-y-auto relative text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 w-full mx-4 text-lg" @click.stop>
        <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors" @click="close">
          <carbon:close class="text-2xl" />
        </button>
        <div class="prose dark:prose-invert max-w-none pr-8 font-serif leading-relaxed text-right" dir="rtl">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
:deep(.mjx-container) {
  font-size: 110% !important;
}
</style>
