<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuBarView from "./components/MenuBarView.vue";
</script>

<template>
  <main>
    <MenuBarView />
    <RouterView />
  </main>
</template>
