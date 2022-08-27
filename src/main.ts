import { createApp } from 'vue'
import './style.css'
import './assets/base.css'
import App from './App.vue'
import Button from './components/button/Button.vue'
import Toolbar from './components/toolbar/Toolbar.vue'
import InputField from './components/textfield/InputField.vue'
import Icon from './components/icon/Icon.vue'

import Router from './libs/router/Router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.component('Icon', Icon)
app.component('Button', Button)
app.component('Toolbar', Toolbar)
app.component('InputField', InputField)
app.use(pinia)
app.use(Router)
app.mount('#app')
