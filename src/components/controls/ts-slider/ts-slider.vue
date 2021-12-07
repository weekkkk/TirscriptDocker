<template>
  <div class="ts-slider">
    <div class="wrapper">
      <div
        class="slider-container"
        ref="sliderContainer"
        :class="{ shadow: isShadowItems }"
      >
        <div
          class="slider-track"
          ref="sliderTrack"
          :style="{
            transform: `translateX(${position - marginSides}px)`,
          }"
          :class="{ grabbing: isActiveCursor }"
          v-touch:swipe.left="swipeHandlerLeft"
          v-touch:swipe.right="swipeHandlerRight"
        >
          <div
            class="slider-item"
            v-for="(slide, index) in slideList"
            :key="index"
            :style="{
              minWidth: itemWidth + 'px',
              padding: `0 ${marginSides}px`,
            }"
          >
            <slot :data="slide" />
          </div>
        </div>
      </div>
      <button
        class="btn-prev"
        :disabled="btnPrevDisabled"
        @click="onClickPrev"
        :style="getStylePrevBtn"
        v-show="!btnPrevDisabled"
      ></button>
      <button
        class="btn-next"
        :disabled="btnNextDisabled"
        @click="onClickNext"
        :style="getStyleNextBtn"
        v-show="!btnNextDisabled"
      ></button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "ts-slider",
})
export default class TsSliderComponent extends Vue {
  @Prop({ default: 3 }) slideToShow: number;
  @Prop({ default: 3 }) slideToScroll: number;
  @Prop({ default: 20 }) marginSides: number;
  @Prop({ default: 4 }) borderButtons: number;
  @Prop({ default: 48 }) sizeButtons: number;
  @Prop({ default: false }) isShadowItems: boolean;
  @Prop({ default: () => Array<any>() }) slideList: Array<any>;
  position: number = 0;
  itemWidth: number = 0;
  container: HTMLElement = null;
  track: HTMLElement = null;
  isActiveCursor: boolean = false;
  created() {
    window.addEventListener("resize", this.getSizesContainers);
  }
  mounted() {
    this.getSizesContainers();
  }

  swipeHandlerLeft(direction, event) {
    this.onClickNext();
  }

  swipeHandlerRight() {
    this.onClickPrev();
  }

  getSizesContainers() {
    (this.$refs.sliderContainer as HTMLElement).clientWidth - this.marginSides;
    this.container = this.$refs.sliderContainer as HTMLElement;
    this.track = this.$refs.sliderTrack as HTMLElement;
    this.getItemWidth();
  }

  onClickPrev() {
    const itemsLeft = Math.abs(this.position) / this.itemWidth;
    this.position +=
      itemsLeft >= this.slideToScroll
        ? this.movePosition
        : itemsLeft * this.itemWidth;
  }
  onClickNext() {
    const itemsLeft =
      this.itemsCount -
      (Math.abs(this.position) + this.slideToShow * this.itemWidth) /
        this.itemWidth;
    this.position -=
      itemsLeft >= this.slideToScroll
        ? this.movePosition
        : itemsLeft * this.itemWidth;
  }
  getItemWidth() {
    if (this.isInitSlider) {
      let containerWidth = this.isShadowItems
        ? this.container.clientWidth - 40
        : this.container.clientWidth;
      this.itemWidth =
        containerWidth / this.slideToShow +
        (this.marginSides / this.slideToShow) * 2;
    }
  }
  get isInitSlider(): boolean {
    if (
      !!this.container &&
      this.container.clientWidth &&
      !!this.track &&
      this.track.clientWidth
    )
      return true;
    return false;
  }
  get btnPrevDisabled(): boolean {
    return this.position === 0;
  }
  get btnNextDisabled(): boolean {
    return (
      this.position - 1 <=
      Math.round(-(this.itemsCount - this.slideToShow) * this.itemWidth)
    );
  }
  get itemsCount(): number {
    return this.slideList.length;
  }
  get movePosition(): number {
    return this.slideToScroll * this.itemWidth;
  }
  get styleBtns(): object {
    let styleBtn = {
      height: `${this.sizeButtons}px`,
      width: `${this.sizeButtons}px`,
      border: `${this.borderButtons}px solid #fff`,
      top: `calc(50% - ${(this.sizeButtons + this.borderButtons) / 2}px)`,
    };
    return styleBtn;
  }
  get getStylePrevBtn(): object {
    let stylePrev = {
      left: `${-this.sizeButtons / 2}px`,
    };
    return Object.assign(stylePrev, this.styleBtns);
  }
  get getStyleNextBtn(): object {
    let styleNext = {
      right: `${-this.sizeButtons / 2}px`,
    };
    return Object.assign(styleNext, this.styleBtns);
  }
  beforeDestroy() {
    window.removeEventListener("resize", this.getSizesContainers);
  }
}
</script>

<style lang="less">
.slider-title {
  font-size: 20px;
}
.wrapper {
  width: 100%;
  position: relative;
  .slider-container {
    overflow: hidden;
    &.shadow {
      padding: 20px;
      margin: -20px;
    }
    .slider-track {
      display: flex;
      transition: 0.2s;
      user-select: none;
      -webkit-user-select: none;
      align-items: stretch;
      .slider-item {
        min-width: 200px;
        font-size: 24px;
        .content-slide {
          color: #fff;
          background-color: #999;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .btn-prev,
  .btn-next {
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    background-color: #525266;
    background-image: url("./img/icon-arrow.svg");
    background-repeat: no-repeat;
    background-position: center center;
  }
  .btn-next {
    right: 0;
  }
  .btn-prev {
    transform: rotate(-180deg);
  }
}
</style>