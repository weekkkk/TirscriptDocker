<template>
  <div class="row">
    <div
      class="row-head"
      :class="{ 'row-head-wish-row-content': showRowContent }"
      @click="showRowContent = !showRowContent"
    >
      <div class="name">
        <img
          src="@/assets/icons/ui-components/select-arrow.svg"
          :class="{ 'select-arrow-wish-row-content': showRowContent }"
        />
        <span>{{ row.name }}</span>
      </div>
      <div class="icon">
        <img src="@/assets/icons/ui-components/download.svg" />
      </div>
    </div>
    <repository-table
      @show-add-repository-form="showAddRepositoryForm()"
      @remove-repository="removeRepository"
      @add-repository="addRepository"
      @hide-form="hideAddRepositoryForm()"
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
import RepositoryType from "@/components/table/models/repository-type";
import ImageType from "@/components/table/models/image-type";
import RepositoryTable from "@/components/table/row/row-content/repository-table.vue";

@Component({
  components: { RepositoryTable },
  name: "image-row",
})
export default class ImageRow extends Vue {
  @Prop(Object) readonly row: ImageType;
  showRowContent = false;
  showAddRepositoryForm() {
    console.log(this.row.id);
    this.$emit("show-add-repository-form", this.row.id);
  }
  hideAddRepositoryForm() {
    this.$emit("hide-form", this.row.id);
  }
  removeRepository(repositoryId: number) {
    console.log(repositoryId);
    this.$emit("remove-repository", {
      repositoryId: repositoryId,
      rowId: this.row.id,
    });
  }
  addRepository(repository: RepositoryType) {
    console.log(repository);
    this.$emit("add-repository", { item: repository, rowId: this.row.id });
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
    background-color: #1d1e42;
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
  @media (max-width: 435px) {
    .row-head {
      padding: 12px 20px;
    }
  }
}
</style>