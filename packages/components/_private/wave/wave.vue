<script setup lang="ts">
import { nextTick, ref } from 'vue'

const selfRef = ref<HTMLElement>()

function play() {
  nextTick(() => {
    if (selfRef.value && selfRef.value.parentElement && selfRef.value.animate) {
      const borderColor = getComputedStyle(selfRef.value.parentElement).borderColor
      selfRef.value.animate(
        [
          {
            // from
            opacity: 0.6,
            boxShadow: `0 0 1px 0 ${borderColor}`,
            zIndex: 1,
            easing: 'cubic-bezier(0, 0, 0.2, 1)',
          },
          {
            // to
            opacity: 0,
            zIndex: 0,
            boxShadow: `0 0 1px 5px ${borderColor}`,
          },
        ],
        600,
      )
    }
  })
}

defineExpose({
  play,
})
</script>

<template>
  <div ref="selfRef" aria-hidden="true" class="z-wave" />
</template>

<style>
.z-wave{
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
}
</style>
