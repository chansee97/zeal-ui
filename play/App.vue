<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark({ storageKey: 'color-mode' })

function toggleDark() {
  isDark.value = !isDark.value
}

const navLinks = [
  'button',
  'input',
  'progress',
]
</script>

<template>
  <h1>
    component dev test <z-button @click="toggleDark">
      dark:{{ isDark }}
    </z-button>

    <z-hello />
  </h1>

  <div class="demo-container">
    <nav>
      <router-link v-for="link in navLinks" :key="link" :to="`/${link}`">
        {{ link }}
      </router-link>
    </nav>

    <div class="router-container">
      <router-view />
    </div>
  </div>
</template>

<style>
.demo-container{
  display: flex;
}

nav{
   display: flex;
   flex-direction: column;
   width: 100px;
}

.router-container{
  flex: 1;
  height:800px;
  overflow: auto;
  border: 1px solid #ccc;
}
</style>
