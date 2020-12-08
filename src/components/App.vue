<template>
  <div id="app">
    <div id="leftbar">
      <main-menu></main-menu>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainMenu from "./MainMenu.vue";

export default defineComponent({
  name: "App",
  components: { MainMenu },
});
</script>

<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-columns: 1fr 6fr;
  height: 100vh;
}
</style>
