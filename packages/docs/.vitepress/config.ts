import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zeal UI",
  titleTemplate: 'Zeal',
  description: "Zeal UI docs site",
  // 打包目录
  outDir: '../dist',

  srcDir: './src',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/zeal-ui.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdatedText: 'Last Updated', // string | boolean
    logo: '/zeal-ui.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduce' },
      { text: '组件', link: '/components/button' },
      { text: '演练场', link: 'https://play.vuejs.org' },
      {
        text: '0.0.1', items: [
          { text: 'issue', link: 'https://github.com/chansee97/zeal-ui/issues' },
      ] },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: 'Zeal', link: '/guide/introduce' },
          ]
        },
         {
          text: '快速开始',
          items: [
            { text: '安装', link: '/guide/start' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'components',
          items: [
            { text: 'Button', link: '/components/button' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chansee97/zeal-ui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Rock Chen'
    }
  }
})
