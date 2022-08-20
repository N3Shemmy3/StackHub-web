<template>
  <div>
    <SplashScreen :isLoading="isLoading" />
    <main v-show="!isLoading">
      <MainView />
    </main>
  </div>
</template>


<script setup lang="ts">
import MainView from "./views/MainView.vue";
import SplashScreen from "./views/splashscreen/splashscreen.vue";
import { onMounted, ref } from "vue";

var isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
});
</script>


<style src="">
</style>
  