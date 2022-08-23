<template>
  <div
    :title="props.alt"
    class="
      h-10
      pl-4
      pr-6
      flex
      items-center
      align-middle
      justify-center
      rounded-md
      bg-colorPrimaryContainer
      cursor-pointer
      active:bg-opacity-80
      focus:bg-opacity-80
      hover:bg-opacity-90
      disabled:bg-opacity-60
      transitions-all
      duration-350
    "
    :class="{ 'px-6': props.icon }"
  >
    <Icon
      v-if="props.icon"
      id="startIcon"
      :icon="props.icon"
      class="
        h-[18px]
        w-[18px]
        active:bg-opacity-80
        focus:bg-opacity-80
        hover:bg-opacity-90
        disabled:bg-opacity-60
        mr-2
      "
    />
    <span
      id="text"
      class="
        text-colorOnSurface
        font-medium
        active:bg-opacity-80
        focus:bg-opacity-80
        hover:bg-opacity-90
        disabled:bg-opacity-60
      "
      >{{ props.text }}</span
    >
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  icon: string;
  text: string;
  alt: string;
  type: string;
}>();
</script>

<style>
.button {
  @apply font-medium;
}
</style>
