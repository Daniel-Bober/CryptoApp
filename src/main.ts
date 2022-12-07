import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/scss/main.scss'
import BaseButton from "@/components/UI/BaseButton.vue";

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.use(createPinia())

app.mount('#app')
