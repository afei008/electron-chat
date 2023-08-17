<!-- @format -->

<template>
  <div class="emoji-body">
    <el-scrollbar>
      <div class="emoji-body-wrap">
        <div
          v-for="item in emojiList.data"
          :key="item.name"
          class="emoji-item flex ac jc"
          @click="clickItem(item.emoji)"
        >
          <span class="emoji">
            {{ item.emoji }}
          </span>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import emojiList from './emojiList';

const emit = defineEmits(['click']);

const clickItem = (emoji: string) => {
  emit('click', emoji);
};
</script>

<style lang="scss" scoped>
.emoji-body {
  box-sizing: border-box;
  padding-bottom: 5px;
  background: #fff;
  border-radius: 10px 10px 0 0;
}

.emoji-body-wrap {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(8, 40px);
  grid-auto-rows: auto;
  gap: 10px;
  height: 312px;
  padding: 10px;
}

.emoji-item {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #f2f2f2;

    .emoji {
      font-size: 26px;
    }
  }
}

.emoji {
  font-size: 22px;
  line-height: 1;
}
</style>
