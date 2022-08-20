<template>
  <form>
    <div class="md-input-main">
      <div class="md-input-box group rounded-sm outline-colorOutline">
        <input
          id="input"
          name="input"
          type="text"
          class="md-input"
          placeholder=" "
        />
        <label for="input" class="md-label">{{ props.label }}</label>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: String;
  label: String;
}>();
const emit = defineEmits([
  "onBackItemClicked",
  "onMenuItemClicked",
  "onAvatarItemClicked",
]);
</script>


<style>
.md-input-main {
  @apply font-sans text-xl w-full;
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.md-input-box {
  @apply relative;
  position: relative;
}
.md-input-box:after {
  @apply absolute left-0 right-0 pointer-events-none;
  position: absolute;
  left: 0;
  right: 0;
  pointer-events: none;
  bottom: -0.05rem;
  content: "";
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: scaleX(0);
}

.md-input {
  @apply w-full px-3 
            rounded-sm
            border border-colorOutline
            outline-colorOutline
            focus:outline-colorPrimary
            focus:caret-colorPrimary
            invalid:outline-colorError;
  width: 100%;
  height: 56px;
}
.md-label {
  @apply absolute pointer-events-none block mx-3 text-clip pl-0 pr-0 
            text-colorOnSurfaceVariant
            focus:text-colorPrimary;
  display: block;
  position: absolute;
  pointer-events: none;
  transform-origin: top left;
  transform: translate(0, -40px) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.md-label-focus {
  @apply text-colorPrimary px-4 bg-colorBackground;
  color: theme("colors.colorPrimary");
  transform: translate(0, -65px) scale(0.75);
  transform-origin: top left;
}

.md-input:focus ~ .md-input-box:after {
  transform: scaleX(1);
}
.md-input:focus + .md-label,
.md-input:not(:placeholder-shown) + .md-label {
  @apply md-label-focus;
  color: theme("colors.colorPrimary");
  transform: translate(0, -65px) scale(0.75);
  transform-origin: top left;
}
/* enable to leave border-bottom in modified color when the field is populated */
</style>
