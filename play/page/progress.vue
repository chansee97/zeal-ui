<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
function add() {
  if (count.value >= 100)
    count.value = 0
  count.value += 10
}
</script>

<template>
  <div>
    <z-button @click="add">
      add percentage
    </z-button>
    <z-progress :percentage="count" />
  </div>
</template>
