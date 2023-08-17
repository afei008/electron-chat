/** @format */

import { reactive } from 'vue';

const emojiRect = reactive({
  show: false,
  top: 0,
  left: 0,
  width: 412,
  height: 366,
  open(el: HTMLElement) {
    this.setRect(el);
    this.show = true;
  },
  close() {
    this.show = false;
    this.removeListener();
  },
  setRect(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const { top, left, width, height } = rect;
    this.top = top - 370 - height;
    this.left = left + width / 2 - 412 / 2;
    this.addListener();
  },
  mousedown(e: MouseEvent) {
    const { left, top, width, height } = emojiRect;
    if (e.x < left || e.x > left + width || e.y < top || e.y > top + height) {
      emojiRect.close();
    }
  },
  addListener() {
    document.addEventListener('mousedown', this.mousedown);
  },
  removeListener() {
    document.removeEventListener('mousedown', this.mousedown);
  },
});

export default emojiRect;
