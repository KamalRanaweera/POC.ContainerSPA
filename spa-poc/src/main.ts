import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { componentB } from '@spa/app-component-b'
import { componentA } from '@spa/app-component-a'

const app = createApp(App)

const pinia = createPinia();
app.use(pinia)
app.use(componentA, { piniaInstance: pinia });
app.use(componentB, { routerInstance: router });
app.use(router)
app.mount('#app')
