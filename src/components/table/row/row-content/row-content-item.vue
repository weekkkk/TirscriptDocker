<template>
<div>
  <div class="form" v-if="addRepositoryFormVisible && !contentItem.status">
    <add-reposytory-form 
    @hide-form="$emit('hide-form')" 
    @add-reposytory="addReposytory" 
    />
  </div>
  <!-- <loading-row-content-item :version="contentItem.version" /> -->
  <div class="repository">
    <div class="info-box">
      <div class="repository-name">{{contentItem.version}}</div>
      <div class="repository-status-true" v-if="contentItem.status">в репозитории</div>
      <div class="repository-status-false" v-if="!contentItem.status" @click="$emit('show-add-reposytory-form')">добавить в репозиторий</div>
    </div>
    <div class="repository-icons">
      <div class="icon">
        <img src="@/assets/icons/ui-components/unload.svg" class="icon">
      </div>
      <div  class="icon" @click="removeReposytory">
        <img src="@/assets/icons/ui-components/remove.svg">
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component,Prop } from "vue-property-decorator";
import RowContentItemType from "@/components/table/models/row-content-item-type"
import loadingRowContentItem from "@/components/table/forms/loading-row-content-item.vue"

@Component({
  name: "row-content-item",
})
export default class RowContentItem extends Vue {
  @Prop(Object) readonly contentItem: RowContentItemType;
  @Prop(Boolean) readonly addRepositoryFormVisible: boolean;

  addReposytory(reposytory: RowContentItemType) {
    console.log(reposytory);
    this.$emit('add-reposytory', reposytory);
  }
  removeReposytory() {
    console.log(this.contentItem.id);
    this.$emit('remove-reposytory', this.contentItem.id);
  }
  constructor() {
    super();
  }
  created() {}
  mounted() {}
}
</script>

<style lang="less" scoped>
.form {
  padding: 12px 20px 12px 40px;
  @media(max-width: 435px) {
    padding: 6px 10px 6px 15px;
  }
}
.repository {
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 12px 40px;
  .info-box {
    display: flex;
    // align-items: center;
    .repository-name {
    max-width: 25vw;
    min-width: 25vw;
    word-wrap: break-word;
    padding-right: 20px;
    }
    .repository-status-true {
      width: 100%;
      font-size: 15px;
      color: #25AE88;
    }
    .repository-status-false {
      width: 100%;
      font-size: 15px;
      color: #3E71BB;
      text-decoration-line: underline;
      cursor: pointer;
      &:hover {
        text-decoration-line: none;
      }
      &:active {
        color: #4060CF;
        text-decoration-line: underline;
      }
    }
  }
  
  .repository-icons {
    display: flex;
    .icon {
      margin-left: 10px;
      cursor: pointer;
      &:hover {
        filter: brightness(115%);
      }
      &:active {
        filter: brightness(130%);
      }
    }
  }
  @media(max-width: 600px) {
    .info-box {
      flex-direction: column;
    }
  }
  @media(max-width: 435px) {
    padding: 6px 10px 6px 15px;
    .info-box {
      .repository-name {
        font-size: 10px;;
      }
      .repository-status-true {
        font-size: 10px;;
      }
      .repository-status-false {
        font-size: 10px;;
      }
    }
  }
}
</style>