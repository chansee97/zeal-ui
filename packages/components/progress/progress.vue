<script lang="ts">
export default {
  name: 'Progress',
}
</script>

<script setup lang="ts">
interface Props {
  percentage: number
}
const props = withDefaults(defineProps<Props>(), {
  percentage: 0,
})
</script>

<template>
  <div class="z-progress">
    <div class="z-progress-fill" :style="{ 'max-width': `${props.percentage}%` }" />
  </div>
</template>

<style scoped>
@import url('./progress.css')
</style>
