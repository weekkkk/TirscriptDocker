<template>
  <div class="table">
    <image-row
      @show-add-repository-form="showAddRepositoryForm"
      @remove-repository="removeRepository"
      @add-repository="addRepository"
      @hide-form="hideAddRepositoryForm"
      v-for="image in images"
      :image="image"
      :key="image.id"
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
  @Prop(Array) readonly images: ImageType[];

  showAddRepositoryForm(imageId: number) {
    this.$emit("show-add-repository-form", imageId);
  }
  hideAddRepositoryForm(imageId: number) {
    this.$emit("hide-form", imageId);
  }

  //Принимает и через событие передает объект, внутри которого id удаляемого репозитория и id строки, из которой нужно удалить репозиторий
  removeRepository(obj) {
    this.$emit("remove-repository", obj);
  }
  //Принимает и через событие передает объект, внутри которого репозиторий и id строки, в которую нужно добавить репозиторий
  addRepository(obj) {
    this.$emit("add-repository", obj);
  }
}
</script>

<style lang="less" scoped>
.table {
  display: flex;
  flex-direction: column;
  min-width: 100%;
}
</style>