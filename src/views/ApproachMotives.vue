<script setup lang="ts">
import francisImg from "@/assets/images/Francis-Gauthier-sexologue.jpg";
import MyEmailButton from "@/components/MyEmailButton.vue";
import My3Articles from "@/components/My3Articles.vue";
</script>

<template>
  <main>
    <div class="grid nested-grid p-2">
      <div
        class="col-offset-4 col-3 flex align-items-center justify-content-center"
      >
        <div class="">
          <p>Voici mon approche et mes motivations.</p>
        </div>
      </div>
      <Image :src="francisImg" alt="Image" width="250" />
    </div>
    <MyEmailButton />
    <My3Articles />
  </main>
</template>
