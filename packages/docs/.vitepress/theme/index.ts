import Theme from "vitepress/theme";
import "./vars.css";
import { zeal } from "@zeal-ui/components";
import { docComponents } from "./components";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

export default {
  ...Theme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    app.use(zeal);
    app.use(docComponents);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },

};
