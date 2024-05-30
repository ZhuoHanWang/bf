import './style.css'
import DataVVue3 from '@kjgl77/datav-vue3'
import { createApp } from 'vue'
import App from './App.vue'

// 全局引入并且使用@kjgl77/datav-vue3库
const app = createApp(App)
app.use(DataVVue3)
app.mount('#app')
