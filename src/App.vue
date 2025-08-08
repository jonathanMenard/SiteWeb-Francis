<script setup lang="ts">
import { RouterView } from "vue-router";
import MyMenuBar from "./components/MyMenuBar.vue";
</script>

<template>
  <main>
    <MyMenuBar />
    <RouterView />
  </main>
</template>
