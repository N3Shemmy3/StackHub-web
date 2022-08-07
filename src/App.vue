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

      <div id="content">
        <Icon icon="menu" alt="menu" />
      </div>
    </div>
    <UiClasses />
  </div>
</template>


<script setup lang="ts">
import { FunctionalComponent, onMounted, ref } from "vue";
import Icon from "./components/md/Icon.vue";
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
      list.push(new MenuItem(0, "home", "Home"));
      list.push(new MenuItem(1, "inbox", "Inbox"));
      list.push(new MenuItem(2, "cloud", "Codespaces "));
      list.push(new MenuItem(3, "notifications", "Notifications "));
      list.push(new MenuItem(4, "setings", "Settings "));
      list.push(new MenuItem(5, "menu", "MenuItem "));
      list.push(new MenuItem(6, "menu", "MenuItem "));
      list.push(new MenuItem(7, "menu", "MenuItem "));

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
        const item = new MenuItem(index, "menu", "MenuItem " + index);
        list.push(item);
      }
      break;

    default:
      break;
  }
  return list;
}
</script>


<style src="">
</style>
  