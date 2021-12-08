<template>
  <div class="form-box">
    <div class="form">
      <input
        type="text"
        placeholder="Введите версию"
        class="input"
        v-model="repository.version"
      />
      <my-button class="download-button">Загрузка архива</my-button>
    </div>
    <div class="icons">
      <div class="icon" @click="$emit('hide-form')">
        <img src="@/assets/icons/ui-components/cancel-mark.svg" />
      </div>
      <div class="icon" @click="$emit('add-repository', repository)">
        <img src="@/assets/icons/ui-components/add-mark.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import RepositoryType from "@/components/table/models/repository-type";
import cancelButton from "@/components/ui/cancel-button.vue";
import myButton from "@/components/ui/my-button.vue";

@Component({
  components: { cancelButton, myButton },
  name: "add-image-form",
})
export default class AddRepositoryForm extends Vue {
  repository: RepositoryType = { id: 0, version: "", status: false };
}
</script>

<style lang="less" scoped>
.form-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141431;
  padding: 20px 20px 20px 30px;
  border-radius: 10px;
  .form {
    display: flex;
    align-items: center;
  }
  .title {
    display: inline-block;
    font-size: 24px;
    margin-bottom: 50px;
    z-index: 1;
  }
  .input {
    width: 396px;
    min-width: 10px;
    color: #fff;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid rgba(88, 110, 185, 0.4);
  }
  .download-button {
    padding: 11px 33px;
    margin-left: 12px;
  }
  .icons {
    display: flex;
    align-items: center;
    .icon {
      margin-left: 6px;
      cursor: pointer;
      &:hover {
        filter: brightness(115%);
      }
      &:active {
        filter: brightness(130%);
      }
    }
  }
  @media (max-width: 830px) {
    flex-direction: column;
    align-items: flex-end;
    .form {
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      .input {
        width: 100%;
        margin-bottom: 15px;
      }
      .download-button {
        margin: 0;
      }
    }
    .icons {
      margin-top: 15px;
      width: 100%;
      justify-content: start;
      .icon {
        margin: 0;
        margin-right: 6px;
      }
    }
  }
  @media (max-width: 435px) {
    .input {
      padding: 10px 15px;
      font-size: 12px;
    }
    .download-button {
      width: 100%;
      padding: 10px 15px;
      font-size: 12px;
    }
  }
}
</style>