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
      @show-dialog-add-container="showAddContainerFormStart"
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
import ServerBoxBL from "@/components/server-box/models/server-box-bl"
import ServerBox from "@/components/server-box/server-box.vue";
import MyDialog from "@/components/ui/ui-dialog/my-dialog.vue";
import AddServerForm from "@/components/server-box/forms/add-server-form.vue";

@Component({
  components: { ServerBox, MyDialog, AddServerForm },
  name: "servers",
})
export default class ServersComponent extends Vue {
  serverBox = new ServerBoxBL([], []);
  pageName = "Страница серверов"
  dialogAddServerForm = new DialogBL(false);
  dialogAddContainerForm = new DialogBL(false);
  editServerId: number;
  hideDialogs() {
    this.dialogAddServerForm.hideDialog();
    this.dialogAddContainerForm.hideDialog();
  }
  constructor() {
    super();
  }
  showAddContainerFormStart(serverId) {
    this.editServerId = serverId;
    this.dialogAddContainerForm.showDialog();
  }
  addServer(server) {
    this.serverBox.addServer(server);
    this.dialogAddServerForm.hideDialog();
  }
  addContainer(container) {
    this.serverBox.addContainer(container, this.editServerId);
    this.dialogAddContainerForm.hideDialog();
  }
  removeContainer(obj) {
    console.log(obj);
    this.serverBox.removeContainer(obj.containerId, obj.serverId);
  }
  
  created() {
    console.log("servers");
    this.serverBox = this.$mainStore.serverBox
  }
  mounted() {}
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