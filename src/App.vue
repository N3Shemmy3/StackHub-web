<template>
  <div>
    <SplashScreen :showSpashScreen="showSpashScreen" />
    <main v-show="!showSpashScreen">
      <div
        id="root"
        class="
          select-none
          flex
          absolute
          aling-items-stretch
          overflow-hidden
          transition-all
          duration-300
          w-full
          h-full
        "
      >
        <!-- Drawer-->
        <Drawer
          id="drawer"
          :isDrawerOpen="isDrawerOpen"
          :menu="getDrawerMenu('home')"
        />
        <!-- Page Content -->
        <div
          id="container"
          class="
            relative
            h-full
            shrink
            flex-1
            bg-colorBackground
            text-colorOnBackground
          "
        >
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>


<script setup lang="ts">
import Drawer from "./components/drawer/Drawer.vue";
import SplashScreen from "./views/splashscreen/splashscreen.vue";

import { onMounted, ref } from "vue";
import { getDrawerMenu } from "./classes/MenuItem";
import Router from "./components/router/Router";

var isLoading = ref(true);
var showSpashScreen = ref(true);
var isDrawerOpen = ref(true);

onMounted(() => {
  setTimeout(() => {
    showSpashScreen.value = false;
  }, 5000);
});

Router.beforeEach((to, from) => {
  showProgressScreen(true);
  if (to.name == "signup") {
    showSpashScreen.value = false;
  }
});
Router.afterEach((to, from) => {
  showProgressScreen(false);
});
function showProgressScreen(bool: boolean) {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
}
</script>


<style src="">
</style>
  