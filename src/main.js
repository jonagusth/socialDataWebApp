import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap' //eslint-disable-line
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
