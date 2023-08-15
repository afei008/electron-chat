/** @format */

import { reactive } from 'vue';

const bodyHeight = reactive({
  height: '400px',
  setHeight(height: number) {
    this.height = `${height}px`;
  },
});

export default bodyHeight;
