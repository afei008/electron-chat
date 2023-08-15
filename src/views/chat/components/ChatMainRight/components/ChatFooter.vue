<!-- @format -->

<template>
  <div class="chat-footer flex ac je">
    <button class="send flex ac jc">发送(S)</button>
  </div>
</template>

<style lang="scss" scoped>
.chat-footer {
  box-sizing: border-box;
  flex: none;
  height: 52px;
  padding: 0 30px 12px;
}

.send {
  width: 100px;
  height: 32px;
  line-height: 1;
  color: #07c160;
  cursor: pointer;
  background: #e9e9e9;
  border: 0;
  border-radius: 4px;

  &:hover {
    background: #d2d2d2;
  }
}
</style>
