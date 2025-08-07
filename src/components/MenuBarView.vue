<template>
  <div class="card">
    <Menubar class="flex justify-content-center flex-wrap" :model="items" />
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const items = ref([
  {
    label: "Bienvenue",
    icon: "pi pi-home",
    command: () => {
      router.push({ path: "/" });
    },
  },
  {
    label: "Mission",
    icon: "pi pi-megaphone",
    command: () => {
      router.push({ path: "/Mission" });
    },
  },
  {
    label: "Approche-motifs de consultations",
    icon: "pi pi-users",
    command: () => {
      router.push({ path: "/ApprocheMotifs" });
    },
  },
  {
    label: "Services offerts",
    icon: "pi pi-envelope",
    command: () => {
      router.push({ path: "/ServicesOfferts" });
    },
  },
  {
    label: "Qui suis-je",
    icon: "pi pi-id-card",
    command: () => {
      router.push({ path: "/QuiSuisJe" });
    },
  },
]);
</script>
