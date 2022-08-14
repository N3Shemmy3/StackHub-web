
<template>
  <nav
    class="
      flex
      w-full
      h-16
      px-[12px]
      items-center
      align-middle
      bg-colorSurface
      text-colorOnSurface
      shadow-sm
    "
  >
    <div
      id="backButton"
      class="
        w-12
        h-12
        p-3
        rounded-full
        hover:bg-opacity-10 hover:bg-colorOnSurface
        active:bg-opacity-10 active:bg-colorOnSurface
        transitions-all
        duration-250
        ease-in-out
        cursor-pointer
      "
      @click="onBackItemClicked()"
    >
      <Icon
        :icon="props.navigateUp ? 'arrow_back' : 'menu'"
        alt="Navigate Up"
      />
    </div>

    <div
      id="title"
      class="text-xl ml-1 text-colorOnSurface text-center align-middle"
    >
      {{ (props.title, props.navigateUp) }}
    </div>

    <div id="spacer" class="flex-1 h-full"></div>

    <div
      id="MenuItems"
      v-for="menuItem in props.menu"
      :key="menuItem.Title"
      data-mdb-ripple="true"
      @click.capture="onMenuItemClicked(menuItem.Id)"
      class="
        transition-all
        duration-150
        w-12
        h-12
        p-3
        align-middle
        group
        rounded-full
        hover:bg-opacity-10 hover:bg-colorOnSurface
        cursor-pointer
      "
    >
      <Icon :icon="menuItem.Icon" :alt="menuItem.Title" />
    </div>

    <div
      class="
        w-12
        h-12
        p-2
        cursor-pointer
        align-middle
        rounded-full
        hover:bg-opacity-10 hover:bg-colorOnSurface
      "
      data-mdb-ripple="true"
      @click="onAvatarItemClicked()"
    >
      <img
        id="avatar"
        src="https://avatars.githubusercontent.com/u/67279072?v=4"
        alt="Avatar"
        class="w-8 h-8 rounded-full"
      />
    </div>
  </nav>
</template>


<script lang="ts" setup>
import Icon from "../md/Icon.vue";
import { MenuItem } from "@/classes/UiClasses.vue";
import { FunctionalComponent } from "vue";

const props = defineProps<{
  navigateUp: Boolean;
  title: String;
  menu: Array<MenuItem>;
  avatar: String;
}>();
const emit = defineEmits([
  "onBackItemClicked",
  "onMenuItemClicked",
  "onAvatarItemClicked",
]);

//toolbar methods
function onBackItemClicked() {
  emit("onBackItemClicked");
}
function onMenuItemClicked(menuId: Number) {
  emit("onMenuItemClicked", menuId);
}
function onAvatarItemClicked() {
  emit("onAvatarItemClicked");
}
</script>
