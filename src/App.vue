<template>
  <div
    id="root"
    class="
      absolute
      flex
      overflow-hidden
      transition-all
      duration-300
      w-full
      h-full
    "
  >
    <!-- Drawer-->
    <Drawer id="drawer" :isDrawerOpen="true" :menu="getDrawerMenu('home')" />
    <!-- Page Content -->
    <div
      id="container"
      class="
        relative
        h-full
        flex-1
        md:left-80
        bg-colorBackground
        text-colorOnBackground
      "
    >
      <Toolbar
        :navigateUp="false"
        title="StackHub"
        :menu="getToolbarMenu('home')"
        avatar="https://avatars.githubusercontent.com/u/67279072?v=4"
      />

      <div id="content"></div>
    </div>
    <UiClasses />
  </div>
</template>


<script setup lang="ts">
import { FunctionalComponent, onMounted, ref } from "vue";
import Toolbar from "./components/naviagtion/Toolbar.vue";
import Drawer from "./components/naviagtion/Drawer.vue";
import {
  BellIcon,
  CloudIcon,
  CogIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
} from "@heroicons/vue/outline";
import { MenuItem } from "./classes/UiClasses.vue";
import UiClasses from "./classes/UiClasses.vue";

var menu: Array<MenuItem> = Array<MenuItem>();
//menu = getDrawerMenu("home");

function getDrawerMenu(key: string): Array<MenuItem> {
  let list: Array<MenuItem> = new Array<MenuItem>();
  switch (key) {
    case "home":
      list.push(new MenuItem(0, HomeIcon, "Home"));
      list.push(new MenuItem(1, InboxIcon, "Inbox"));
      list.push(new MenuItem(2, CloudIcon, "Codespaces "));
      list.push(new MenuItem(3, BellIcon, "Notifications "));
      list.push(new MenuItem(4, CogIcon, "Settings "));
      list.push(new MenuItem(5, MenuIcon, "MenuItem "));
      list.push(new MenuItem(6, MenuIcon, "MenuItem "));
      list.push(new MenuItem(7, MenuIcon, "MenuItem "));

      break;

    default:
      break;
  }
  return list;
}

function getToolbarMenu(key: string): Array<MenuItem> {
  let list: Array<MenuItem> = new Array<MenuItem>();
  switch (key) {
    case "home":
      for (let index = 0; index < 3; index++) {
        const item = new MenuItem(index, MenuIcon, "MenuItem " + index);
        list.push(item);
      }
      break;

    default:
      break;
  }
  return list;
}
</script>


<style scoped>
</style>
  