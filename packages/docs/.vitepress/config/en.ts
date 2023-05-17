import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Zeal UI docs site",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/chansee97/zeal-ui/edit/main/packages/docs/en/:path',
      text: 'Suggest changes to this page',
    },
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Guide', link: '/en/guide/' },
      { text: 'Components', link: '/en/components/button' },
      { text: 'Playground', link: 'https://play.vuejs.org' },
      {
        text: '0.0.1', items: [
          { text: 'issue', link: 'https://github.com/chansee97/zeal-ui/issues' },
        ]
      },
    ],
    sidebar: {
      '/en/guide/': [
         { text: 'Intro', link: '/en/guide/' },
         { text: 'Install', link: '/en/guide/start' },
         { text: 'Global Config', link: '/en/guide/config' },
      ],
      '/en/components/': [
        {
          text: 'components',
          items: [
            { text: 'Button', link: '/en/components/button' },
          ]
        }
      ]
    },
  }
}
