import { createApp } from 'vue'
import './style.css'
import './assets/base.css'
import App from './App.vue'
import Button from './components/button/Button.vue'
import Toolbar from './components/toolbar/Toolbar.vue'
import InputField from './components/textfield/InputField.vue'
import Icon from './components/icon/Icon.vue'
import Router from './components/router/Router'


const app = createApp(App)
app.component('Icon', Icon)
app.component('Button', Button)
app.component('Toolbar', Toolbar)
app.component('Toolbar', Toolbar)
app.component('InputField', InputField)
app.use(Router)
app.mount('#app')
