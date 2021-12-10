<template>
  <div class="form-box">
    <div class="form">
      <input
        type="text"
        placeholder="Введите версию"
        class="input"
        v-model="repository.version"
        :class="{'error-input': isError}"
      />
      <my-button class="download-button">Загрузка архива</my-button>
    </div>
    <div class="icons">
      <cancel-mark-btn class="icon" @click.native="$emit('hide-form')" />
      <add-mark-btn class="icon" @click.native="repository.version ? $emit('add-repository', repository) : isError = true" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import RepositoryType from '@/components/table/models/repository-type';
import MyButton from '@/components/ui/buttons/my-button.vue';
import UiInput from '@/components/ui/ui-input.vue';

@Component({
  components: { MyButton, UiInput },
  name: 'add-image-form',
})
export default class AddRepositoryForm extends Vue {
  isError = false;
  repository: RepositoryType = { id: 0, version: '', status: false };
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
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #586eb966;
  }
  .error-input {
    border-color: #ff4c5d66;
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