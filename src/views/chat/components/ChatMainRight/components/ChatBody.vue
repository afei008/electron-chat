<!-- @format -->

<template>
  <div class="chat-body pr flex column">
    <chat-message />
    <div class="input-wrap">
      <chat-tool />
      <chat-input />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatMessage from './ChatMessage.vue';
import ChatTool from './ChatTool.vue';
import ChatInput from './ChatInput.vue';
</script>

<style lang="scss" scoped>
.chat-body {
  flex: 1;
  overflow: hidden;
}

.input-wrap {
  flex: 1;
  min-height: 80;
}
</style>
