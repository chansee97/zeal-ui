<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  round?: boolean
  circle?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'
  autofocus?: boolean
  block?: boolean
  ghost?: boolean
  dashed?: boolean
  nativeType?: 'button' | 'submit' | 'reset'
  strong?: boolean
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  round: false,
  circle: false,
  disabled: false,
  size: 'medium',
  type: 'default',
  autofocus: false,
  ghost: false,
  dashed: false,
  nativeType: 'button',
  strong: false,
  tag: 'button',
})

const sizeClass = computed(() => {
  return `z-btn--${props.size}`
})

const typeClass = computed(() => {
  return `z-btn--${props.type}`
})

const _tag = computed(() => {
  return props.tag || 'button'
})
</script>

<script lang="ts">
export default {
  name: 'Button',
}
</script>

<template>
  <button
    :type="nativeType" :role="nativeType"
    :aria-disabled="disabled" :disabled="disabled"
    :autofocus="autofocus"
    class="z-btn"
    :class="[{
      'z-btn--round': props.round,
      'z-btn--circle': props.circle,
      'z-btn--block': props.block,
      'z-btn--ghost': props.ghost,
      'z-btn--dashed': props.dashed,
      'z-btn--strong': props.strong,
    }, sizeClass, typeClass]"
  >
    <span>
      <slot />
    </span>
    <div aria-hidden="true" class="z-btn__border" />
    <div aria-hidden="true" class="z-btn__ping" />
  </button>
</template>
