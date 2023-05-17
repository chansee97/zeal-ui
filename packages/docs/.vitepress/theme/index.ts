import Theme from 'vitepress/theme'
import './vars.css'
// import { zeal } from '@zeal-ui/components'

export default {
  ...Theme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    // app.use(zeal)
  },
};
