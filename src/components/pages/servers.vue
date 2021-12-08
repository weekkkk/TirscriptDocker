<template>
  <layout
    :pageName="pageName"
    @show-dialog-add-server="dialogAddServerForm.showDialog()"
  >
    <div class="main-box">
      <server-box
        v-for="server in serverBox.servers"
        :key="server.id"
        :server="server"
        @show-dialog-add-container="showAddContainerForm"
        @remove-container="removeContainer"
      />
      <my-dialog
        :showOne="dialogAddServerForm.show"
        :showTwo="dialogAddContainerForm.show"
        @hide-dialog="hideDialogs()"
      >
        <add-server-form
          @hide-dialog="dialogAddServerForm.hideDialog()"
          @add-server="addServer"
          v-if="dialogAddServerForm.show"
        />
        <add-container-form
          @hide-dialog="dialogAddContainerForm.hideDialog()"
          @add-container="addContainer"
          v-if="dialogAddContainerForm.show"
        />
      </my-dialog>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import DialogBL from "@/components/ui/ui-dialog/dialog-bl";
import ServerBoxBL from "@/components/server-box/models/server-box-bl";
import ServerBox from "@/components/server-box/server-box.vue";
import MyDialog from "@/components/ui/ui-dialog/my-dialog.vue";
import AddServerForm from "@/components/server-box/forms/add-server-form.vue";

@Component({
  components: { ServerBox, MyDialog, AddServerForm },
  name: "servers",
})
export default class ServersComponent extends Vue {
  serverBox = new ServerBoxBL([], []);
  pageName = "Страница серверов";
  dialogAddServerForm = new DialogBL(false); //Модель диалогового окна для добавления серверов
  dialogAddContainerForm = new DialogBL(false); //Модель диалогового окна для добавления контейнеров в сервера
  addContainerServerId: number;

  addServer(server) {
    this.serverBox.addServer(server);
    this.dialogAddServerForm.hideDialog();
  }

  //Вызывается по клику на кнопку добавления контейнера в сервер, принимает id сервера и записывает его в переменную, затем открывает диалоговое окно
  showAddContainerForm(serverId: number) {
    this.addContainerServerId = serverId;
    this.dialogAddContainerForm.showDialog();
  }
  //Работает также, как в 'landing'
  hideDialogs() {
    this.dialogAddServerForm.show ? this.dialogAddServerForm.hideDialog() : this.dialogAddContainerForm.hideDialog()
  }

  //Вызывается при нажатии на кнопку сохранения в диалоговом окне добавления образа, принимает добавляемый контейнер
  addContainer(container) {
    this.serverBox.addContainer(container, this.addContainerServerId); //Функция модели сервера, принимает добавляемый контейнер и id сервера, в который нужно добавить контейнер (id храниться в переменной addContainerServerId, которой было присвоено значение в функции showAddContainerForm)
    this.dialogAddContainerForm.hideDialog();
  }
  //Принимает объект, внутри которого id контейнера, который нужно удалить, и id сервера, из которого удаляется контейнер
  removeContainer(obj) {
    console.log(obj);
    this.serverBox.removeContainer(obj.containerId, obj.serverId);
  }

  created() {
    this.serverBox = this.$mainStore.serverBox;
  }
}
</script>

<style lang="less" scoped>
.progress-margin-top {
  margin-top: 200px;
}
.main-box {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  // justify-content: space-between;
}
</style>