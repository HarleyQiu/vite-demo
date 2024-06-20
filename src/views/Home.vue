<script setup>
import {ref} from 'vue'
import {useUserStore} from '../stores/userStore'

const userStore = useUserStore()
const newName = ref('')

function updateName() {
  if (!newName.value) {
    return
  }
  userStore.updateName(newName.value)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-3xl font-bold text-center text-blue-600 italic mb-4">首页</h1>
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <p class="text-center text-lg mb-2">用户名：{{ userStore.name }}</p>
      <p class="text-center text-lg mb-4">年龄：{{ userStore.age }}</p>
      <input v-model="newName" class="border border-gray-300 p-2 rounded w-full mb-4" placeholder="输入新用户名"/>
      <button @click="updateName"
              class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4">
        更新用户名
      </button>
      <button @click="userStore.incrementAge"
              class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        增加年龄
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
