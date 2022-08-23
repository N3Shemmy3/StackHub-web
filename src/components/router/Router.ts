import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../HelloWorld.vue";
import MainView from "../../views/main/MainView.vue";
import SignupView from "../../views/auth/SignupView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HelloWorld,
        },

        {
            path: '/main',
            component: MainView,
        },
        {
            name: 'signup',
            path: '/signup',
            component: SignupView,
            props: { isDrawerOpen: false }

        }
    ],
})