<template>
  <div class="boxBackground" v-if="showOne | showTwo" @click="$emit('hide-dialog')">
    <div class="box" @click.stop>
      <div class="crossBox" @click="$emit('hide-dialog')">
        <div class="cross">
          <img src="@/assets/icons/ui-components/cross.svg">
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "my-dialog",
})
export default class DialogComponent extends Vue {
  @Prop(Boolean) readonly showOne: boolean
  @Prop(Boolean) readonly showTwo: boolean
  constructor() {
    super();
  }
  created() {}
  mounted() {}
}
</script>

<style lang="less" scoped>
.boxBackground {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  .box {
    width: 640px;
    background-color: #272851;
    padding: 30px 30px 50px 30px;
    border-radius: 10px;
    @media(max-width: 600px) {
      width: 80%;
    }
    .crossBox {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      &:hover {
        filter: brightness(115%);
      }
      &:active {
        filter: brightness(130%);
      }
      .cross {
        position: absolute;
      }
    }
  }
  @media(max-width: 600px) {
    .box {
      width: 80%;
    }
  }
}
</style>