import { createApp } from 'vue'
import { zeal } from '@zeal-ui/components'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(zeal)
app.use(router)
app.mount('#app')
