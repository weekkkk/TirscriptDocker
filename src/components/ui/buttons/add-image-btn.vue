<template>
  <button class="add-image-btn">
    <img src="@assets/icons/ui-components/plus-symbol.svg" class="add-image" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator'
@Component({
  name: 'ui-play-btn'
})
export default class UiPlayBtn extends Vue {}
</script>

<style scoped lang="less">
.add-image-btn {
  background: #586EB9;
  width: 47px;
  height: 47px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: #4060CF;
  }

  &:active {
    background: #2B46A5;
  }

  .add-image {
    width: 10.5px;
    height: 10.5px;
  }
}
</style>