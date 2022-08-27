<template>
  <div v-show="props.isDrawerOpen">
    <ul
      class="
        w-80
        p-4
        h-screen
        z-40
        shadow-md
        bg-colorSurface
        transition-all
        duration-300
        ease-in-out
        md:relative
      "
    >
      <!-- User Card -->
      <div
        class="
          px-2
          py-4
          my-4
          rounded-xl
          min-h-fit
          h-20
          cursor-pointer
          hover:bg-colorOutline hover:bg-opacity-20
          transition-all
          flex flex-grow-row
          bg-colorPrimaryContainer bg-opacity-50
          active:bg-colorPrimaryContainer
        "
      >
        <div class="shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/67279072?v=4"
            class="rounded-full w-10"
            alt="Avatar"
          />
        </div>
        <div class="flex-col max-h-fit ml-3">
          <p
            class="text-sm font-sans font-semibold text-colorOnPrimaryContainer"
          >
            Shemmy Nyirenda
          </p>
          <p
            class="
              text-xs
              font-sans font-semibold
              text-colorOnPrimaryContainer text-opacity-70
            "
          >
            @Shemmy3
          </p>
        </div>
      </div>
      <!-- divider
      <div class="bg-colorOutline bg-opacity-30 h-[1px] w-80 -mx-4 mb-4" />
       -->
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
            :class="
              index == activeId ? 'text-colorOnSecondaryContainer' : 'null'
            "
          />

          <p
            :class="
              index == activeId ? 'text-colorOnSecondaryContainer' : 'null'
            "
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
        v-if="props.isDrawerOpen && showDrawerOverlay"
        @click=""
        class="w-full h-full bg-gray-400 bg-opacity-60 active:outline-none z-30"
      />
    </transition>
  </div>
</template>
<style>
</style>

<script lang="ts" setup>
import { MenuItem } from "@/classes/MenuItem";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  isDrawerOpen: Boolean;
  menu: Array<MenuItem>;
}>();

const emit = defineEmits(["onOverlayClicked", "onMenuItemClicked"]);

//Variables
let showDrawerOverlay = ref(true);
var menu: Array<MenuItem> = props.menu;
let activeId = ref(0);

function setActive(menuItem: MenuItem) {
  activeId.value = menuItem.Id;
}
function onDrawerItemClicked(menuItem: MenuItem) {
  setActive(menuItem);
}
</script>
