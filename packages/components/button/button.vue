<script setup lang="ts">
import { computed, normalizeClass, ref } from 'vue'
import { Loading, Wave } from '../_private'
import type { WaveRef } from '../_private'
import { prefix } from '../config'
import type { ButtonProps } from './type'

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
  name: 'ZButton',
})

const waveRef = ref<WaveRef | null>(null)
function handleClick(e: MouseEvent) {
  if (props.disabled)
    return

  waveRef.value?.play()

  emit('click', e)
}

const mergedPrefixCls = computed(() => `${prefix}-btn`)
const prefixCls = mergedPrefixCls.value
const classes = computed(() => {
  return normalizeClass({
    [prefixCls]: true,
    [`${prefixCls}--${props.size}`]: true,
    [`${prefixCls}--${props.type}`]: true,
    [`${prefixCls}--round`]: props.round,
    [`${prefixCls}--circle`]: props.circle,
    [`${prefixCls}--block`]: props.block,
    [`${prefixCls}--ghost`]: props.ghost,
    [`${prefixCls}--dashed`]: props.dashed,
    [`${prefixCls}--strong`]: props.strong,
    [`${prefixCls}--disabled`]: props.disabled || props.loading,
    [`${prefixCls}--text`]: props.text,

  })
})
</script>

<template>
  <component
    :is="props.tag"
    :type="props.nativeType" :role="props.nativeType"
    :aria-disabled="props.disabled" :disabled="props.disabled"
    :autofocus="props.autofocus"
    :class="classes"
    @click="handleClick"
  >
    <Loading :show="props.loading" />
    <slot name="default" />
    <div v-if="!props.text" aria-hidden="true" :class="[`${prefixCls}__border`]" />
    <Wave v-if="!props.text" ref="waveRef" />
  </component>
</template>
