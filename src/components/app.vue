<template>
  <router-view />
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class AppComponent extends Vue {
  constructor() {
    super();
    //console.log("AppComponent created");
  }
  created() {}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gilroy";
}
</style>