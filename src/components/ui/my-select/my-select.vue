<template>
<div 
class="select"
@click="optionsVisible = true"
>
  <div class="select-input">
    <img src="@/assets/icons/ui-components/select-arrow.svg" class="arrow">
    <input 
    type="text" 
    class="input" 
    v-model="soughtConteinerName"
    >
  </div>
  <div class="optionsBox" v-if="optionsVisible">
    <select-option 
    v-for="conteiner in serchConteiners" 
    :key="conteiner.id" 
    :conteiner="conteiner" 
    @add-conteiner="addConteiner"
    />
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import RowType from "@/components/table/models/row-type"
import SelectOption from "@/components/ui/my-select/select-option.vue"

@Component({
  components: { SelectOption },
  name: "my-select",
})
export default class MySelect extends Vue {
  сonteiners: RowType[] = [];
  soughtConteinerName = "";
  optionsVisible = false;
  get serchConteiners() {
    return this.сonteiners.filter((c: RowType) => c.name.toUpperCase().includes(this.soughtConteinerName.toUpperCase()))
  }
  addConteiner(conteiner: RowType) {
    this.soughtConteinerName = conteiner.name
    this.$emit('add-conteiner', conteiner);
  }
  
  created() {
    console.log("servers");
    this.сonteiners = this.$mainStore.serverBox.possibleСonteiners;
    console.log(this.сonteiners);
  }
  mounted() {}
}
</script>

<style lang="less" scoped>
.select {
  display: flex;
  flex-direction: column;
  .select-input {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .input {
      color: #fff;
      width: 100%;
      padding: 15px 30px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      border: none;
    }
    .arrow {
      position: absolute;
      margin-right: 20px;
    }
  }
  .optionsBox {
    overflow: auto;
    max-height: 300px;
    background-color: #141431;
    margin-top: 6px;
    border-radius: 10px;
    padding: 15px 0;
  }
}
</style>