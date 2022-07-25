<script lang="ts" setup>
import { MenuIcon, ArrowLeftIcon } from "@heroicons/vue/outline";
import MenuItem from "@/classes/frontend/MenuItem";

const props = defineProps<{
  navigateUp: boolean;
  title: string;
  menu: Array<MenuItem>;
  avatar: string;
}>();

const navigateUp = true;
var title = "Toolbar";
var avatar = "https://avatars.githubusercontent.com/u/67279072?v=4";

//toolbar methods
function onBackItemClicked() {
  console.log("onBackItemClicked");
}
function onMenuItemClicked(menuId: String) {
  console.log(menuId);
}
function onAvatarItemClicked() {
  console.log("Avatar");
}
</script>

<template>
  <nav
    class="
      flex
      fixed-top
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
      class="w-12 h-12 p-3 cursor-pointer"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      @click.capture="onBackItemClicked()"
    >
      <component
        :is="props.navigateUp ? ArrowLeftIcon : MenuIcon"
        class="h-6 w-6 text-colorOnSurface align-middle"
        alt="{{navigateUp? Open Drawer : navigate back}}"
      />
    </div>

    <div
      id="title"
      class="text-xl ml-1 text-colorOnSurface text-center align-middle"
    >
      {{ props.title }}
    </div>

    <div id="spacer" class="flex-1 h-full"></div>

    <div
      id="MenuItems"
      v-for="menuItem in props.menu"
      :key="menuItem.id"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      transition-all
      duration-150
      @click.capture="onMenuItemClicked(menuItem.id)"
      class="w-12 h-12 p-3 align-middle cursor-pointer"
    >
      <component
        :is="menuItem.icon"
        class="h-6 w-6 text-colorOnSurface"
        alt="{{menuItem.title}}"
      />
    </div>
    <div
      class="w-12 h-12 p-2 cursor-pointer align-middle"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      @click.capture="onAvatarItemClicked()"
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