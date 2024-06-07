<script setup>
import {useUserStore} from '../stores/userStore'

const userStore = useUserStore()
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-3xl text-center text-blue-600 mb-4">关于页面</h1>
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <p class="text-center text-lg">当前用户名是：{{ userStore.name }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
