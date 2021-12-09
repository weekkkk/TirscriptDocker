<template>
  <button class="add-btn">добавить в репозиторий</button>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator'
@Component({
  name: 'ui-add-to-repository-btn'
})
export default class UiAddToRepositoryBtn extends Vue {}
</script>

<style scoped lang="less">
.add-btn {
  font-weight: 600;
  font-size: 15px;
  text-decoration-line: underline;
  color: #3e71bb;
  background: transparent;
  text-align: left;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration-line: none;
  }

  &:active {
    color: #4060cf;
    text-decoration-line: underline;
  }
}
</style>
