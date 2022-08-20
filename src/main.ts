import { createApp } from 'vue'
import './style.css'
import './assets/base.css'
import App from './App.vue'
import Icon from './components/icon/Icon.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainView from './views/MainView.vue'
import Drawer from './components/naviagtion/Drawer.vue'
import HelloWorld from './components/HelloWorld.vue'


const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HelloWorld,
        },
    ],
})
app.component('Icon', Icon)
app.use(router)
app.mount('#app')

css: {
    loaderOptions: {
        modules: {
            auto: () => true
        }
    }
}