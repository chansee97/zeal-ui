import { createApp } from 'vue'
import { zeal } from '../packages/components/index'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(zeal)
app.use(router)
app.mount('#app')
