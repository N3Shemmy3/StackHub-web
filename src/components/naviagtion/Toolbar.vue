
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
      <Icon
        icon="{{props.navigateUp ? 'arrow_back' : 'menu'}}"
        alt="{{menuItem.title}}"
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
      :key="menuItem.Id"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      transition-all
      duration-150
      @click.capture="onMenuItemClicked(menuItem.Id)"
      class="w-12 h-12 p-3 align-middle cursor-pointer"
    >
      <Icon icon="{{menuItem.Icon}}" alt="{{menuItem.title}}" />
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


<script lang="ts" setup>
import Icon from "./components/md/Icon.vue";
import { MenuItem } from "@/classes/UiClasses.vue";
import { MenuIcon, ArrowLeftIcon } from "@heroicons/vue/outline";
import { FunctionalComponent } from "vue";

const props = defineProps<{
  navigateUp: Boolean;
  title: String;
  menu: Array<MenuItem>;
  avatar: String;
}>();

//toolbar methods
function onBackItemClicked() {
  console.log("onBackItemClicked");
}
function onMenuItemClicked(menuId: Number) {
  console.log(menuId);
}
function onAvatarItemClicked() {
  console.log("Avatar");
}
</script>
