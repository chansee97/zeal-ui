import { defineConfig } from 'vitepress'

export const sharedConfig = defineConfig({
  title: "Zeal UI",
  titleTemplate: 'Zeal',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'min-light',
      dark: 'min-dark',
    },
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdatedText: 'Last Updated',
    logo: '/logo.svg',
    search: {
      provider: 'local'
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
