<!-- @format -->

<template>
  <div class="main-right chat-main flex column">
    <chat-header />
    <chat-body />
    <chat-footer />
  </div>
</template>

<script setup lang="ts">
import ChatHeader from './components/ChatHeader.vue';
import ChatBody from './components/ChatBody.vue';
import ChatFooter from './components/ChatFooter.vue';
</script>

<style lang="scss" scoped>
.chat-main {
  background: #f5f5f5;
}
</style>
