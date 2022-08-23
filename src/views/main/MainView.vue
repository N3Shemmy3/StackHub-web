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
import { MenuItem, getToolbarMenu } from "../../classes/MenuItem";
import { ref } from "vue";

var isDrawerOpen = ref(false);
</script>


<style src="">
</style>

  