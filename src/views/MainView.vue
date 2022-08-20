<template>
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
      <Toolbar
        :navigateUp="false"
        title="StackHub"
        :menu="getToolbarMenu('home')"
        avatar="https://avatars.githubusercontent.com/u/67279072?v=4"
        :onBackItemClicked="(isDrawerOpen = !isDrawerOpen)"
      />
      <div id="content" class="px-4 py-2">
        <Icon icon="menu" alt="menu" />
        <router-view />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Toolbar from "../components/toolbar/Toolbar.vue";
import Drawer from "../components/drawer/Drawer.vue";
import { MenuItem } from "../classes/UiClasses.vue";
import { ref } from "vue";

var menu: Array<MenuItem> = Array<MenuItem>();
var isDrawerOpen = true;

function getDrawerMenu(key: string): Array<MenuItem> {
  let list: Array<MenuItem> = new Array<MenuItem>();
  switch (key) {
    case "home":
      list.push(new MenuItem(0, "home", "Home"));
      list.push(new MenuItem(1, "inbox", "Inbox"));
      list.push(new MenuItem(2, "cloud", "Codespaces "));
      list.push(new MenuItem(3, "notifications", "Notifications "));
      list.push(new MenuItem(4, "settings", "Settings "));
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
        list.push(new MenuItem(index, "menu", "MenuItem " + index));
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

  