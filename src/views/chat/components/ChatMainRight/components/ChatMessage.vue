<!-- @format -->

<template>
  <div class="chat-message pr" :style="{ height: bodyHeight.height }">
    <p v-for="item in 0" :key="item">message</p>
  </div>
</template>

<script setup lang="ts">
import bodyHeight from '../bodyHeight';
</script>

<style lang="scss" scoped>
.chat-message {
  min-height: 97px;
  padding-left: 30px;
  overflow-y: auto;
}
</style>
