import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'


export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Zeal UI docs site",
  themeConfig: {
    lastUpdatedText: "Last Updated",
    editLink: {
      pattern:
        "https://github.com/chansee97/zeal-ui/edit/main/packages/docs/en-US/:path",
      text: "Suggest changes to this page",
    },
    nav: [
      { text: "Home", link: `/en-US/` },
      { text: "Guide", link: `/en-US/guide/` },
      { text: "Components", link: `/en-US/components/button` },
      { text: "Playground", link: "https://play.vuejs.org" },
      {
        text: "0.0.1",
        items: [
          {
            text: "issue",
            link: "https://github.com/chansee97/zeal-ui/issues",
          },
        ],
      },
    ],
    sidebar: {
      [`/en-US/guide/`]: [
        { text: "Intro", link: `/en-US/guide/` },
        { text: "Install", link: `/en-US/guide/start` },
        { text: "Global Config", link: `/en-US/guide/config` },
      ],
      [`/en-US/components/`]: [
        {
          text: "components",
          items: [{ text: "Button", link: `/en-US/components/button` }],
        },
      ],
    },
  },
};
