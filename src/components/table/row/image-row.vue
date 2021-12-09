<template>
  <div class="row">
    <div
      class="row-head"
      :class="{ 'row-head-wish-row-content': showRepositoryTable }"
      @click="showRepositoryTable = !showRepositoryTable"
    >
      <div class="name">
        <img
          src="@/assets/icons/ui-components/select-arrow.svg"
          :class="{ 'select-arrow-wish-row-content': showRepositoryTable }"
        />
        <span>{{ image.name }}</span>
      </div>
      <ui-upload-btn class="icon"/>
    </div>
    <repository-table
      @show-add-repository-form="$emit('show-add-repository-form', image.id)"
      @remove-repository="removeRepository"
      @add-repository="addRepository"
      @hide-form="$emit('hide-form', image.id)"
      :showRepositoryTable="showRepositoryTable"
      :repositoryTable="image.content"
      :addRepositoryFormVisible="image.addRepositoryFormVisible"
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
  @Prop(Object) readonly image: ImageType;
  showRepositoryTable = false; //Модель, которая контролирует отображение таблицы репозиториев 'repository-table'

  //Принимает id удаляемого репозитория и создает событие, которое передает объект, внутри которого id удаляемого репозитория и id строки, из которой нужно удалить репозиторий
  removeRepository(repositoryId: number) {
    this.$emit("remove-repository", { repositoryId: repositoryId, imageId: this.image.id });
  }
  //Принимает репозитории и создает событие, которое передает объект, внутри которого репозиторий и id строки, в которую нужно добавить репозиторий
  addRepository(repository: RepositoryType) {
    this.$emit("add-repository", { repository: repository, imageId: this.image.id });
  }
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