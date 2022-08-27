
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
      class="
        text-xl
        font-semibold
        ml-3
        text-colorOnSurface text-center
        align-middle
      "
    >
      {{ props.title }}
    </p>

    <div id="spacer" class="flex-1 h-full"></div>

    <div
      id="MenuItems"
      v-for="menuItem in props.menu"
      :key="menuItem.Title"
      data-mdb-ripple="true"
      @click="
        menuItem.Icon.startsWith('http')
          ? onAvatarItemClicked()
          : onMenuItemClicked(menuItem.Id)
      "
      class="
        transition-all
        duration-150
        w-12
        h-12
        align-middle
        group
        rounded-full
        hover:bg-opacity-10 hover:bg-colorOnSurface
        active:bg-opacity-30 active:bg-colorPrimaryContainer
        cursor-pointer
      "
      :class="menuItem.Icon.startsWith('http') ? 'p-2' : 'p-3'"
    >
      <img
        v-if="menuItem.Icon.startsWith('http')"
        id="avatar"
        :src="menuItem.Icon"
        alt="Avatar"
        class="w-8 h-8 rounded-full"
      />
      <Icon v-else :icon="menuItem.Icon" :alt="menuItem.Title" />
    </div>
  </nav>
</template>


<script lang="ts" setup>
import { MenuItem } from "@/classes/MenuItem";

const props = defineProps<{
  navigateUp: Boolean;
  title: string;
  menu: Array<MenuItem>;
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
