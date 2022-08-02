<script lang="ts" setup>
import { MenuIcon } from "@heroicons/vue/outline";

//Variables
let isRTL = false;
let isDrawerOpen = true;
let showDrawerOverlay = true;

const drawerMenu = [
  {
    icon: MenuIcon,
    title: "Menu Item",
    active: true,
  },
  {
    icon: MenuIcon,
    title: "Menu Item",
    active: false,
  },
  {
    icon: MenuIcon,
    title: "Menu Item",
    active: false,
  },
  {
    icon: MenuIcon,
    title: "Menu Item",
    active: false,
  },
  {
    icon: MenuIcon,
    title: "Menu Item",
    active: false,
  },
  {
    icon: MenuIcon,
    title: "Menu Item",
    active: false,
  },
];

function toggleDrawer() {
  isDrawerOpen = !isDrawerOpen;
}
</script>

<template>
  <ul
    class="
      w-80
      p-4
      h-full
      shadow-md
      bg-colorSurface
      relative
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
      v-for="menuItem in drawerMenu"
      :key="menuItem.title"
      class="
        flex
        items-center
        p-4
        h-12
        overflow-hidden
        whitespace-nowrap
        rounded-3xl
        hover:bg-colorPrimaryContainer
        active:bg-colorPrimaryContainer
        transition-all
        duration-300
        ease-in-out
        cursor-pointer
      "
      href="#!"
      data-mdb-ripple="true"
      data-mdb-ripple-color="dark"
    >
      <component
        :is="menuItem.icon"
        class="
          h-6
          w-6
          mr-2
          text-colorOnSurfaceVariant
          active:text-colorOnSecondaryContainer
          hover:text-colorOnSecondaryContainer
        "
      />
      <p
        class="
          text-label-large text-colorOnSurfaceVariant
          active:text-colorOnSecondaryContainer
          hover:text-colorOnSecondaryContainer
        "
      >
        {{ menuItem.title }}
      </p>
    </li>
  </ul>

  <transition name="fade">
    <!-- showDrawerOverlay -->
    <div
      v-if="showDrawerOverlay && isDrawerOpen"
      @click="toggleDrawer()"
      class="
        flex-1
        bg-gray-400 bg-opacity-75
        active:outline-none
        z-10
        md:hidden
      "
    />
  </transition>
</template>