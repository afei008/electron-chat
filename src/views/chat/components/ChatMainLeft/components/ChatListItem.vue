<!-- @format -->

<template>
  <div
    class="item flex ac"
    :class="{ active: item.id === activeId }"
    @click="clickItem(item)"
  >
    <div class="left">
      <img :src="item.img" class="img" alt="" />
    </div>
    <div class="right flex column between">
      <div class="top flex between">
        <div class="name">{{ item.name }}</div>
        <div class="time tip">{{ item.lastTime }}</div>
      </div>
      <div class="bottom">
        <div class="message tip">{{ item.lastMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  activeId: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(['update:activeId']);

const clickItem = (item: Record<string, any>) => {
  emit('update:activeId', item.id);
};
</script>

<style lang="scss" scoped>
.item {
  height: 64px;
  padding: 0 15px 0 12px;

  &.active {
    background: #c4c4c4;

    .tip {
      color: #999;
    }
  }
}

.right {
  box-sizing: border-box;
  flex: 1;
  height: 40px;
  padding: 1px 0;
  padding-left: 10px;
}

.img {
  width: 40px;
  height: 40px;
  border-radius: 2px;
}

.name {
  font-size: 14px;
  line-height: 1;
}

.tip {
  font-size: 12px;
  line-height: 1;
  color: #b9b9b9;
}
</style>
