<script setup lang="ts">
import francisImg from "@/assets/images/Francis-Gauthier-sexologue.jpg";
import MyEmailButton from "@/components/MyEmailButton.vue";
import My3Articles from "@/components/My3Articles.vue";
</script>

<template>
  <main>
    <div class="grid nested-grid pt-3">
      <div
        class="col-offset-4 col-3 flex align-items-center justify-content-center"
      >
        <div class="">
          <p>Moi je suis Francis.</p>
        </div>
      </div>
      <Image :src="francisImg" alt="Image" width="250" />
    </div>
    <MyEmailButton />
    <My3Articles />
  </main>
</template>
