
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
        active:bg-opacity-30 active:bg-colorPrimaryContainer
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

    <p
      id="title"
      class="text-xl ml-3 text-colorOnSurface text-center align-middle"
    >
      {{ props.title }}
    </p>

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
        active:bg-opacity-30 active:bg-colorPrimaryContainer
        cursor-pointer
      "
    >
      <Icon :icon="menuItem.Icon" :alt="menuItem.Title" />
    </div>

    <div
      v-if="props.avatar"
      class="
        w-12
        h-12
        p-2
        cursor-pointer
        align-middle
        rounded-full
        hover:bg-opacity-10 hover:bg-colorOnSurface
        active:bg-opacity-30 active:bg-colorPrimaryContainer
      "
      data-mdb-ripple="true"
      @click="onAvatarItemClicked()"
    >
      <img
        id="avatar"
        :src="props.avatar"
        alt="Avatar"
        class="w-8 h-8 rounded-full"
      />
    </div>
  </nav>
</template>


<script lang="ts" setup>
import { MenuItem } from "@/classes/MenuItem";
import { FunctionalComponent } from "vue";

const props = defineProps<{
  navigateUp: Boolean;
  title: string;
  menu: Array<MenuItem>;
  avatar: string;
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
