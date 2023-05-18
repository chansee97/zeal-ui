import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import packages from '../../package.json'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Zeal UI 文档站点",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/chansee97/zeal-ui/edit/main/packages/docs/:path',
      text: '对本页提出修改建议',
    },
    lastUpdatedText: '最后更新时间',
    outlineTitle: '本页内容',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: '演练场', link: 'https://play.vuejs.org' },
      {
        text: packages.version, items: [
          { text: 'issue', link: 'https://github.com/chansee97/zeal-ui/issues' },
      ] },
    ],
    sidebar: {
      '/guide/': [
         { text: '介绍', link: '/guide/' },
         { text: '安装', link: '/guide/start' },
         { text: '全局配置', link: '/guide/config' },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '按钮', link: '/components/button' },
          ]
        }
      ]
    },
    docFooter: {
      prev: '前一篇',
      next: '下一篇'
    }
  }
}
