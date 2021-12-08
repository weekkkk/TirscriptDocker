<template>
  <div class="select" @click="optionsVisible = true">
    <div class="select-input">
      <img src="@/assets/icons/ui-components/select-arrow.svg" class="arrow" />
      <input type="text" class="input" v-model="soughtContainerName" />
    </div>
    <div class="optionsBox" v-if="optionsVisible">
      <select-option
        v-for="container in serchContainers"
        :key="container.id"
        :container="container"
        @add-container="addContainer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ImageType from "@/components/table/models/image-type";
import SelectOption from "@/components/ui/my-select/select-option.vue";

@Component({
  components: { SelectOption },
  name: "my-select",
})
export default class MySelect extends Vue {
  сontainers: ImageType[] = [];
  soughtContainerName = "";
  optionsVisible = false;
  get serchContainers() {
    return this.сontainers.filter((c: ImageType) =>
      c.name.toUpperCase().includes(this.soughtContainerName.toUpperCase())
    );
  }
  addContainer(container: ImageType) {
    this.soughtContainerName = container.name;
    this.$emit("add-container", container);
  }
  created() {
    this.сontainers = this.$mainStore.serverBox.possibleСontainers;
  }
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