<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  play{{ count }}
  <button @click="count++">
    add
  </button>
</template>
