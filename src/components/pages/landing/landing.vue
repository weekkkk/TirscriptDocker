<template>
  <layout @add-image="dialogAddImageForm.showDialog()" :pageName="pageName">
    <image-table
      @show-add-repository-form="showAddRepositoryFormStart"
      @remove-repository="removeRepository"
      @add-repository="addRepository"
      @hide-form="hideAddRepositoryForm"
      :rows="shortTable"
    />
    <my-dialog
      :showOne="dialogAddImageForm.show"
      :showTwo="dialogSettingsForm.show"
      @hide-dialog="hideDialogs()"
    >
      <add-image-form
        v-if="dialogAddImageForm.show"
        @hide-dialog="dialogAddImageForm.hideDialog()"
        @add-image="addImage"
      />
      <settings-form
        v-if="dialogSettingsForm.show"
        @hide-dialog="dialogSettingsForm.hideDialog()"
        @show-add-repository-form="showAddRepositoryFormEnd()"
      />
    </my-dialog>
    <div class="pagination">
      <pagination
        :countPages="countPages"
        :curentPage="pagination.curentPage"
        @show-page="showPage"
      />
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import TableBL from "@/components/table/models/image-table-bl";
import DialogBL from "@/components/ui/ui-dialog/dialog-bl";
import ImageTable from "@/components/table/image-table.vue";
import myDialog from "@/components/ui/ui-dialog/my-dialog.vue";
import addImageForm from "@/components/table/forms/add-image-form.vue";
import ImageType from "@/components/table/models/image-type";
import Pagination from "@/components/ui/pagination/pagination.vue";
import PaginationBl from "@/components/ui/pagination/pagination-bl";

@Component({
  components: { ImageTable, myDialog, addImageForm, Pagination },
  name: "landing",
})
export default class LandingComponent extends Vue {
  pageName = "Название проекта";
  table = new TableBL([]);
  pagination = new PaginationBl(10, 1);
  get shortTable() {
    return this.pagination.shortTable(this.table.rows);
  }
  get countPages() {
    return this.pagination.countPagesFunc(this.table.rows);
  }
  showPage(page: number) {
    this.pagination.curentPage = page;
  }
  constructor() {
    super();
  }
  dialogAddImageForm = new DialogBL(false);
  dialogSettingsForm = new DialogBL(false);
  addRepositoryRowId: number = 0;
  addImage(row: ImageType) {
    this.table.addRow(row);
    this.dialogAddImageForm.hideDialog();
    this.$mainStore.table.rows = this.table.rows;
    console.log(this.$mainStore.table.rows);
  }
  removeRepository(obj) {
    console.log(obj);
    this.table.removeRowContentItem(obj);
    this.$mainStore.table.rows = this.table.rows;
    console.log(this.$mainStore.table.rows);
  }
  addRepository(obj) {
    console.log(obj);
    this.table.addRowContentItem(obj);
    this.table.hideAddRepositoryForm(obj.rowId);
    this.$mainStore.table.rows = this.table.rows;
    console.log(this.$mainStore.table.rows);
  }
  //Вызвается по клику на кнопку добавления репозитория в образ, принимает id образа и записывает его в переменную addRepositoryRowId, затем открывает диалогое окно настроек
  showAddRepositoryFormStart(rowId: number) {
    console.log(rowId);
    this.addRepositoryRowId = rowId;
    this.dialogSettingsForm.showDialog();
  }
  //Вызывается после клика на кнопку сохранить в диалоговом окне настроек 'settings-form', открывает внутри образа с id равным addRepositoryRowId форму для добавления репозитория
  showAddRepositoryFormEnd() {
    this.table.showAddRepositoryForm(this.addRepositoryRowId);
    console.log(this.table.rows);

    this.dialogSettingsForm.hideDialog();
  }
  hideAddRepositoryForm(rowId: number) {
    this.table.hideAddRepositoryForm(rowId);
  }
  hideDialogs() {
    this.dialogAddImageForm.hideDialog();
    this.dialogSettingsForm.hideDialog();
  }
  created() {
    console.log("landing");
    this.table = this.$mainStore.table;
    console.log(this.$mainStore.table);
  }
  beforeRouteUpdate() {
    this.$mainStore.table = this.table;
    console.log(this.$mainStore.table);
  }
  mounted() {
    console.log(this.pagination.countPages);
  }
}
</script>

<style lang="less">
.progress-margin-top {
  margin-top: 200px;
}
.pagination {
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
</style>