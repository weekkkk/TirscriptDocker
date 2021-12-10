<template>
  <layout :pageName="pageName">
    <landing-header-right
      @show-dialog-add-image-form="dialogAddImageForm.showDialog()"
      slot="header-right"
    />
    <image-table
      @show-add-repository-form="showAddRepositoryFormStart"
      @remove-repository="removeRepository"
      @add-repository="addRepository"
      @hide-form="hideAddRepositoryForm"
      :images="shortTable"
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
        :currentPage="pagination.currentPage"
        @show-page="showPage"
        v-if="countPages > 1"
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
import myDialog from "@/components/ui/ui-dialog/ui-dialog.vue";
import addImageForm from "@/components/table/forms/add-image-form.vue";
import ImageType from "@/components/table/models/image-type";
import Pagination from "@/components/ui/pagination/pagination.vue";
import PaginationBl from "@/components/ui/pagination/pagination-bl";
import LandingHeaderRight from "@/components/pages/landing/landing-header-right.vue";

@Component({
  components: {
    ImageTable,
    myDialog,
    addImageForm,
    Pagination,
    LandingHeaderRight,
  },
  name: "landing",
})
export default class LandingComponent extends Vue {
  pageName = "Название проекта";
  table = new TableBL([]);
  pagination = new PaginationBl(5, 1); //Модель для пагинации, в которую передаются кол-во образов на одной странице и текущая страница
  get shortTable() {
    return this.pagination.shortTable(this.table.rows); //Возвращает посты, которые находятся на текущей странице
  }
  get countPages() {
    return this.pagination.countPagesFunc(this.table.rows); //Возвращает общеее кол-во страниц пагинации
  }
  //Вызывается при смене страницы, принимает номер страницы, на которую хочет перейти пользователь и присваивает его currentPage
  showPage(page: number) {
    this.pagination.currentPage = page;
  }

  dialogAddImageForm = new DialogBL(false); //Модель для диалогового окна добавления образа, открывается при добавлении нового образа
  dialogSettingsForm = new DialogBL(false); //Модель для диалогового окна с настройками билд машины, открывается при добавлении нового репозитория
  addRepositoryImageId: number; //Переменна, в которую записывается id образа, в котором должна открыться форма для добавления репозитория

  addImage(row: ImageType) {
    this.table.addRow(row);
    this.dialogAddImageForm.hideDialog();
    
    this.$api.ServiceConfigure.addImageInfoAsync({ServiceId: Object.assign({}, row).serviceId, Name: Object.assign({}, row).name, DockerArg: {}, Version: '123456789'})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //Принимает объект, внутри которого id удаляемого репозитория и id строки, из которой нужно удалить репозиторий
  removeRepository(obj) {
    this.table.removeRepository(obj.imageId, obj.repositoryId);
  }
  //Принимает объект, внутри которого репозиторий и id строки, в которую нужно добавить репозиторий
  addRepository(obj) {
    this.table.addRepository(obj.imageId, obj.repository);
    this.table.hideAddRepositoryForm(obj.imageId);
  }

  //Вызвается по клику на кнопку добавления репозитория в образ, принимает id образа и записывает его в переменную addRepositoryImageId, затем открывает диалогое окно настроек
  showAddRepositoryFormStart(imageId: number) {
    this.addRepositoryImageId = imageId;
    this.dialogSettingsForm.showDialog();
  }
  //Вызывается после клика на кнопку сохранить в диалоговом окне настроек 'settings-form', открывает внутри образа с id равным addRepositoryImageId форму для добавления репозитория
  showAddRepositoryFormEnd() {
    this.table.showAddRepositoryForm(this.addRepositoryImageId);
    this.dialogSettingsForm.hideDialog();
  }
  //Вызывается по клику на кнопку отмены в форме добавления репозитория 'add-repository-form', принимает id строки в которой находится открытая форма и закрывает ее
  hideAddRepositoryForm(imageId: number) {
    this.table.hideAddRepositoryForm(imageId);
  }
  //Вызывается по клику на крестик или задний фон диалогового окна и закрывает его, т.к. открыто может быть только одно диалоговое окно, то проверяется открыто ли 'dialogAddImageForm'
  hideDialogs() {
    this.dialogAddImageForm.show
      ? this.dialogAddImageForm.hideDialog()
      : this.dialogSettingsForm.hideDialog();
  }

  created() {
    this.$api.ProjectConfigure.getProjectAsync({ MainProjectId: 5051 })
    .then((res) => {
      this.pageName = res.Name;
      this.$api.ServiceConfigure.getServicesAsync({ IdMainProject: 5051, Page: {},})
      .then((res) => {
        // console.log(res);
        res.Items.forEach((service) => 
          this.$api.ServiceConfigure.getImagesInfoAsync({ ServiceId: service.Id, Page: {} })
          .then((res) => {
            // console.log(res);
            res.Items.forEach((image) => this.table.rows.push({id: image.Id, name: image.Name, serviceId: service.Id}));
          })
          .catch((err) => {
            console.log(err);
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      this.$api.ProjectConfigure.createProjectAsync({
        IdMainProject: 5051,
        Name: "Docker-Test",
        Description: "",
        Domain: ""
      });
    });
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
  justify-content: flex-end;
}
</style>