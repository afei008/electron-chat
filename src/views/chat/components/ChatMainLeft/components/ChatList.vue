<!-- @format -->

<template>
  <div class="list">
    <chat-list-item
      v-for="item in list"
      :key="item.id"
      v-model:active-id="activeId"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import assistantAvatar from '@/assets/images/assistant_avatar.jpg';
import avatar from '@/assets/images/avatar.jpg';
import ChatListItem from './ChatListItem.vue';

const activeId = ref();
const list = ref([
  {
    id: 1,
    img: assistantAvatar,
    name: '文件传输助手',
    lastMessage: '啊手动阀手动阀手动阀',
    lastTime: '23/7/27',
  },
  {
    id: 2,
    img: avatar,
    name: '吖飞',
    lastMessage: '这是最后一条信息',
    lastTime: '12:12',
  },
]);
</script>
