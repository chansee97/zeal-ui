import { createApp } from 'vue'
import { zeal } from '../packages/components/index'
import App from './App.vue'

const app = createApp(App)

app.use(zeal)
app.mount('#app')
