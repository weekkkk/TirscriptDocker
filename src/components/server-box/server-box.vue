<template>
  <div class="server-box">
    <div class="server-header">
      <div class="server-name">{{ server.name }}</div>
      <div class="header-icons">
        <info-btn />
        <add-image-btn
          class="icon"
          @click.native="$emit('show-dialog-add-container', server.id)"
        />
      </div>
    </div>
    <div class="add-image-message" v-if="server.containers.length == 0">
      <img src="@/assets/icons/ui-components/add-image-message.svg" />
      <div>Добавьте образ</div>
    </div>
    <div class="server-containers-box" v-if="server.containers.length > 0">
      <server-container
        v-for="container in server.containers"
        :key="container.id"
        :container="container"
        @remove-container="removeContainer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ServerType from "@/components/server-box/models/server-type";
import ServerContainer from "@/components/server-box/server-container.vue";

@Component({
  components: { ServerContainer },
  name: "server-box",
})
export default class ServerBox extends Vue {
  @Prop(Object) readonly server: ServerType;

  //Принимает id контейнера, который нужно удалить и передает через событие объект внутри которого находится id удаляемого контейнера и id сервера, из которого удаляется контейнер
  removeContainer(containerId: number) {
    this.$emit("remove-container", {
      containerId: containerId,
      serverId: this.server.id,
    });
  }
}
</script>

<style lang="less" scoped>
.server-box {
  display: flex;
  flex-direction: column;
  background-color: #1d1e42;
  border-radius: 10px;
  width: calc((100vw - 100px - 24px) / 3);
  flex-grow: 1;
  min-width: 550px;
  padding: 30px;
  margin: 4px;
  .server-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .server-name {
      font-size: 18px;
      width: 50vw;
      word-wrap: break-word;
      @media (max-width: 650px) {
        font-size: 14px;
      }
    }
    .header-icons {
      display: flex;
      .icon {
        margin-left: 6px;
        height: 28px;
        width: 28px;
        border-radius: 5px;
        .add-image {
          height: 8px;
          width: 8px;
        }
      }
    }
  }
  .server-containers-box {
    margin-top: 25px;
  }
  .add-image-message {
    font-weight: 500;
    color: #464876;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    img {
      margin-bottom: 15px;
    }
  }
  @media (max-width: 650px) {
    min-width: 300px;
    // .server-header {
    //   font-size: 12px;
    // }
  }
  @media (max-width: 350px) {
    padding: 15px;
    min-width: 200px;
    .server-header {
      .server-name {
        width: 40vw;
      }
    }
    .server-containers-box {
      margin-top: 15px;
    }
  }
}
</style>