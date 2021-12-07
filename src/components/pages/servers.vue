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
      @show-dialog-add-conteiner="showAddConteinerFormStart"
      @remove-conteiner="removeConteiner"
      />
      <my-dialog 
      :showOne="dialogAddServerForm.show" 
      :showTwo="dialogAddConteinerForm.show"
      @hide-dialog="hideDialogs()"
      >
        <add-server-form 
        @hide-dialog="dialogAddServerForm.hideDialog()"
        @add-server="addServer"
        v-if="dialogAddServerForm.show"
        />
        <add-conteiner-form 
        @hide-dialog="dialogAddConteinerForm.hideDialog()"
        @add-conteiner="addConteiner"
        v-if="dialogAddConteinerForm.show"
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
import RowType from "../table/models/row-type";

@Component({
  components: { ServerBox, MyDialog, AddServerForm },
  name: "servers",
})
export default class ServersComponent extends Vue {
  // сonteiners: RowType[] = [];
  serverBox = new ServerBoxBL([], []);
  pageName = "Страница серверов"
  dialogAddServerForm = new DialogBL(false);
  dialogAddConteinerForm = new DialogBL(false);
  editServerId: number;
  hideDialogs() {
    this.dialogAddServerForm.hideDialog();
    this.dialogAddConteinerForm.hideDialog();
  }
  constructor() {
    super();
  }
  showAddConteinerFormStart(serverId) {
    this.editServerId = serverId;
    this.dialogAddConteinerForm.showDialog();
  }
  addServer(server) {
    this.serverBox.addServer(server);
    this.dialogAddServerForm.hideDialog();
  }
  addConteiner(conteiner) {
    this.serverBox.addConteiner(conteiner, this.editServerId);
    this.dialogAddConteinerForm.hideDialog();
  }
  removeConteiner(obj) {
    console.log(obj);
    this.serverBox.removeConteiner(obj.conteinerId, obj.serverId);
  }
  
  created() {
    console.log("servers");
    this.serverBox = this.$mainStore.serverBox
    // this.сonteiners = this.$mainStore.table.rows;
    // console.log(this.сonteiners);
    
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