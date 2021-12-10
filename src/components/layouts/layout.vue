<template>
  <div class="layout">
    <div class="container">
      <layout-header 
      @show-dialog-add-server="$emit('show-dialog-add-server')" 
      :pageName="pageName"
      >
        <slot name="header-right"></slot>
      </layout-header>
      <div class="content">
        <slot></slot>
      </div>
      <layout-footer></layout-footer>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "layout",
})
export default class LayoutComponent extends Vue {
  @Prop(String) readonly pageName: string;
  constructor() {
    super();
  }
}
</script>

<style lang="less">
@font-face {
  font-family: "Gilroy";
  src: url("~@assets/fonts/Gilroy-Bold.ttf") format('truetype');
  font-weight: 700;
}
@font-face {
  font-family: "Gilroy";
  src: url("~@assets/fonts/Gilroy-Semibold.ttf") format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: "Gilroy";
  src: url("~@assets/fonts/Gilroy-Medium.ttf") format('truetype');
  font-weight: 500;
}
@font-face {
  font-family: "Gilroy";
  src: url("~@assets/fonts/Gilroy-Regular.ttf") format('truetype');
  font-weight: 400;
}
body {
  background-color: #08081F;
  font-family: "Gilroy";
  font-weight: 600;
  color: #ffffff;
}
.layout {
  display: flex;
  min-width: 100%;
  .container {
    display: flex;
    flex-direction: column;
    padding: 30px 50px;
    width: 100%;
    @media(max-width: 435px) {
      padding: 15px 25px;
    }
  }
}
</style>
