<!-- @format -->

<template>
  <div class="chat-header pr drag flex ac between">
    <div class="title">文件传输助手</div>
    <diy-window-tools />
  </div>
</template>

<script setup lang="ts">
import DiyWindowTools from '@/components/DiyWindowTools.vue';
</script>

<style lang="scss" scoped>
.chat-header {
  box-sizing: border-box;
  flex: none;
  height: 62px;
  padding-left: 24px;
  border-bottom: 1px solid #e7e7e7;
}

.title {
  font-size: 20px;
}
</style>
