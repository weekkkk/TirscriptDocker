<template>
  <div class="form">
    <div class="title">Добавление контейнера</div>
    <my-select
      :placeholder="'Введите'"
      :options="possibleСontainers"
      v-model="addedContainer.name"
      @added-container-id="addedContainerId"
    />
    <div class="buttons">
      <cancel-button class="cancel" @click.native="$emit('hide-dialog')">
        Отмена
      </cancel-button>
      <add-button
        class="save"
        @click.native="addedContainer.id == 0 ? isError = true : $emit('add-container', addedContainer)"
      >
        Сохранить
      </add-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ImageType from "@/components/table/models/image-type";
import cancelButton from "@/components/ui/buttons/cancel-button.vue";
import addButton from "@/components/ui/buttons/add-button.vue";
import MySelect from "@/components/ui/my-select/my-select.vue";

@Component({
  components: { cancelButton, addButton, MySelect },
  name: "add-image-from",
})
export default class AddImageForm extends Vue {
  isError = false;
  addedContainer: ImageType = {id: 0, name: '', serviceId: 0};
  possibleСontainers: ImageType[] = [];
  addedContainerId(id: number) {
    this.addedContainer = this.possibleСontainers.filter((c) => c.id == id)[0];
  }
  mounted() {
    // this.possibleСontainers = this.$mainStore.serverBox.possibleСontainers;
    this.$api.ServiceConfigure.getServicesAsync({ IdMainProject: 5051, Page: {},})
    .then((res) => {
      console.log(res);
      res.Items.forEach((service) => 
        this.$api.ServiceConfigure.getImagesInfoAsync({ ServiceId: service.Id, Page: {} })
        .then((res) => {
          console.log(res);
          res.Items.forEach((image) => this.possibleСontainers.push({id: image.Id, name: image.Name, serviceId: service.Id}));
        })
        .catch((err) => {
          console.log(err);
        })
      );
    })
    .catch((err) => {
      console.log(err);
    })
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
.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 45px;
  .save {
    margin-left: 12px;
  }
}
@media (max-width: 435px) {
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