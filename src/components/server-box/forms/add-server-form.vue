<template>
  <div class="form">
    <div class="title">Добавление сервера</div>
    <ui-input
      :name="'Название'"
      type="text"
      placeholder="Название сервера"
      class="input"
      v-model="container.name"
    />
    <ui-input :name="'URL'" type="text" placeholder="Url" class="input" />
    <div class="buttons">
      <cancel-button 
        class="cancel" 
        @click.native="$emit('hide-dialog')"
      >
        Отмена
      </cancel-button>
      <add-button 
        class="save" 
        @click.native="$emit('add-server', container)"
      >
        Сохранить
      </add-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ServerType from '@/components/server-box/models/server-type';
import CancelButton from '@/components/ui/buttons/cancel-button.vue';
import AddButton from '@/components/ui/buttons/add-button.vue';
import UiInput from '@/components/ui/ui-input.vue';

@Component({
  components: { CancelButton, AddButton, UiInput },
  name: 'add-image-from',
})
export default class AddImageForm extends Vue {
  container: ServerType = { id: 0, name: '', containers: [] };
  constructor() {
    super();
  }
  created() {
    console.log('landing');
  }
  mounted() {}
}
</script>

<style lang="less" scoped>
.title {
  display: inline-block;
  font-size: 24px;
  margin-bottom: 50px;
  z-index: 1;
}
.input {
  margin-bottom: 15px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  .save {
    margin-left: 12px;
  }
}
@media (max-width: 435px) {
  .title {
    font-size: 18px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
  .input {
    font-size: 12px;
    margin-bottom: 20px;
  }
  .buttons {
    margin-top: 25px;
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