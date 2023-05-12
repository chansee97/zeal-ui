<script setup lang="ts">
import { computed, ref } from 'vue'

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
})

const sizeClass = computed(() => {
  return `z-btn--${props.size}`
})

const typeClass = computed(() => {
  return `z-btn--${props.type}`
})

const clickActiveClass = ref('')
const setClickAnimation = () => {
  if (clickActiveClass.value)
    clickActiveClass.value = ''

  clickActiveClass.value = 'active'
  setTimeout(() => {
    clickActiveClass.value = ''
  }, 600)
}
function onClick(e: MouseEvent) {
  setClickAnimation()
}
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
    @click="onClick"
  >
    <span class="z-btn__label">
      <slot />
    </span>
    <div aria-hidden="true" class="z-btn__wave" :class="[clickActiveClass]" />
    <div aria-hidden="true" class="z-btn__border" />
  </button>
</template>
