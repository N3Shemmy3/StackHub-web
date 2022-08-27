<template>
  <div id="content">
    <Toolbar
      :navigateUp="false"
      title="StackHub"
      class="bg-colorPrimary"
      :menu="getToolbarMenu('home')"
    />
  </div>
</template>


<script setup lang="ts">
import { getToolbarMenu } from "../../classes/MenuItem";
import { ref } from "vue";
</script>


<style src="">
</style>

  