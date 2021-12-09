<template>
  <button class="add-button">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.add-button {
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #586EB9;
  padding: 15px 33px;
  color: #fff;
  cursor: pointer;
  transition: .15s;
  &:hover {
    background-color: #4060CF;
  }
  &:active {
    background-color: #2B46A5;
  }
}
</style>