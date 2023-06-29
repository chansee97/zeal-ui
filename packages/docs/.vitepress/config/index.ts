import { defineConfig } from 'vitepress'
import { enConfig } from './en-US'
import { sharedConfig } from './shared'
import { zhConfig } from './zh-CN'
// https://vitepress.dev/reference/site-config

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh-CN/",
      ...zhConfig,
    },
    "en-US": {
      label: "English",
      lang: "en-US",
      link: "/en-US/",
      ...enConfig,
    },
  },
});
