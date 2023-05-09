<script setup lang="ts">
import { ref } from 'vue'
import { Zbutton } from '../packages/components/index'

const count = ref(0)
</script>

<template>
  <div>
    play===={{ count }}
  </div>

  <Zbutton @click="count++">
    ok1
  </Zbutton>
</template>
