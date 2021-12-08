<template>
<div class="server-container-box">
  <div 
  class="server-container" :class="{'server-container-content-visible': contentVisible}"
  @click="contentVisible = !contentVisible"
  >
    <div class="arrow">
      <img src="@/assets/icons/ui-components/select-arrow.svg">
    </div>
    <div class="container-title-box">
      <div class="container-name">
        {{container.name}}
      </div>
      <div class="repository-name">
        123456789
      </div>
    </div>
    <div class="container-icons">
      <div class="icon">
        <img src="@/assets/icons/ui-components/play.svg">
      </div>
      <div class="icon">
        <img src="@/assets/icons/ui-components/pause.svg">
      </div>
      <div 
      class="icon"
      @click="$emit('remove-container', container.id)"
      >
        <img src="@/assets/icons/ui-components/remove.svg">
      </div>
    </div>
  </div>
  <server-container-content :contentVisible="contentVisible" />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ServerContainerContent from "@/components/server-box/server-container-content.vue"
import ImageType from "@/components/table/models/image-type"

@Component({
  components: { ServerContainerContent },
  name: "server-container",
})
export default class ServerContainer extends Vue {
  @Prop(Object) readonly container: ImageType;
  
  contentVisible = false;
  constructor() {
    super();
  }
  created() {
    console.log("servers");
  }
  mounted() {}
}
</script>

<style lang="less" scoped>
.server-container-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  cursor: pointer;
  z-index: 1;
  .server-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #141431;
    padding: 20px 20px 20px 30px;
    border-radius: 10px;
    .arrow {
      margin-right: 20px;
      transform: rotate(-90deg);
      width: fit-content;
    }
    .container-title-box {
      display: flex;
      width: 100%;
      .container-name {
        width: 10vw;
        word-wrap: break-word;
        padding-right: 15px;
      }
      .repository-name {
        padding-right: 15px;
        color: #586EB9;
        margin-left: 10px;
        word-wrap: break-word;
      }
    }
    
    .container-icons {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      flex-flow: wrap;
      .icon {
        margin-left: 6px;
        &:hover {
          filter: brightness(115%);
        }
        &:active {
          filter: brightness(130%);
        }
      }
    }
  }
  .server-container-content-visible {
    border-radius: 10px 10px 0 0;
    .arrow {
      transform: none;
    }
  }
  @media (max-width: 1024px) {
    .server-container {
      .container-title-box {
        .container-name {
          width: 30vw;
        }
      }
    }
  }
  @media (max-width: 650px) {
    .server-container {
      .container-title-box {
        flex-direction: column;
        justify-content: flex-start;
        .container-name {
          font-size: 12px;
        }
        .repository-name {
          font-size: 12px;
          margin: 0;
        }
      }
      .icon {
        img {
          height: 20px;
        }
      }
    }
  }
  @media (max-width: 350px) {
    .server-container {
      // flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      .container-title-box {
        .container-name {
          font-size: 12px;
          padding-right: 5px;
        }
        .repository-name {
          font-size: 12px;
          padding-right: 5px;
        }
      }
    }
  }
}
</style>