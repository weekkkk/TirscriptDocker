<template>
  <button class="cancel-mark-btn">
    <img src="@assets/icons/ui-components/cancel-mark.svg" class="cancel-mark" />
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
.cancel-mark-btn {
  background: #1d1e42;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: #586eb9;

    & img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(193deg)
        brightness(150%) contrast(101%);
    }
  }

  &:active {
    background: #4060cf;

    & img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(193deg)
        brightness(150%) contrast(101%);
    }
  }

  .cancel-mark {
    width: 12px;
    height: 12px;
  }
}
</style>