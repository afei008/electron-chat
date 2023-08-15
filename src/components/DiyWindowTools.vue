<!-- @format -->

<template>
  <div class="tools pa flex ac">
    <div class="item flex ac jc no-drag" @click="clickMin">
      <i class="iconfont icon-move" />
    </div>
    <div class="item flex ac jc no-drag" @click="clickMax">
      <i v-if="!isMax" class="iconfont icon-square" />
      <i v-else class="iconfont icon-min" />
    </div>
    <div class="item flex ac jc no-drag" @click="clickClose">
      <i class="iconfont icon-close" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMax = ref(false);
window.electronAPI.handleMax((_event: any, value: any) => {
  isMax.value = value;
});
const clickMin = () => {
  window.electronAPI.minWindow();
};
const clickMax = () => {
  window.electronAPI.maxWindow();
};
const clickClose = () => {
  window.electronAPI.hideWindow();
};
</script>

<style lang="scss" scoped>
.tools {
  top: 0;
  right: 0;
}

.item {
  width: 33px;
  height: 25px;

  &:hover {
    cursor: pointer;
    background: #e2e2e2;
  }

  &:last-child:hover {
    color: #fff;
    background: #fb7373;
  }
}

.iconfont {
  font-size: 14px;
}
</style>
