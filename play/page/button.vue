<script setup lang="ts">
import { ref } from 'vue'

const _disabled = ref(0)

const _loading = ref(false)
function startLoading() {
  _loading.value = true
  setTimeout(() => {
    _loading.value = false
  }, 4000)
}
</script>

<template>
  <div>
    <p>type</p>
    <div>
      <z-button />
      <z-button type="default">
        default
      </z-button>
      <z-button type="primary">
        primary
      </z-button>
      <z-button type="success">
        success
      </z-button>
      <z-button type="info">
        info
      </z-button>
      <z-button type="warning">
        warning
      </z-button>
      <z-button type="error">
        error
      </z-button>
    </div>

    <p>size round</p>
    <div>
      <z-button size="small">
        small
      </z-button>
      <z-button size="medium">
        medium
      </z-button>
      <z-button size="large">
        large
      </z-button>
      <z-button size="small" round>
        small小
      </z-button>
      <z-button size="medium" round>
        medium中
      </z-button>
      <z-button size="large" round>
        large大
      </z-button>
    </div>

    <p>circle</p>
    <z-button circle round>
      button
    </z-button>
    <z-button circle />
    <p>nativeType | strong | tag</p>
    <div>
      <z-button native-type="submit">
        nativeType
      </z-button>
      <z-button strong>
        strong
      </z-button>
      <z-button tag="a">
        tag:A
      </z-button>
    </div>
    <p>block</p>
    <z-button block>
      block
    </z-button>
    <p>ghost</p>
    <div style="padding: 10px;background-color: #1f1f1f;">
      <z-button ghost type="default">
        default
      </z-button>
      <z-button ghost type="primary">
        primary
      </z-button>
      <z-button ghost type="success">
        success
      </z-button>
      <z-button ghost type="info">
        info
      </z-button>
      <z-button ghost type="warning">
        warning
      </z-button>
      <z-button ghost type="error">
        error
      </z-button>
    </div>

    <p>dashed</p>
    <div>
      <z-button dashed type="default">
        default
      </z-button>
      <z-button dashed type="primary">
        primary
      </z-button>
      <z-button dashed type="success">
        success
      </z-button>
      <z-button dashed type="info">
        info
      </z-button>
      <z-button dashed type="warning">
        warning
      </z-button>
      <z-button dashed type="error">
        error
      </z-button>
    </div>
    <p>disabled</p>
    <div>
      <z-button disabled type="default" @click="_disabled++">
        default
      </z-button>
      <z-button disabled type="primary" @click="_disabled++">
        primary
      </z-button>
      <z-button disabled type="success" @click="_disabled++">
        success
      </z-button>
      <z-button disabled type="info" @click="_disabled++">
        info
      </z-button>
      <z-button disabled type="warning" @click="_disabled++">
        warning
      </z-button>
      <z-button disabled type="error" @click="_disabled++">
        error
      </z-button>
      {{ _disabled }}
    </div>

    <p>text</p>
    <div>
      <z-button text type="default">
        default
      </z-button>
      <z-button text type="primary">
        primary
      </z-button>
      <z-button text type="success">
        success
      </z-button>
      <z-button text type="info">
        info
      </z-button>
      <z-button text type="warning">
        warning
      </z-button>
      <z-button text type="error">
        error
      </z-button>
    </div>
    <p>Loading</p>
    <div>
      <z-button :loading="_loading" @click="startLoading">
        Loading
      </z-button>
    </div>
  </div>
</template>
