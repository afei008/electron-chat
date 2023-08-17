<!-- @format -->

<template>
  <div class="tools pr flex ac">
    <diy-emoji ref="emojiRef" @click="clickEmoji">
      <div class="item flex ac jc" @click="clickOpen">
        <div class="iconfont icon-emoji" />
      </div>
    </diy-emoji>
    <div class="item flex ac jc">
      <div class="iconfont icon-file" />
    </div>
    <div class="item flex ac jc">
      <div class="iconfont icon-jietu" />
    </div>
    <div class="item flex ac jc">
      <div class="iconfont icon-message" />
    </div>

    <div ref="lineRef" class="pa line" @mousedown="onMouseDown" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DiyEmoji from '@/components/DiyEmoji/DiyEmoji.vue';
import bodyHeight from '../bodyHeight';

const lineRef = ref();
const isDrag = ref(false);

const emojiRef = ref();
const clickOpen = () => {
  emojiRef.value.open();
};
const clickEmoji = (e: string) => {
  console.log(e);
};

const onMouseMove = (e: MouseEvent) => {
  if (isDrag.value) {
    bodyHeight.setHeight(e.pageY - 60);
  }
};

const onMouseUp = () => {
  isDrag.value = false;
  window.document.removeEventListener('mousemove', onMouseMove);
  document.body.style.cursor = 'auto';
};

const onMouseDown = (e: MouseEvent) => {
  isDrag.value = true;
  e.preventDefault();
  window.document.addEventListener('mousemove', onMouseMove);
  window.document.addEventListener('mouseup', onMouseUp);
  document.body.style.cursor = 'ns-resize';
};
</script>

<style lang="scss" scoped>
.tools {
  flex: none;
  height: 40px;
  padding: 0 20px;
  border-top: 1px solid #ececec;
}

.item {
  padding: 0 4px;
  margin-right: 6px;
  cursor: pointer;
}

.iconfont {
  font-size: 20px;
}

.line {
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 1px;
  padding: 1px 0;
  cursor: ns-resize;
}
</style>
