<template>
  <div class="pages">
    <div class="page" @click="showPage(currentPage - 1)">
      <div class="left-arrow">
        <img src="@/assets/icons/ui-components/select-arrow.svg">
      </div>
    </div>
    <div class="page-box" v-for="page in countPages" :key="page" @click="showPage(page)">
      <div 
        class="page" 
        v-if="page == currentPage + 2 && countPages != currentPage + 2 || currentPage + 1 == countPages && page == currentPage - 1 && countPages > 3 || currentPage == countPages && page == currentPage - 2 && countPages > 3"
      >
      ...
      </div>
      <div
        class="page"
        :class="{ 'current-page': page === currentPage }"
        v-if="page == currentPage || page == currentPage + 1 || page == countPages || page == countPages - 1 && currentPage == countPages || currentPage == countPages && page == 1 || currentPage + 1 == countPages && page == 1"
      >
        {{ page }}
      </div>
    </div>
    <div class="page" @click="showPage(currentPage + 1)">
      <div class="right-arrow">
        <img src="@/assets/icons/ui-components/select-arrow.svg">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "pagination",
})
export default class Pagination extends Vue {
  @Prop(Number) countPages: number;
  @Prop(Number) currentPage: number;
  showPage(page: number) {
    page > 0 && page <= this.countPages ? this.$emit("show-page", page) : {} //Проверяет, находится ли номер страницы на которую хочет перейти пользователь в допустимых пределах
  }
}
</script>

<style lang="less" scoped>
.pages {
  display: inline-flex;
  align-items: center;
  .arrow {
    background-color: grey;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1D1E42;
    border-radius: 10px;
    margin-left: 5px;
    width: 41px;
    height: 41px;
    transition: 0.1s;
    cursor: pointer;
    @media (max-width: 350px) {
      width: 30px;
      height: 30px;
    }
    &:hover {
      background-color: #272851;
    }
    &:active {
      background-color: #272865;
    }
    .left-arrow {
      transform: rotate(90deg);
    }
    .right-arrow {
      transform: rotate(-90deg);
    }
  }
  .current-page {
    color: #fff;
    background-color: #586EB9;
    border: none;
    &:hover {
      background-color: #586EB9;
    }
  }
}
</style>