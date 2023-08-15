<!-- @format -->

<template>
  <div class="flex h100">
    <chat-left />
    <chat-main />
  </div>
</template>

<script setup lang="ts">
import ChatLeft from './components/ChatMainLeft/ChatLeft.vue';
import ChatMain from './components/ChatMainRight/ChatMain.vue';
</script>
