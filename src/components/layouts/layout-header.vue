<template>
  <header class="header">
    <div class="header-left">
      <div 
      class="back-button"
      @click="pushOnBackPage()">
        <img src="@/assets/icons/ui-components/back.svg">
      </div>
      <div class="project-name">{{pageName}}</div>
    </div>
    <div class="header-right" v-if="pageName == 'Название проекта'">
        <my-button 
        class="server-button"
        @click.native="pushOnServers()"
        >Сервера</my-button>
        <div class="icons-box">
          <div class="icon">
            <img src="@/assets/icons/ui-components/settings.svg">
          </div>
          <div @click="$emit('add-image')" class="icon">
            <img src="@/assets/icons/ui-components/create.svg">
          </div>
        </div>
    </div>

    <div class="header-right" v-if="pageName == 'Страница серверов'">
        <add-button class="server-button" @click.native="$emit('show-dialog-add-server')"> 
          <img src="@/assets/icons/ui-components/plus-symbol.svg">
          Добавать сервер
        </add-button>
    </div>
    <!-- <div class="header-right">
      <slot></slot>
    </div> -->
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import myButton from "@/components/ui/my-button.vue";

@Component({
  components: { myButton },
  name: "layout-header",
})

export default class LayoutHeaderComponent extends Vue {
  @Prop(String) readonly pageName: string;
  
  pushOnBackPage() {
    this.$router.push('/landing');
  }
  pushOnServers() {
    this.$router.push('/servers');
  }
  constructor() {
    super();
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  .header-left {
    display: flex;
    align-items: center;
    .back-button {
      &:hover {
        filter: brightness(115%);
      }
      &:active {
        filter: brightness(130%);
      }
    }
    .project-name {
      margin-left: 15px;
      font-size: 24px;
    }
  }
  .header-right {
    display: flex;
    .server-button {
      img {
        margin-right: 15px;
      }
    }
    .icons-box {
      display: flex;
      .icon {
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          filter: brightness(115%);
        }
        &:active {
          filter: brightness(130%);
        }
      }
    }
  }
  @media(max-width: 600px) {
    flex-direction: column;
    .header-left {
      justify-content: space-between;
      width: 100%;
      margin-bottom: 15px;
    }
    .header-right {
      width: 100%;
      justify-content: space-between;
      .server-button {
        margin-bottom: 15px;
      }
      .icons-box {
        justify-content: flex-end;
      }
    }
  }
  @media(max-width: 340px) {
    .header-left {
      justify-content: space-between;
      width: 100%;
      margin-bottom: 15px;
      .project-name {
        font-size: 18px;
      }
    }
    .header-right {
      width: 100%;
      flex-direction: column;
      .server-button {
        margin-bottom: 15px;
        width: 100%;
      }
      .icons-box {
        justify-content: flex-end;
      }
    }
  }
}
</style>