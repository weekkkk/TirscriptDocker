<template>
  <div>
    <div class="repository">
      <div class="repository-name">{{ version }}</div>
      <div class="loading-status">
        <div class="loading-icon">
          <img src="@/assets/icons/ui-components/loading.svg" />
        </div>
        <div>15% 0:12:07 мин <span>добавление в репозиторий</span></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {},
  name: "loading-row-content-item",
})
export default class LoadingRowContentItem extends Vue {
  @Prop(String) readonly version: string;
}
</script>

<style lang="less" scoped>
.form {
  padding: 12px 20px 12px 40px;
}
.repository {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 12px 40px;
  .repository-name {
    max-width: 30vw;
    min-width: 25vw;
    word-wrap: break-word;
    padding-right: 20px;
  }
  .loading-status {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 15px;
    color: #dce1f1;
    .loading-icon {
      margin-right: 12px;
    }
    span {
      font-weight: 500;
    }
  }
}
</style>