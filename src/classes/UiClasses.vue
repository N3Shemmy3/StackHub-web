<template>
  <div id="classes"></div>
</template>

<script lang="ts">
export default {};

//classes
export class MenuItem {
  private id: number;
  private icon: String;
  private title: string;

  /*
    constructor() { }
    */

  constructor(id: number, icon: String, title: string) {
    this.id = id;
    this.icon = icon;
    this.title = title;
  }

  //setters
  set Id(id: number) {
    this.Id = id;
  }
  set Icon(icon: String) {
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