<template>
  <header class="header">
    <div class="header-left">
      <ui-back-btn @click.native="$router.go(-1)" />
      <div class="title">{{ pageName }}</div>
    </div>
    <slot></slot>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import MyButton from "@/components/ui/buttons/my-button.vue";
import UiBackBtn from "@/components/ui/buttons/ui-back-btn.vue"

@Component({
  components: { MyButton, UiBackBtn },
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
    .title {
      margin-left: 15px;
      font-size: 24px;
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