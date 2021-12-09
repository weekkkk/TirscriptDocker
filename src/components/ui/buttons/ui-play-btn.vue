<template>
  <button class="play-btn">
    <img src="@assets/icons/ui-components/play.svg" class="play" />
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
.play-btn {
  background: #1d1e42;
  width: 28px;
  height: 28px;
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
    background: #7d5eaf;

    & img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(193deg)
        brightness(150%) contrast(101%);
    }
  }

  .play {
    width: 12px;
    height: 12px;
  }
}
</style>
