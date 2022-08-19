<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
  <div class="content">
    Hmmmmmm
      <Icon icon="settings" alt="App Icon" class=" text-colorOnSurface "/>
  </div>
 </div>
</template>

<script setup lang="ts">
import Icon from "./components/md/Icon.vue"
const props = defineProps<{
  isLoading: Boolean;
}>();
</script>

<style>
.loader {
@apply bg-colorSurface w-full h-full bottom-0 text-colorOnSurface fixed  block left-0 overflow-hidden;
}
.content {
        width: 200px;
        height: 600px;
        position: absolute; /*Can also be `fixed`*/
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/
        max-width: 100%;
        max-height: 100%;
}
.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
