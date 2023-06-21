<script setup>
import SelectOptions from './components/SelectOptions.vue'
import AvatarImage from './components/AvatarImage.vue'
</script>

<template>
  <h1 class="text-center text-6xl">Avatar Builder</h1>
  <div class="app-container mx-auto">
    <main class="flex justify-content-center">
      <div class="flex flex-column">
        <SelectOptions />

        <AvatarImage />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 100rem;
}
</style>
