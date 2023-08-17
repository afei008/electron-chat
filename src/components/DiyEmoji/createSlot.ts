/** @format */

import { defineComponent, ref, h } from 'vue';

const createSlot = (slots: any) => {
  return defineComponent({
    setup(_props: any, context) {
      const slotRef = ref(null);
      const [defaultSlot] = slots.default();
      context.expose({
        slotRef,
      });
      return () => h(defaultSlot, { ref: slotRef });
    },
  });
};

export default createSlot;
