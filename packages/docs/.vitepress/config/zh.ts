import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Zeal UI 文档站点",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/chansee97/zeal-ui/edit/main/packages/docs/zh/:path',
      text: '对本页提出修改建议',
    },
    outlineTitle: '本页内容',
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/' },
      { text: '组件', link: '/zh/components/button' },
      { text: '演练场', link: 'https://play.vuejs.org' },
      {
        text: '0.0.1', items: [
          { text: 'issue', link: 'https://github.com/chansee97/zeal-ui/issues' },
      ] },
    ],
    sidebar: {
      '/zh/guide/': [
         { text: '介绍', link: '/zh/guide/' },
         { text: '安装', link: '/zh/guide/start' },
         { text: '全局配置', link: '/zh/guide/config' },
      ],
      '/zh/components/': [
        {
          text: '组件',
          items: [
            { text: '按钮', link: '/zh/components/button' },
          ]
        }
      ]
    },
  }
}
