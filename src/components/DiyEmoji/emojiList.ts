/** @format */

import { reactive } from 'vue';
import emojiJson from './data-by-group.json';

type EmojiJson = (typeof emojiJson)[0]['emojis'];

const emojiList = reactive({
  data: emojiJson[0].emojis,
  setData(data: EmojiJson) {
    this.data = data;
  },
});

export default emojiList;
