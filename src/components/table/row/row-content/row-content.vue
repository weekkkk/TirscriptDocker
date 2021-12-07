<template>
<transition name="dropdown">
  <div class="row-content" v-if="showRowContent">
    <row-content-item 
    @remove-reposytory="removeReposytory"
    @add-reposytory="addReposytory" 
    @hide-form="$emit('hide-form')"
    @show-add-reposytory-form="$emit('show-add-reposytory-form')" 
    v-for="contentItem in rowContent" 
    :contentItem="contentItem" 
    :key="contentItem.id" 
    :addRepositoryFormVisible="addRepositoryFormVisible" 
    />
  </div>
</transition>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import RowContentItemType from "@/components/table/models/row-content-item-type"

@Component({
  name: "row-content",
})
export default class RowContent extends Vue {
  @Prop(Boolean) readonly showRowContent: boolean;
  @Prop(Array) readonly rowContent: RowContentItemType[];
  @Prop(Boolean) readonly addRepositoryFormVisible: boolean;
  removeReposytory(reposytoryId: number) {
    console.log(reposytoryId);
    this.$emit('remove-reposytory', reposytoryId);
  }
  addReposytory(reposytory: RowContentItemType) {
    console.log(reposytory);
    this.$emit('add-reposytory', reposytory);
  }
  constructor() {
    super();
  }
  created() {}
  mounted() {}
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