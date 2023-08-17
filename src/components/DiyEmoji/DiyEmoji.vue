<!-- @format -->

<template>
  <my-slot ref="slotRef" />

  <Teleport v-if="emojiRect.show" to="body">
    <div
      class="emoji-wrap"
      :style="{ left: emojiRect.left + 'px', top: emojiRect.top + 'px' }"
    >
      <emoji-body @click="clickEmoji" />
      <emoji-foot />
      <div class="arrow" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, useSlots } from 'vue';
import createSlot from './createSlot';
import emojiRect from './emojiRect';
import EmojiFoot from './EmojiFoot.vue';
import EmojiBody from './EmojiBody.vue';

const emit = defineEmits(['click']);

const slots = useSlots();
const slotRef = ref();
const MySlot = createSlot(slots);

const clickEmoji = (e: string) => {
  emit('click', e);
  emojiRect.close();
};

const open = () => {
  emojiRect.open(slotRef.value.slotRef);
};
const close = () => {
  emojiRect.close();
};

defineExpose({ open, close });
</script>

<style lang="scss" scoped>
.emoji-wrap {
  position: fixed;
  z-index: 10;
  box-sizing: border-box;
  width: 412px;
  height: 366px;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px #e1e1e1;
}

.arrow {
  position: absolute;
  bottom: -25px;
  left: 50%;
  z-index: 1;
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 10px;
  transform: translateX(-50%);

  &::before {
    position: absolute;
    top: -17px;
    left: -7px;
    width: 15px;
    height: 15px;
    content: '';
    box-shadow: 0 0 10px 5px #e1e1e1;
    transform: rotate(45deg);
  }
}
</style>
