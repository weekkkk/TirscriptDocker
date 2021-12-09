<template>
<div class="form">
  <div class="title">Добавление образа</div>
  <ui-input :name="'Название'" :placeholder="'Имя'" :value="image.name" :isError="getIsError" v-model="image.name"/>
  <div class="buttons">
    <cancel-button class="cancel" @click.native="$emit('hide-dialog')">Отмена</cancel-button>
    <add-button class="save" @click.native="image.name == '' ? isError = true : $emit('add-image', image)">Сохранить</add-button>
  </div>
</div>

</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import ImageType from "@/components/table/models/image-type"
import CancelButton from "@/components/ui/buttons/cancel-button.vue"
import AddButton from "@/components/ui/buttons/add-button.vue"
import UiInput from "@/components/ui/ui-input.vue"

@Component({
  components: { CancelButton, AddButton, UiInput },
  name: "add-image-form",
})
export default class AddImageForm extends Vue {
  image: ImageType = {id: 0, name: "", content: [{id: 1, version: "123456789", status: false}], addRepositoryFormVisible: false};
  isError = false;
  get getIsError() {
    return this.isError ? this.isError = this.image.name=='' : this.isError;
  }
}
</script>

<style lang="less" scoped>
.title {
  display: inline-block;
  font-size: 24px;
  margin-bottom: 50px;
  z-index: 1;
}
// .input {
//   color: #fff;
//   width: 100%;
//   padding: 15px 30px;
//   border-radius: 10px;
//   background-color: rgba(0, 0, 0, 0.5);
//   border: none;
// }
.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 45px;
  .save {
    margin-left: 12px;
  }
}
@media(max-width: 435px) {
  .title {
    font-size: 18px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
  // .input {
  //   font-size: 12px;
  //   margin-top: 20px;
  // }
  .buttons {
    margin-top: 25px;
    flex-direction: column-reverse;
    .cancel {
      font-size: 12px;
    }
    .save {
      font-size: 12px;
      margin: 0;
      margin-bottom: 10px;
    }
  }
}
</style>