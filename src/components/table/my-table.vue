<template>
<div class="table">
  <my-row 
  @remove-reposytory="removeReposytory"
  @add-reposytory="addReposytory"
  @hide-form="hideAddReposytoryForm" 
  @show-add-reposytory-form="showAddReposytoryForm" 
  v-for="row in rows" 
  :row="row" 
  :key="row.id"
  />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import RowContentItemType from "@/components/table/models/row-content-item-type";
import myRow from "@/components/table/row/my-row.vue";
import RowType from "@/components/table/models/row-type";

@Component({
  components: { myRow },
  name: "my-table",
})
export default class MyTable extends Vue {
  @Prop(Array) readonly rows: RowType[];
  showAddReposytoryForm(rowId: number) {
    console.log(rowId);
    this.$emit('show-add-reposytory-form', rowId);
  }
  hideAddReposytoryForm(rowId: number) {
    this.$emit('hide-form', rowId)
  }
  removeReposytory(obj) {
    console.log(obj);
    this.$emit('remove-reposytory', obj);
  }
  addReposytory(obj) {
    console.log(obj);
    this.$emit('add-reposytory', obj);
  }
  
  created() {}
  mounted() {}
}
</script>

<style lang="less" scoped>
.table {
  display: flex;
  flex-direction: column;
  min-width: 100%;
}
</style>