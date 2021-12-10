<template>
  <div>
    <div class="form" v-if="addRepositoryFormVisible && !repository.status">
      <add-repository-form
        @hide-form="$emit('hide-form')"
        @add-repository="addRepository"
      />
    </div>
    <!-- <loading-row-content-item :version="repository.version" /> -->
    <div class="repository">
      <div class="info-box">
        <div class="repository-name">{{ repository.version }}</div>
        <div class="repository-status-true" v-if="repository.status">
          в репозитории
        </div>
        <ui-add-to-repository-btn
          class="repository-status-false"
          @click.native="$emit('show-add-repository-form')"
          v-if="!repository.status"
        />
      </div>
      <div class="repository-icons">
        <ui-unload-btn class="icon" />
        <ui-trash-btn
          @click.native="$emit('remove-repository', repository.id)"
          class="icon"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import RepositoryType from '@/components/table/models/repository-type';

@Component({
  name: 'repository-row',
})
export default class RepositoryRow extends Vue {
  @Prop(Object) readonly repository: RepositoryType;
  @Prop(Boolean) readonly addRepositoryFormVisible: boolean;

  addRepository(repository: RepositoryType) {
    this.$emit('add-repository', repository);
  }
}
</script>

<style lang="less" scoped>
.form {
  padding: 12px 20px 12px 40px;
  @media (max-width: 435px) {
    padding: 6px 10px 6px 15px;
  }
}
.repository {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 12px 40px;
  .info-box {
    display: flex;
    // align-items: center;
    .repository-name {
      max-width: 25vw;
      min-width: 25vw;
      word-wrap: break-word;
      padding-right: 20px;
    }
    .repository-status-true {
      width: 100%;
      font-size: 15px;
      color: #25ae88;
    }
    .repository-status-false {
      width: 100%;
      font-size: 15px;
      color: #3e71bb;
      text-decoration-line: underline;
      cursor: pointer;
      &:hover {
        text-decoration-line: none;
      }
      &:active {
        color: #4060cf;
        text-decoration-line: underline;
      }
    }
  }

  .repository-icons {
    display: flex;
    .icon {
      margin-left: 10px;
    }
  }
  @media (max-width: 600px) {
    .info-box {
      flex-direction: column;
    }
  }
  @media (max-width: 435px) {
    padding: 6px 10px 6px 15px;
    .info-box {
      .repository-name {
        font-size: 10px;
      }
      .repository-status-true {
        font-size: 10px;
      }
      .repository-status-false {
        font-size: 10px;
      }
    }
  }
}
</style>