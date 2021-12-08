<template>
<div 
class="option"
@click="$emit('add-container', container)"
>
  {{container.name}}
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ImageType from "@/components/table/models/image-type"

@Component({
  components: { },
  name: "select-option",
})
export default class SelectOption extends Vue {
  @Prop(Object) readonly container: ImageType;
  
  created() {
    console.log("servers");
  }
  mounted() {
    console.log(this.container);
  }
}
</script>

<style lang="less" scoped>
.option {
  padding: 15px 30px;
  cursor: pointer;
  &:hover {
    border-color: #1D1E42;
  }
}
</style>