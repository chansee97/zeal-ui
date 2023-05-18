# Button

基础通用组件，用于标记一组操作命令，由用户点击触发，响应用户并完成相应的业务逻辑。

## 按钮类型 <Badge type="info" text="default" />

 <div>
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

::: details view the code

```html
 <div>
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
```
:::
## 按钮尺寸
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
</div>

## 按钮禁用
<div>
  <z-button disabled type="default">
    default
  </z-button>
  <z-button disabled type="primary">
    primary
  </z-button>
  <z-button disabled type="success">
    success
  </z-button>
  <z-button disabled type="info">
    info
  </z-button>
  <z-button disabled type="warning">
    warning
  </z-button>
  <z-button disabled type="error" @click="_disabled++">
    error
  </z-button>
</div>

## 圆角
<div>
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

## 渲染标签
比如渲染成a标签
<z-button type="primary" text tag="a">tag:A</z-button>

## Block 按钮
<z-button block type="primary">
  block
</z-button>

## 幽灵按钮
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

## 虚线按钮
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

## 文本按钮
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

## 加载状态
<script setup>
import { ref } from 'vue'
const _loading = ref(false)

function startLoading() {
  _loading.value = true
  setTimeout(() => {
    _loading.value = false
  }, 2000)
}
</script>

<z-button :loading="_loading" @click="startLoading">
  Loading
</z-button>

::: details view the code
::: code-group

```ts [setup]
import { ref } from 'vue'

const _loading = ref(false)

function startLoading() {
  _loading.value = true
  setTimeout(() => {
    _loading.value = false
  }, 2000)
}
```

```html [setup]

<z-button :loading="_loading" @click="startLoading">
  Loading
</z-button>
```

:::


## API

### Button Props
| 名称 | 说明 | 类型  | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `size` | 按钮大小类型 | `'small'\| 'medium' \| 'large'` | `medium` | - |
| `type` | 按钮类型 | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'error'` | `default` | - |
| `round` | 按钮是否为圆角 | `boolean` | `false` | - |
| `circle` | 按钮是否为圆形 | `boolean` | `false` | - |
| `disabled` | 设置禁用状态 | `boolean` | `false` | - |
| `autofocus` | 按钮自动聚焦| `boolean` | `false` | button原生属性 |
| `ghost` | 设置幽灵状态| `boolean` | `false` | - |
| `dashed` | 按钮是否为显示虚线 | `boolean` | `false` | - |
| `strong` | 按钮文本是否加粗 | `boolean` | `false` | - |
| `text` | 是否为文本按钮 | `boolean` | `false` | - |
| `loading` | 是否为加载状态 | `boolean` | `false` | - |
| `nativeType` | 原生按钮类型 | `'button' \| 'submit' \| 'reset'` | `button` | - |
| `block` | 将按钮宽度调整为自适应其父元素的宽度 | `boolean` | `false` | - |
| `tag` | 设置渲染标签 | `string` | `button` | - |

### Button Events
| 名称 | 说明 | 参数  | 版本 |
| --- | --- | --- | --- |
| `click` | 左键点击按钮时触发， 返回点击的事件对象 | `(event: MouseEvent)` | - |

### Button Slots
| 名称 | 说明 | 参数  |
| --- | --- | --- | 
| `default` | 按钮的内容 | `()` | 