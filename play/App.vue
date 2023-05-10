<script setup lang="ts">
import { ref } from 'vue'
import { ZButton, ZInput, ZProgress } from '../packages/components/index'

const count = ref(0)
function add() {
  if (count.value === 100)
    count.value = 0
  count.value += 10
}
</script>

<template>
  <div>
    play===={{ count }}
  </div>

  <ZButton @click="add">
    ok1
  </ZButton>

  <ZInput />

  <ZProgress :percentage="count" />
</template>
