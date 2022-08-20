<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="content">
      <svg width="144" height="144">
        <path
          class="fill-colorOnSecondary"
          d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Zm3-3h5.65V24.75H31.3V39H37V19.5L24.1 9.75 11 19.5Zm13-14.65Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isLoading: Boolean;
}>();
</script>

<style>
.loader {
  @apply bg-colorSecondary w-full h-full bottom-0  fixed  block left-0 overflow-hidden;
}
.content {
  width: 144px;
  height: 144px;
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
  animation: fadeout 3s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
