<script setup lang="ts">
import Temp from "../components/Test switch/Temp.vue";
</script>

<template>
  <main>
    <div class="grid nested-grid p-2">
      <div
        class="col-offset-4 col-3 flex align-items-center justify-content-center"
      >
        <div class="">
          <p>Ma mission c'est toi.</p>
        </div>
      </div>
      <div class="col-offset-1 col-4">
        <Image src="/Francis-Gauthier.jpg" alt="Image" width="250" />
      </div>
      <div class="p-8 col-12 flex align-items-center justify-content-center">
        <h3>Pour prendre rendez-vous :</h3>
        <Button
          as="a"
          label="francisgauthier1986@gmail.com"
          icon="pi pi-envelope"
          variant="link"
          href="mailto:francisgauthier1986@gmail.com"
        />
      </div>
      <div class="col-12 flex align-items-center justify-content-center">
        <div class="grid">
          <div class="col-4">
            <p>Article 1</p>
          </div>
          <div class="col-4">
            <p>Article 2</p>
          </div>
          <div class="col-4">
            <p>Article 3</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
