
<template>
  <ul
    class="
      w-80
      p-4
      h-full
      z-60
      md:left-0
      shadow-md
      bg-colorSurface
      absolute
      transition-all
      duration-300
      ease-in-out
    "
  >
    <div class="p-2 mb-1 flex items-center">
      <MenuIcon class="w-6 h-6 mr-3 text-colorPrimary"></MenuIcon>
      <p class="text-colorOnSurface title-large font-extrabold">StackHub</p>
    </div>
    <li
      v-for="menuItem in props.menu"
      :key="menuItem.Title"
      class="
        flex
        items-center
        p-4
        h-12
        rounded-3xl
        hover:bg-colorPrimaryContainer
        active:bg-colorPrimaryContainer
        transition-all
        duration-300
        ease-in-out
        cursor-pointer
      "
      @click.capture="onDrawerItemClicked()"
      data-mdb-ripple="true"
    >
      <component
        :is="menuItem.Icon"
        class="
          h-6
          w-6
          mr-2
          text-colorOnSurfaceVariant
          active:text-colorOnSecondaryContainer
          hover:text-colorOnSecondaryContainer
        "
        data-mdb-ripple="true"
        data-mdb-ripple-color="bg-colorPrimary"
      />
      <p
        class="
          font-semibold
          text-label-large text-colorOnSurfaceVariant
          active:text-colorOnSecondaryContainer
          hover:text-colorOnSecondaryContainer
        "
      >
        {{ menuItem.Title }}
      </p>
    </li>
  </ul>

  <transition name="fade">
    <!-- showDrawerOverlay -->
    <div
      v-if="isDrawerOpen && showDrawerOverlay"
      @click="toggleDrawer()"
      class="
        absolute
        flex-1
        w-full
        h-full
        bg-gray-400 bg-opacity-60
        active:outline-none
        z-10
      "
    />
  </transition>
</template>

<script lang="ts" setup>
import { MenuItem } from "@/classes/UiClasses.vue";
import { MenuIcon } from "@heroicons/vue/outline";
import { FunctionalComponent, onMounted, ref } from "@vue/runtime-core";
import { computed } from "vue";

const props = defineProps<{
  isDrawerOpen: Boolean;
  menu: Array<MenuItem>;
}>();
//Variables
let isRTL = false;
let isDrawerOpen = false;
let showDrawerOverlay = true;
var menu: Array<MenuItem> = Array<MenuItem>();

function toggleDrawer() {
  isDrawerOpen = !isDrawerOpen;
}

function onDrawerItemClicked() {}
</script>
