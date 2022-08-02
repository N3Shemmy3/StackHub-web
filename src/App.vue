<script setup lang="ts">
import { onMounted } from "vue";
import Toolbar from "./components/naviagtion/Toolbar.vue";
import Drawer from "./components/naviagtion/Drawer.vue";

function use(navbar: typeof Toolbar, sidebar: typeof Drawer) {
  console.log(Toolbar, Drawer);
}
</script>

<template>
  <div
    id="app"
    class="absolute md:flex transition-all duration-300 w-full h-full"
  >
    <!-- Drawer-->
    <Drawer id="drawer" class="z-60" />
    <!-- Page Content -->
    <div
      id="container"
      class="w-full h-full flex-1 bg-colorBackground text-colorOnBackground"
    >
      <Toolbar id="navbar" />

      <div id="content"></div>
    </div>
  </div>
</template>


<style scoped>
</style>
  