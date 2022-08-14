<template>
<div>

  <ul
    class="
      md:w-80
      p-4
      h-full
      z-3
      md:left-0
      shadow-md
      bg-colorSurface
      transition-all
      duration-300
      ease-in-out
      absolute
      md:relative
    "
  >
    <div class="p-2 mb-1 flex items-center">
      <Icon
        icon="menu"
        alt="Home Page"
        @click="toggleDrawer()"
        class="mr-3 text-colorPrimary"
      />
      <p class="text-colorOnSurface title-large font-extrabold">
        StackHub {{ activeId }}
      </p>
    </div>

    <li
      v-for="(menuItem, index) in menu"
      :key="menuItem.Id"
      to="{{menuItem.Path}}"
      class="
        group
        items-center
        flex
        shrink
        p-3
        my-1
        rounded-3xl
        active:bg-colorSecondaryContainer
        hover:bg-colorOnPrimaryContainer hover:bg-opacity-10
        transition-all
        duration-250
        ease-in-out
        cursor-pointer
      "
      :class="index == activeId ? 'bg-colorSecondaryContainer' : 'null'"
      @click="onDrawerItemClicked(menuItem)"
    >
      <div
        class="
          relative
          group-hover:opacity-90
          bg-colorSecondaryContainer
          ease-in-out
          transition-all
        "
      />
      <div class="flex items-center">
        <Icon
          :icon="menuItem.Icon"
          :alt="menuItem.Title"
          class="
            mr-6
            text-colorOnSurfaceVariant
            group-active:text-colorOnSecondaryContainer
            group-hover:text-colorOnSecondaryContainer
          "
          :class="index == activeId ? 'text-colorOnSecondaryContainer' : 'null'"
        />

        <p
          :class="index == activeId ? 'text-colorOnSecondaryContainer' : 'null'"
          class="
            font-semibold
            headline
            text-colorOnSurfaceVariant
            group-active:text-colorOnSecondaryContainer
            group-hover:text-colorOnSecondaryContainer
          "
        >
          {{ menuItem.Title }}
        </p>
      </div>
    </li>
  </ul>

  <transition name="fade">
    <!-- showDrawerOverlay -->
    <div
      v-if="isDrawerOpen && showDrawerOverlay"
      @click="toggleDrawer()"
      class="
        absolute
        w-full
        h-full
        bg-gray-400 bg-opacity-60
        active:outline-none
        z-2
      "
    />
  </transition>
    </div>
</template>
<style>
</style>

<script lang="ts" setup>
import Icon from "../md/Icon.vue";
import { MenuItem } from "@/classes/UiClasses.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  isDrawerOpen: Boolean;
  menu: Array<MenuItem>;
}>();

const route = useRoute();
//Variables
let isRTL = false;
let isDrawerOpen = false;
let showDrawerOverlay = true;
var menu: Array<MenuItem> = props.menu;
let activeId = ref(0);

function toggleDrawer() {
  isDrawerOpen = !isDrawerOpen;
}
function setActive(menuItem: MenuItem) {
  activeId.value = menuItem.Id;
}
function onDrawerItemClicked(menuItem: MenuItem) {
  setActive(menuItem);
}
</script>
