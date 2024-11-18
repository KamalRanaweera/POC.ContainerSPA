import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { componentA } from '@spa/app-component-a'
import { componentB } from '@spa/app-component-b'
import { componentC } from '@spa/app-component-c'

const app = createApp(App)

const pinia = createPinia();
app.use(pinia)
app.use(componentA, { piniaInstance: pinia });
app.use(componentB, { routerInstance: router });
app.use(componentC, { piniaInstance: pinia, routerInstance: router });
app.use(router)
app.mount('#app')
