<script setup lang="ts">
import { ref, provide } from 'vue'

const isOpen = ref(false)

function close() {
  isOpen.value = false
}

function open() {
  isOpen.value = true
}

provide('proofState', {
  isOpen,
  close,
  open
})
</script>

<template>
  <span 
    class="inline-block cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-1 transition-colors duration-200"
    @click="open"
    title="לחץ להוכחה"
  >
    <slot />
    <!-- <span class="text-xs text-gray-400 ml-1 opacity-50 hover:opacity-100">(הוכחה)</span> -->
  </span>
</template>
