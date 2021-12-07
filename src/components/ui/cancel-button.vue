<template>
  <button class="cancel-button">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.cancel-button {
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #141431;
  padding: 15px 33px;
  color: #fff;
  cursor: pointer;
  transition: .15s;
  &:hover {
    background-color: #1D1E42;
  }
  &:active {
    background-color: #272865;
  }
}
</style>