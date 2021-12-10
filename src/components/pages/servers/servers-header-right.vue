<template>
  <div class="header-right">
    <add-button
      class="server-button"
      @click.native="$emit('show-dialog-add-server-form')"
    >
      <img src="@/assets/icons/ui-components/plus-symbol.svg" />
      Добавать сервер
    </add-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AddButton from '@/components/ui/buttons/add-button.vue';

@Component({
  components: { AddButton },
  name: 'servers-header-right',
})
export default class ServersHeaderRight extends Vue {}
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