<script setup>
import TopBar from "./components/TopBar.vue";
import BottomBar from "./components/BottomBar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <top-bar></top-bar>
    <main class="flex-grow bg-gray-100 p-4">
      <router-view></router-view>
    </main>
    <bottom-bar></bottom-bar>
  </div>
</template>

<style scoped>

</style>
