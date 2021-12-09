<template>
  <div class="select-container" @mouseleave="isDropdown = false">
    <span class="label">
      Образ
    </span>
    <div class="input-container" @click="isDropdown = true">
      <div
        class="placeholder"
        
      >
        <img
          src="@assets/icons/ui-components/select-arrow.svg"
          alt="arrow"
          class="arrow"
        />
        <input
          class="input"
          :value="value"
          @input="$emit('input', $event.target.value)"
          :placeholder="placeholder"
          spellcheck="false"
        />
      </div>
    </div>

    <div v-if="isDropdown" class="options">
      <div
        class="option"
        @click="$emit('added-container-id', option.id)"
        v-for="(option, index) in sortedOptions"
        :key="option.id"
        :style="{
          marginBottom: index === sortedOptions.length - 1 ? '0' : '15px',
        }"
        :class="{ 'selected': option.name === value }"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";
import RowType from "@/components/table/models/image-type";

@Component({
  name: "my-select",
})
export default class UiSelect extends Vue {
  @Prop(String) placeholder: string;
  @Prop(Array) options!: RowType[];
  @Prop(String) value!: string;
  isDropdown: boolean = false;
  get sortedOptions() {
    return this.options.filter((element) =>
      element.name.toLowerCase().startsWith(this.value.toLowerCase())
    );
  }
}
</script>

<style scoped lang="less">
.select-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  .label {
    font-size: 13px;
    color: #777897;
    font-weight: 700;
    .error-label {
      color: #b73542;
    }
  }
  .input-container {
    position: relative;
    width: 100%;
    .placeholder {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .input {
        width: 100%;
        background: #141431;
        border: 2px solid rgba(88, 110, 185, 0.4);
        border-radius: 10px;
        padding: 15px 22px;
        display: flex;
        align-items: center;
        outline: none;
        margin: 5px 0;
        color: white;
        font-size: 16px;
        &::placeholder {
          color: #777897;
          font-size: 16px;
        }
      }
      &::after {
        position: absolute;
        left: 2px;
        top: 17px;
        content: attr(data-placeholder);
        pointer-events: none;
        color: white;
        opacity: 0.5;
        font-size: 16px;
        padding-left: 22px;
      }
    }
    .arrow {
      position: absolute;
      margin-right: 22px;
    }
  }
  .options {
    max-height: 180px;
    width: 100%;
    overflow-y: scroll;
    padding: 21.5px 22px 22px 21px;
    background: #141431;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      height: 200px;
      background-color: rgba(255, 255, 255, 0);
    }
    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      border-top: 12px solid rgba(255, 255, 255, 0);
      border-bottom: 10px solid rgba(255, 255, 255, 0);
      border-right: 11.5px solid rgba(255, 255, 255, 0);
      width: 5px;
      background-clip: padding-box;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: #08081f;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #1d1e42;
    }
    .option {
      color: white;
      font-size: 16px;
      color: white;
      cursor: pointer;
      width: 100%;
      padding: 8px 0;
      &:hover {
        background-color: #1D1E42;
        color: #3E71BB;
        padding: 8px 17px;
        border-radius: 6px;
      }
    }
    .selected {
      padding: 10px 0 7.5px 17px;
      min-height: 34px;
      border-radius: 6px;
      background: #1d1e42;
      font-size: 16px;
      color: #3e71bb;
      line-height: 19px;
    }
  }
}
</style>