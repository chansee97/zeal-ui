<script setup lang="ts">
interface Props {
  percentage: number
}
const props = withDefaults(defineProps<Props>(), {
  percentage: 0,
})

defineOptions({
  name: 'ZProgress',
})
</script>

<template>
  <div class="z-progress">
    <div class="z-progress__fill" :style="{ 'max-width': `${props.percentage}%` }" />
  </div>
</template>
