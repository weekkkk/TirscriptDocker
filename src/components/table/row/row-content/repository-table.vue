<template>
  <transition name="dropdown">
    <div class="row-content" v-if="showRowContent">
      <repository-row
        @show-add-repository-form="$emit('show-add-repository-form')"
        @remove-repository="removeRepository"
        @add-repository="addRepository"
        @hide-form="$emit('hide-form')"
        v-for="repository in repositoryTable"
        :repository="repository"
        :key="repository.id"
        :addRepositoryFormVisible="addRepositoryFormVisible"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import RepositoryType from "@/components/table/models/repository-type";
import Repository from "@/components/table/row/row-content/repository-row.vue";

@Component({
  components: { Repository },
  name: "repository-table",
})
export default class RepositoryTable extends Vue {
  @Prop(Boolean) readonly showRepositoryTable: boolean;
  @Prop(Array) readonly repositoryTable: RepositoryType[];
  @Prop(Boolean) readonly addRepositoryFormVisible: boolean;
  removeRepository(repositoryId: number) {
    this.$emit("remove-repository", repositoryId);
  }
  addRepository(repository: RepositoryType) {
    this.$emit("add-repository", repository);
  }
}
</script>

<style lang="less" scoped>
.dropdown-enter,
.dropdown-leave-to {
  transform: scaleY(0.5);
  opacity: 0;
}

.dropdown-enter-to,
.dropdown-leave {
  opacity: 1;
  transform: scaleY(1);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.15s ease-out;
  transform-origin: 0 top 0;
}

.row-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 0;
  background-color: #181837;
  border-radius: 0 0 10px 10px;
}
</style>