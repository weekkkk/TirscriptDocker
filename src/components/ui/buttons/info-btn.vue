<template>
  <button class="info-btn">
    <img src="@assets/icons/ui-components/info.svg" class="info" />
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
.info-btn {
  background: #141431;
  width: 28px;
  height: 28px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: #1D1E42;

    & img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(193deg)
        brightness(150%) contrast(101%);
    }
  }

  &:active {
    background: #272865;

    & img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(193deg)
        brightness(150%) contrast(101%);
    }
  }

  .info {
    width: 16px;
    height: 16px;
  }
}
</style>