<template>
  <span :style="style" @click="$emit('click')"> </span>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class IconComponent extends Vue {
  @Prop()
  name: string;
  get url(): string {
    return require(`@/assets/icons/${this.name}.svg`);
  }
  get style() {
    return { backgroundImage: `url("${this.url}")` };
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  vertical-align: middle;
  height: 40px;
  width: 40px;
  background-size: cover;
}
</style>