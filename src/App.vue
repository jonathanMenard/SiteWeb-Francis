<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuBarView from "./components/MenuBarView.vue";
</script>

<template>
  <main>
    <MenuBarView />
    <div class="flex justify-content-center flex-wrap">
      <h3 class="">CONSTRUCTION EN COURS</h3>
    </div>
    <RouterView />
  </main>
</template>
