<template>
  <span
    title="{{props.alt}}"
    class="material-icons-outlined h-6 w-6 text-colorOnSurface"
    >{{ props.icon }}</span
  >
</template>
<script lang="ts" setup>
const props = defineProps<{
  icon: String;
  alt: String;
}>();
</script>
<style>
</style>
