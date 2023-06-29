import { defineConfig } from "vitepress";
import {
  demoblockPlugin,
  demoblockVitePlugin,
} from "vitepress-theme-demoblock";

export const sharedConfig = defineConfig({
  title: "Zeal UI",
  titleTemplate: "Zeal",
  head: [
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    ["meta", { name: "author", content: "Rock Chen" }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: "min-light",
      dark: "min-dark",
    },
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  themeConfig: {
    logo: "/logo.svg",
    outline: [2, 3],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/chansee97/zeal-ui" },
    ],
    docFooter: {
      prev: false,
      next: false,
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Rock Chen",
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
});
