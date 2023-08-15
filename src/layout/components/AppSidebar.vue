<!-- @format -->

<template>
  <div class="app-sidebar drag flex column ac between">
    <div class="top">
      <img
        src="@/assets/images/default_nor_avatar.png"
        alt=""
        class="avatar no-drag"
      />
      <div
        v-for="item in topList"
        :key="item.id"
        class="item flex ac jc no-drag"
        :class="{ active: item.id === activeId }"
        @click="clickTopItem(item.id)"
      >
        <i class="iconfont" :class="[item.icon]" />
      </div>
    </div>
    <div class="bottom">
      <div
        v-for="item in bottomList"
        :key="item.id"
        class="item flex ac jc no-drag"
        @click="clickBottomItem(item.id)"
      >
        <i class="iconfont" :class="[item.icon]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeId = ref(1);
const topList = ref([
  { id: 1, icon: 'icon-message' },
  { id: 2, icon: 'icon-peoplelist' },
]);
const bottomList = ref([
  { id: 1, icon: 'icon-link' },
  { id: 2, icon: 'icon-mobile' },
  { id: 3, icon: 'icon-caidan' },
]);

const clickTopItem = (id: number) => {
  activeId.value = id;
};
const clickBottomItem = (id: number) => {
  console.log(id);
};
</script>

<style lang="scss" scoped>
.no-drag {
  cursor: pointer;
}

.avatar {
  width: 36px;
  height: 36px;
}

.item {
  margin-top: 20px;

  &.active {
    .iconfont {
      color: #07c160;
    }
  }
}
</style>
