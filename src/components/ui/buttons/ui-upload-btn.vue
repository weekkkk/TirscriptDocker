<template>
  <button class="upload-btn">
    <img src="@assets/icons/ui-components/upload.svg" class="upload" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator'
@Component({
  name: 'ui-upload-btn'
})
export default class UiUploadBtn extends Vue {}
</script>

<style scoped lang="less">
.upload-btn {
  background: #141431;
  width: 38px;
  height: 38px;
  border-radius: 10px;
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

  .upload {
    width: 12px;
    height: 12px;
  }
}
</style>
