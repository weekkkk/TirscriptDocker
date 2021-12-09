<template>
  <div class="header-right">
    <my-button class="server-button" @click.native="$router.push('/servers')"
      >Сервера</my-button
    >
    <div class="icons-box">
      <ui-settings-btn class="icon" />
      <add-image-btn @click.native="$emit('show-dialog-add-image-form')" class="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import AddButton from "@/components/ui/buttons/add-button.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {AddButton},
  name: "landing-header-right",
})
export default class LandingHeaderRight extends Vue {}
</script>

<style lang="less" scoped>
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
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    .server-button {
      margin-bottom: 15px;
    }
    .icons-box {
      justify-content: flex-end;
    }
  }
  @media (max-width: 340px) {
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
</style>