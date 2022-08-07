<template>
  <div id="classes"></div>
</template>

<script lang="ts">
export default {};
import { FunctionalComponent } from "vue";

//classes
export class MenuItem {
  private id: number;
  private icon: FunctionalComponent;
  private title: string;

  /*
    constructor() { }
    */

  constructor(id: number, icon: FunctionalComponent, title: string) {
    this.id = id;
    this.icon = icon;
    this.title = title;
  }

  //setters
  set Id(id: number) {
    this.Id = id;
  }
  set Icon(icon: FunctionalComponent) {
    this.icon = icon;
  }
  set Title(title: string) {
    this.title = title;
  }

  //getters
  get Id() {
    return this.id;
  }
  get Icon() {
    return this.icon;
  }
  get Title() {
    return this.title;
  }
}
</script>
<style>
</style>