<template>
<div class="row">
  <div class="row-head" :class="{'row-head-wish-row-content': showRowContent}" @click="showRowContent = !showRowContent">
    <div class="name">
      <img src="@/assets/icons/ui-components/select-arrow.svg" :class="{'select-arrow-wish-row-content': showRowContent}">
      <span>{{row.name}}</span>
    </div>
    <div class="icon">
        <img src="@/assets/icons/ui-components/download.svg">
    </div>
  </div>
  <row-content 
  @remove-reposytory="removeReposytory"
  @add-reposytory="addReposytory"
  @hide-form="hideAddReposytoryForm()" 
  @show-add-reposytory-form="showAddReposytoryForm()" 
  :showRowContent="showRowContent" 
  :rowContent="row.content" 
  :rowId="row.id" 
  :addRepositoryFormVisible="row.addRepositoryFormVisible"
  />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import RowContentItemType from "@/components/table/models/row-content-item-type"
import rowContent from "@/components/table/row/row-content/row-content.vue";
import RowType from "@/components/table/models/row-type"

@Component({
  components: { rowContent },
  name: "my-row",
})
export default class MyRow extends Vue {
  @Prop(Object) readonly row: RowType
  showRowContent = false;
  showAddReposytoryForm() {
    console.log(this.row.id);
    this.$emit('show-add-reposytory-form', this.row.id);
  }
  hideAddReposytoryForm() {
    this.$emit('hide-form', this.row.id)
  }
  removeReposytory(reposytoryId: number) {
    console.log(reposytoryId);
    this.$emit('remove-reposytory', {reposytoryId: reposytoryId, rowId: this.row.id});
  }
  addReposytory(reposytory: RowContentItemType) {
    console.log(reposytory);
    this.$emit('add-reposytory', {item: reposytory, rowId: this.row.id});
  }
  constructor() {
    super();
  }
  created() {}
  mounted() {}
}
</script>

<style lang="less" scoped>
.row {
  margin-bottom: 5px;
  min-width: 100%;
  .row-head {
    display: flex;
    justify-content: space-between;
    background-color: #1D1E42;
    border-radius: 10px;
    padding: 12px 20px 12px 40px;
    cursor: pointer;
    .name {
      display: inline-flex;
      align-items: center;
      img {
        margin-right: 13px;
        transform: rotate(-90deg);
      }
      span {
        width: 40vw;
        word-wrap: break-word;
      }
      .select-arrow-wish-row-content {
        transform: none;
      }
    }
    .icon {
      display: flex;
      align-items: center;
      &:hover {
        filter: brightness(115%);
      }
      &:active {
        filter: brightness(130%);
      }
    }
  }
  .row-head-wish-row-content {
    border-radius: 10px 10px 0 0;
  }
  @media(max-width: 435px) {
    .row-head {
      padding: 12px 20px;
    }
  }
}
</style>