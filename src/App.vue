<template>
  <div>
    <SplashScreen class="hidden" :showSpashScreen="showSpashScreen" />
    <main v-show="!showSpashScreen">
      <div
        id="root"
        class="
          select-none
          md:flex
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
            z-0
            md:relative
            inset-0
            absolute
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
import router from "./libs/router/Router";
import { store } from "./api/store/store";
import { supabase } from "./api/supabase/Supabase";

var isLoading = ref(true);
var showSpashScreen = ref(true);
var isDrawerOpen = ref(true);

store.user = supabase.auth.user() ?? {};
supabase.auth.onAuthStateChange((_, session) => {
  if (session) {
    store.user = session.user ?? {};
  }
});

onMounted(() => {
  // isUserLoggedIn();
  setTimeout(() => {
    showSpashScreen.value = false;
  }, 5000);
});

router.beforeEach((to, from) => {
  showProgressScreen(true);
  if (to.name == "signup") {
    isDrawerOpen.value = false;
  }
});
router.afterEach((to, from) => {
  showProgressScreen(false);
});

function isUserLoggedIn() {
  if (store.user) {
    router.push("main");
  } else {
    router.push("signup");
  }
}
function showProgressScreen(bool: boolean) {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
}
</script>


<style src="">
</style>

  