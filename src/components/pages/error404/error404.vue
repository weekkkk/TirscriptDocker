<template>
  <div class="login__fon">
    <div class="login">
      <div class="login__block">
        <div class="block__title">404</div>
        <div class="block__text">Страница не найдена</div>
        <div class="block__message">
          Кажется что то пошло не так! Страниа, которую вы запрашиваете не
          найдена
        </div>
        <button class="btn-enter" @click="goToHome">На главную</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class ErrorPageComponent extends Vue {
  goToHome() {
    this.$router.push({ name: "landing" });
  }
}
</script>
<style scoped>
.login__fon {
  background: #e5e5e5;
  background-size: cover;
  height: 100vh;
}
.block__title {
  font-weight: 600;
  font-size: 144px;
  /* line-height: 175px; */
  /* margin-top: 20px; */
  margin-bottom: -30px;
  color: #162a47;
}
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.block__text {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #162a47;
  margin-bottom: 25px;
}
.block__message {
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #586174;
  margin-bottom: 30px;
  max-width: 440px;
}
.login__block {
  height: 361px;
  width: 708px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-enter {
  border: 0;
  color: #ffffff;
  font-size: 14px;
  line-height: 17px;
  background: linear-gradient(225.28deg, #00fff0 12.52%, #faff00 82.05%);
  padding: 10px 32px;
}
</style>