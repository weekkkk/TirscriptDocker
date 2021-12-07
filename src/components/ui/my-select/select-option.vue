<template>
<div 
class="option"
@click="$emit('add-conteiner', conteiner)"
>
  {{conteiner.name}}
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import RowType from "@/components/table/models/row-type"

@Component({
  components: { },
  name: "select-option",
})
export default class SelectOption extends Vue {
  @Prop(Object) readonly conteiner: RowType;
  
  created() {
    console.log("servers");
  }
  mounted() {
    console.log(this.conteiner);
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