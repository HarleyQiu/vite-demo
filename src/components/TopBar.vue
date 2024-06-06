<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="bg-blue-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Top Bar</h1>
      <nav class="flex space-x-4">
        <RouterLink to="/" class="hover:text-blue-300 transition-colors duration-300">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-blue-300 transition-colors duration-300">About</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>
