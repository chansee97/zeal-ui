<script setup lang="ts">
import { ref } from 'vue'

const _disabled = ref(0)
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
    <p>disabled | nativeType | strong | tag</p>
    <div>
      <z-button disabled @click="_disabled++">
        disabled
      </z-button>{{ _disabled }}
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
  </div>
</template>
