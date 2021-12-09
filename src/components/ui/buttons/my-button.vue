<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.my-button {
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #7D5EAF;
  padding: 15px 33px;
  color: #fff;
  height: fit-content;
  width: fit-content;
  min-width: fit-content;
  cursor: pointer;
  &:hover {
    background-color: #7346BB;
  }
  &:active {
    background-color: #5E31A7;
  }
}
</style>