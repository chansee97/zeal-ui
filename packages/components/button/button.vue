<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  round: boolean
  size: 'small' | 'medium' | 'large'
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'
}
const props = withDefaults(defineProps<Props>(), {
  round: false,
  size: 'medium',
  type: 'default',
})

const sizeClass = computed(() => {
  return `z-btn-size-${props.size}`
})

const typeClass = computed(() => {
  return `z-btn-type-${props.type}`
})
</script>

<script lang="ts">
export default {
  name: 'Button',
}
</script>

<template>
  <button
    type="button" role="button"
    :class="[{ 'z-btn-round': props.round }, sizeClass, typeClass]" class="z-btn"
  >
    <slot />
  </button>
</template>
