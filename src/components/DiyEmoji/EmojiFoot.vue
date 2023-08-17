<!-- @format -->

<template>
  <div class="emoji-foot flex ac">
    <div class="emoji-tabs flex ac">
      <div
        v-if="pageNo !== 1"
        class="emoji-item emoji-tab flex ac jc"
        @click="clickPrev"
      >
        <i class="iconfont icon-left" />
      </div>
      <div
        v-for="item in resultList"
        :key="item.name"
        class="emoji-item emoji-tab flex ac jc"
        :class="{ active: item.name === currTab }"
        @click="clickItem(item)"
      >
        <span class="emoji">{{ item.emojis[0].emoji }}</span>
      </div>
      <div
        v-if="totalPage !== 0 && pageNo !== totalPage"
        class="emoji-item emoji-tab flex ac jc"
        @click="clickNext"
      >
        <i class="iconfont icon-right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import emojiJson from './data-by-group.json';
import emojiList from './emojiList';

type EmojiJson = (typeof emojiJson)[0];

const currTab = ref(emojiJson[0].name);
const pageNo = ref(1);
const pageSize = ref(8);
const totalPage = ref(0);
const resultList = ref();
const getResultList = () => {
  if (emojiJson.length <= pageSize.value) {
    resultList.value = emojiJson;
    return;
  }
  // 第一页和最后一页只显示 7 条数据
  if (emojiJson.length <= (pageSize.value - 1) * 2) {
    totalPage.value = 2;
    if (pageNo.value === 1) {
      resultList.value = emojiJson.slice(0, 7);
    } else {
      resultList.value = emojiJson.slice(7);
    }
    return;
  }
  totalPage.value = Math.ceil((emojiJson.length - 14) / 6) + 2;
  if (pageNo.value === 1) {
    resultList.value = emojiJson.slice(0, 7);
  } else if (pageNo.value === totalPage.value) {
    resultList.value = emojiJson.slice((pageNo.value - 1) * 6 + 1);
  } else {
    resultList.value = emojiJson.slice(
      (pageNo.value - 1) * 7,
      pageNo.value * 6 + 1
    );
  }
};
const clickPrev = () => {
  pageNo.value -= 1;
  getResultList();
};
const clickNext = () => {
  pageNo.value += 1;
  getResultList();
};
const clickItem = (item: EmojiJson) => {
  currTab.value = item.name;
  emojiList.setData(item.emojis);
};

onMounted(() => {
  getResultList();
});
</script>

<style lang="scss">
.emoji {
  font-size: 22px;
  line-height: 1;
}

.emoji-foot {
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  height: 54px;
  padding: 0 10px;
  background: #fff;
  border-top: 1px solid #f2f2f2;
  border-radius: 0 0 10px 10px;
}

.emoji-tabs {
  gap: 10px;
}

.emoji-item {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;

  &.active,
  &:hover {
    background: #f2f2f2;
  }
}
</style>
