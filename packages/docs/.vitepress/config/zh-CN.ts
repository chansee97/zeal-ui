import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Zeal UI 文档站点",
  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/chansee97/zeal-ui/edit/main/packages/docs/:path",
      text: "对本页提出修改建议",
    },
    lastUpdatedText: "最后更新时间",
    outlineTitle: "本页内容",
    nav: [
      { text: '首页', link: `/zh-CN/` },
      { text: '指南', link: `/zh-CN/guide/` },
      { text: '组件', link: `/zh-CN/components/button` },
      { text: '演练场', link: 'https://play.vuejs.org' },
      {
        text: '0.0.1', items: [
          { text: 'issue', link: 'https://github.com/chansee97/zeal-ui/issues' },
      ] },
    ],
    sidebar: {
      [`/zh-CN/guide/`]: [
         { text: '介绍', link: `/zh-CN/guide/` },
         { text: '安装', link: `/zh-CN/guide/start` },
         { text: '全局配置', link: `/zh-CN/guide/config` },
      ],
      [`/zh-CN/components/`]: [
        {
          text: '组件',
          items: [
            { text: '按钮', link: `/zh-CN/components/button` },
          ]
        }
      ]
    },
  }
};
