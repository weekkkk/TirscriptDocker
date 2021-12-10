<template>
  <div class="form">
    <div class="title">Настройки</div>
    <div class="subtitle">Билд машина</div>
    <ui-input :name="'URL'" type="text" :placeholder="'Введите'" class="input" />
    <div class="subtitle">Билд машина</div>
    <ui-input :name="'Логин'" type="text" :placeholder="'Введите логин'" class="input" />
    <ui-input :name="'Пароль'" type="text" :placeholder="'Введите пароль'" class="input" />
    <ui-input :name="'URL'" type="text" :placeholder="'Введите'" class="input" />
    <div class="buttons">
      <cancel-button class="cancel" @click.native="$emit('hide-dialog')"
        >Отмена</cancel-button
      >
      <add-button class="save" @click.native="$emit('show-add-repository-form')"
        >Сохранить</add-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CancelButton from '@/components/ui/buttons/cancel-button.vue';
import AddButton from '@/components/ui/buttons/add-button.vue';
import UiInput from '@/components/ui/ui-input.vue';

@Component({
  components: { CancelButton, AddButton, UiInput },
  name: 'settings-form',
})
export default class SettingsForm extends Vue {}
</script>

<style lang="less" scoped>
.title {
  display: inline-block;
  font-size: 24px;
  z-index: 1;
}
.subtitle {
  font-size: 18px;
  border-bottom: 2px solid #323361;
  padding-bottom: 6px;
  margin-top: 30px;
}
.input {
  margin-top: 20px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  .save {
    margin-left: 12px;
  }
}
@media (max-width: 435px) {
  .title {
    font-size: 18px;
    margin-right: 30px;
  }
  .subtitle {
    font-size: 14px;
    margin-top: 30px;
  }
  .input {
    font-size: 12px;
    margin-top: 20px;
  }
  .buttons {
    flex-direction: column-reverse;
    .cancel {
      font-size: 12px;
    }
    .save {
      font-size: 12px;
      margin: 0;
      margin-bottom: 10px;
    }
  }
}
</style>