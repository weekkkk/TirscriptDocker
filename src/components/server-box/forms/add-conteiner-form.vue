<template>
<div class="form">
  <div class="title">Добавление контейнера</div>
  <my-select
  @add-conteiner="addConteiner" 
  />
  <div class="buttons">
    <cancel-button class="cancel" @click.native="$emit('hide-dialog')">Отмена</cancel-button>
    <add-button class="save" @click.native="$emit('add-conteiner', addedConteiner)">Сохранить</add-button>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import RowType from "@/components/table/models/row-type"
import cancelButton from "@/components/ui/cancel-button.vue"
import addButton from "@/components/ui/add-button.vue"
import MySelect from "@/components/ui/my-select/my-select.vue"

@Component({
  components: { cancelButton, addButton, MySelect },
  name: "add-image-from",
})
export default class AddImageForm extends Vue {
  @Prop(Array) readonly сonteiners: RowType[];
  addedConteiner:RowType;
  addConteiner(addedConteiner: RowType) {
    this.addedConteiner = addedConteiner;
  }
  constructor() {
    super();
  }
  created() {
    console.log("landing");
  }
  mounted() {}
}
</script>

<style lang="less" scoped>
.title {
  display: inline-block;
  font-size: 24px;
  margin-bottom: 50px;
  z-index: 1;
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