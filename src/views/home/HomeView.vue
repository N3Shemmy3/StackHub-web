<template>
  <div id="content">
    <Toolbar
      :navigateUp="false"
      title="StackHub"
      :menu="getToolbarMenu('home')"
      avatar="https://avatars.githubusercontent.com/u/67279072?v=4"
      :onBackItemClicked="(isDrawerOpen = !isDrawerOpen)"
    />
  </div>
</template>


<script setup lang="ts">
import Toolbar from "../../components/toolbar/Toolbar.vue";
import { MenuItem } from "../../classes/UiClasses.vue";
import { ref } from "vue";

var isDrawerOpen = ref(false);

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

  