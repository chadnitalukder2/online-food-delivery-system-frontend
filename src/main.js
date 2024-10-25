import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios';
import ElementPlus  from 'element-plus'
import Notifications  from '@kyvg/vue3-notification'

const app = createApp(App)

app.use(Notifications )
app.use(ElementPlus)
app.use(router)

app.mount('#app')
