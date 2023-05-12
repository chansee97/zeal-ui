<script setup lang="ts">
interface Props {
  percentage: number
}
const props = withDefaults(defineProps<Props>(), {
  percentage: 0,
})
</script>

<script lang="ts">
export default {
  name: 'Progress',
}
</script>

<template>
  <div class="z-progress">
    <div class="z-progress__fill" :style="{ 'max-width': `${props.percentage}%` }" />
  </div>
</template>
