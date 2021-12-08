<template>
<div class="form">
  <div class="title">Добавление образа</div>
  <input type="text" placeholder="Название образа" class="input" v-model="row.name">
  <div class="buttons">
    <cancel-button class="cancel" @click.native="$emit('hide-dialog')">Отмена</cancel-button>
    <add-button class="save" @click.native="$emit('add-image', row)">Сохранить</add-button>
  </div>
</div>

</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import ImageType from "@/components/table/models/image-type"
import cancelButton from "@/components/ui/cancel-button.vue"
import addButton from "@/components/ui/add-button.vue"

@Component({
  components: { cancelButton, addButton },
  name: "add-image-form",
})
export default class AddImageForm extends Vue {
  row: ImageType = {id: 0, name: "", content: [{id: 1, version: "123456789", status: false}], addRepositoryFormVisible: false};
}
</script>

<style lang="less" scoped>
.title {
  display: inline-block;
  font-size: 24px;
  margin-bottom: 50px;
  z-index: 1;
}
.input {
  color: #fff;
  width: 100%;
  padding: 15px 30px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
}
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
  .input {
    font-size: 12px;
    margin-top: 20px;
  }
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