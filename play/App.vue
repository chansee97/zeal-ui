<script setup lang="ts">
import { ref } from 'vue'
import { ZButton, ZInput } from '../packages/components/index'

const count = ref(0)
</script>

<template>
  <div>
    play===={{ count }}
  </div>

  <ZButton @click="count++">
    ok1
  </ZButton>

  <ZInput />
</template>
