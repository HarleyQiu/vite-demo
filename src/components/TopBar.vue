<script setup>
// 导入 Vue Router 的 RouterLink 组件，用于在应用内部创建导航链接
import {RouterLink} from 'vue-router'
</script>

<template>
  <!-- 顶部导航栏容器，应用以下样式类：
       - 'bg-blue-500': 设置背景颜色为 Tailwind 预设的蓝色（500级），为组件提供明亮的蓝色背景。
       - 'text-white': 设置文本颜色为白色，确保在蓝色背景上的文本清晰可读。
       - 'p-4': 设置内边距为4个尺寸单位，增加组件内部元素与边缘的空间。 -->
  <div class="bg-blue-500 text-white p-4">
    <!-- 内部容器，应用以下样式类：
         - 'container': 设置最大宽度，根据屏幕大小在不同断点上变化，使内容居中且不过度扩展。
         - 'mx-auto': 自动设置左右边距，使元素在水平方向上居中。
         - 'flex': 应用 Flexbox 布局，使子元素可以灵活地排列。
         - 'justify-between': 在水平方向上分散对齐子元素，使元素间保持均等间隔。
         - 'items-center': 在垂直方向上居中对齐子元素，保持内容的垂直对齐。 -->
    <div class="container mx-auto flex justify-between items-center">
      <!-- 标题，应用以下样式类：
           - 'text-2xl': 设置文本大小为2xl，增强标题的视觉重要性。
           - 'font-bold': 设置字体为粗体，使标题更加突出和易于识别。 -->
      <h1 class="text-2xl font-bold">Top Bar</h1>
      <!-- 导航菜单，使用 Flexbox 布局，应用以下样式类：
           - 'flex': 启用 Flexbox 布局，使导航链接水平排列。
           - 'space-x-4': 在水平方向上为子元素设置间隔为4个尺寸单位。 -->
      <nav class="flex space-x-4">
        <!-- 路由链接，应用以下样式类：
             - 'hover:text-blue-300': 悬停时文本颜色变为蓝色300，增加用户交互的视觉反馈。
             - 'transition-colors': 应用颜色变化的过渡效果，使悬停效果更平滑。
             - 'duration-300': 设置过渡效果持续时间为300毫秒。 -->
        <RouterLink to="/" class="hover:text-blue-300 transition-colors duration-300">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-blue-300 transition-colors duration-300">About</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>
