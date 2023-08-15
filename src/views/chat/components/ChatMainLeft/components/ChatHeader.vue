<!-- @format -->

<template>
  <div class="head flex ac between">
    <div
      class="search-wrap flex ac bge2 pr"
      :class="{ 'is-focus': placeholder === '' }"
    >
      <i class="iconfont icon-search" />
      <div class="input-wrap">
        <input
          type="text"
          class="input"
          :placeholder="placeholder"
          @focus="focusInput"
          @blur="blurInput"
        />
      </div>
      <div v-if="isFocus" class="close flex ac jc pa">
        <div class="iconfont icon-close" />
      </div>
    </div>
    <div class="add flex ac jc bge2">
      <i class="iconfont icon-add" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isFocus = ref(false);
const placeholder = ref('搜索');
const focusInput = () => {
  placeholder.value = '';
  isFocus.value = true;
};
const blurInput = () => {
  placeholder.value = '搜索';
  isFocus.value = false;
};
</script>

<style lang="scss" scoped>
.bge2 {
  background: #e2e2e2;
}

.head {
  box-sizing: border-box;
  height: 62px;
  padding: 25px 12px 11px;
  background: #f7f7f7;
  border-bottom: 1px solid #e9e9e9;
}

.search-wrap {
  box-sizing: border-box;
  width: 190px;
  height: 25px;
  padding: 0 5px;
  border: 1px solid #e2e2e2;
  border-radius: 4px;

  &.is-focus {
    background: #fff;
    border: 1px solid #dedcdb;
  }

  .iconfont {
    font-size: 12px;
  }
}

.close {
  right: 5px;
  width: 14px;
  height: 14px;
  background: #cfcfcf;
  border-radius: 50%;

  .iconfont {
    font-size: 10px;
  }
}

.input-wrap {
  margin-left: 5px;
}

.input {
  background: transparent;
  border: none;

  &:focus {
    outline: 0;
  }
}

.add {
  flex: none;
  width: 25px;
  height: 25px;
  border-radius: 4px;
}
</style>
