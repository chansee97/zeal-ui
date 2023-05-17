<script setup lang="ts">
import { ref } from 'vue'
import { Loading, Wave } from '../_private'
import { prefix } from '../config'
import type { ButtonProps } from './props'

const props = withDefaults(defineProps<ButtonProps>(), {
  round: false,
  circle: false,
  disabled: false,
  autofocus: false,
  ghost: false,
  dashed: false,
  strong: false,
  text: false,
  loading: false,
  size: 'medium',
  type: 'default',
  nativeType: 'button',
  tag: 'button',
})

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

defineOptions({
  name: 'Btn',
})

const waveRef = ref()
function handleClick(e: MouseEvent) {
  if (props.disabled)
    return

  waveRef.value.play()

  emit('click', e)
}
</script>

<template>
  <component
    :is="props.tag"
    :type="nativeType" :role="nativeType"
    :aria-disabled="disabled" :disabled="disabled"
    :autofocus="autofocus"
    class="z-btn"
    :class="[
      `${prefix}-btn`,
      `${prefix}-btn--${props.size}`,
      `${prefix}-btn--${props.type}`,
      props.round && `${prefix}-btn--round`,
      props.circle && `${prefix}-btn--circle`,
      props.block && `${prefix}-btn--block`,
      props.ghost && `${prefix}-btn--ghost`,
      props.dashed && `${prefix}-btn--dashed`,
      props.strong && `${prefix}-btn--strong`,
      (props.disabled || props.loading) && `${prefix}-btn--disabled`,
      props.text && `${prefix}-btn--text`,
    ]"
    @click="handleClick "
  >
    <Loading :show="props.loading" />
    <slot name="default" />
    <div v-if="!props.text" aria-hidden="true" :class="[`${prefix}-btn__border`]" />
    <Wave v-if="!props.text" ref="waveRef" />
  </component>
</template>
