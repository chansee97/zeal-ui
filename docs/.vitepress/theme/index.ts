import Theme from 'vitepress/theme'
import './vars.css'
import { zeal } from '@zeal-ui/components'

export default {
  ...Theme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    app.use(zeal)
  },
};
