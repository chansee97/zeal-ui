---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  image:
    src: /logo.svg
    alt: zeal-ui
  name: "Zeal UI"
  text: "欢迎来到 Zeal UI"
  tagline: Zeal 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。
  actions:
    - theme: brand
      text: 开始使用
      link: /zh-CN/guide/
    - theme: alt
      text: 组件
      link: /zh-CN/components/button

features:
  - title: 全面拥抱 Composition API
    details: 从源码到文档
    icon: 🧩
    link: /zh-CN/guide/
    linkText: Getting Started
  - title: TypeScript
    details: 完全使用 TypeScript 开发，提供完整的类型定义
    icon: 🙌
  - title: Monorepo
    details: Monorepo 管理模式：docs, components, hooks
    icon: 🧶
---

<VPTeamPageTitle>
    <!-- <template #title>
      Our Team
    </template> -->
    <template #lead>
      贡献者  
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers size="small" :members="data" />


<script setup>
import { VPTeamPageTitle,VPTeamMembers } from 'vitepress/theme'

const data = [
  {
    avatar: 'https://www.github.com/chansee97.png',
    name: 'Rock Chen',
    title: 'Creator',
    desc: '总想做点什么',
    links: [
      { icon: 'github', link: 'https://github.com/chansee97' },
    ],
  },
]

</script>