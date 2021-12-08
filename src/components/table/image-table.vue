<template>
  <div class="table">
    <image-row
      @show-add-repository-form="showAddRepositoryForm"
      @remove-repository="removeRepository"
      @add-repository="addRepository"
      @hide-form="hideAddRepositoryForm"
      v-for="row in rows"
      :row="row"
      :key="row.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ImageType from "@/components/table/models/image-type";
import ImageRow from "@/components/table/row/image-row.vue";

@Component({
  components: { ImageRow },
  name: "image-table",
})
export default class ImageTable extends Vue {
  @Prop(Array) readonly rows: ImageType[];
  showAddRepositoryForm(rowId: number) {
    console.log(rowId);
    this.$emit("show-add-repository-form", rowId);
  }
  hideAddRepositoryForm(rowId: number) {
    this.$emit("hide-form", rowId);
  }
  removeRepository(obj) {
    console.log(obj);
    this.$emit("remove-repository", obj);
  }
  addRepository(obj) {
    console.log(obj);
    this.$emit("add-repository", obj);
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