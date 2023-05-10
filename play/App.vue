<script setup lang="ts">
import { ref } from 'vue'
import { useDark } from '@vueuse/core'

const isDark = useDark({ storageKey: 'color-mode' })

function toggleDark() {
  isDark.value = !isDark.value
}

const count = ref(0)
function add() {
  if (count.value >= 100)
    count.value = 0
  count.value += 10
}
</script>

<template>
  <h1>
    component dev test <z-button @click="toggleDark">
      dark:{{ isDark }}
    </z-button>
  </h1>

  <div class="demo-container">
    <z-button @click="add">
      add percentage
    </z-button>
    <div>
      <z-input placeholder="请输入..." />
    </div>

    <z-progress :percentage="count" />
  </div>
</template>

<style>
.demo-container{
  width: 1200px;
  margin:auto;
}
</style>
