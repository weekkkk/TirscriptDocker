<template>
  <button class="add-mark-btn">
    <img src="@assets/icons/ui-components/add-mark.svg" class="add-mark" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator'
@Component({
  name: 'ui-pause-btn'
})
export default class UiPauseBtn extends Vue {}
</script>

<style scoped lang="less">
.add-mark-btn {
  background: #586EB9;
  width: 32px;
  height: 32px;
  border-radius: 5px;
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

  .add-mark {
    width: 12px;
    height: 12px;
  }
}
</style>