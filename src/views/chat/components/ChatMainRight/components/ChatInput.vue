<!-- @format -->

<template>
  <div class="textarea-wrap">
    <textarea class="textarea" rows="3" />
  </div>
</template>

<style lang="scss" scoped>
.textarea-wrap {
  box-sizing: border-box;
  height: 100%;
  padding: 0 25px;
}

.textarea {
  width: 100%;
  height: 100%;
  line-height: 1.5;
  resize: none;
  background: transparent;
  border: 0;

  &:focus {
    outline: 0;
  }
}
</style>
