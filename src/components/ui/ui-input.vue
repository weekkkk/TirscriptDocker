<template>
  <div class="input-container">
    <span class="label"
      >{{ name ? name : 'Название'}}
      <span v-if="isError" class="error-label"> * Неверное значение</span>
    </span>
    <input
      type="text"
      class="input"
      :placeholder="placeholder ? placeholder : ''"
      :class="{ 'error-input': isError }"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit } from 'vue-property-decorator'
@Component({
  name: 'ui-input'
})
export default class UiInput extends Vue {
  @Prop(Boolean) readonly isError!: boolean
  @Prop(String) placeholder: string
  @Prop(String) name: string
  @Prop(String) value!: string
}
</script>

<style lang="less" scoped>
.input-container {
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

  .input {
    width: 100%;
    font-weight: 400;
    margin-top: 5px;
    width: 100%;
    padding: 15px 22px;
    background: #141431;
    border: 2px solid rgba(88, 110, 185, 0.4);
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: white;
    outline: none;
    &::placeholder {
      font-size: 16px;
      line-height: 19px;
      color: #777897;
    }
    &:focus {
      border: 2px solid #586eb9;
    }
  }

  .error-input {
    border: 2px solid rgba(255, 76, 93, 0.4) !important;
  }
}
</style>