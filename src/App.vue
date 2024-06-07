<script setup>
// 导入顶部和底部的组件，这些组件将在页面的顶部和底部位置显示。
import TopBar from "./components/TopBar.vue";
import BottomBar from "./components/BottomBar.vue";
</script>

<template>
  <!-- 容器 div，应用以下样式类：
    - 'flex': 应用 Flexbox 布局，使子元素可以灵活地排列。
    - 'flex-col': 子元素垂直排列，即主轴方向为列方向。
    - 'min-h-screen': 最小高度设置为视口高度，确保容器至少与屏幕一样高。
  -->
  <div class="flex flex-col min-h-screen">
    <!-- 顶部导航栏组件 -->
    <top-bar></top-bar>
    <!-- 主内容区域 -->
    <main class="flex-grow bg-gray-100 p-4">
      <!-- 路由视图，用于根据当前路由动态渲染相应的组件 -->
      <router-view></router-view>
    </main>
    <!-- 底部导航栏组件 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<style scoped>

</style>
