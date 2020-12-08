<template>
  <div class="main-menu">
    <div class="user-head">
      <sl-avatar image="../assets/images/avatar.jpg"></sl-avatar>
    </div>
    <sl-menu>
      <sl-menu-item>Item 1</sl-menu-item>
      <sl-menu-item>Item 2</sl-menu-item>
    </sl-menu>
    <sl-button>Button </sl-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Menu",
});
</script>

<style lang="scss" scoped>
.main-menu {
  height: 100%;

  display: flex;
  flex-direction: column;
}
</style>
