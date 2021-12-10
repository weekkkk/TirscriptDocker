<template>
  <transition name="dropdown">
    <div class="content-container" v-if="contentVisible">
      <div class="data-box">
        <div class="data-first">
          <div class="value">0.06%</div>
          <div class="caption">Cpu usage</div>
        </div>
        <div class="data">
          <div class="value">51.4 MB</div>
          <div class="caption">Memory usage</div>
        </div>
      </div>
      <div class="data-box">
        <div class="data">
          <div class="value">0 B / 0 B</div>
          <div class="caption">Disk read/write</div>
        </div>
        <div class="data-last">
          <div class="value">1.2 kB / 0 B</div>
          <div class="caption">Network I/O</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'server-container-content',
})
export default class ServerContainerContent extends Vue {
  @Prop(Boolean) readonly contentVisible: boolean;
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

.content-container {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: #181837;
  border-radius: 0 0 10px 10px;
  .data-box {
    display: flex;
    width: 100%;
    .data-first {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 15px;
      width: 100%;
      height: 100%;
      .value {
        font-size: 18x;
      }
      .caption {
        font-size: 13px;
        font-weight: 500;
        color: #777897;
      }
    }
    .data-last {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 15px;
      border-left: 1px solid #323361;
      width: 100%;
      height: 100%;
      .value {
        font-size: 18x;
      }
      .caption {
        font-size: 13px;
        font-weight: 500;
        color: #777897;
      }
    }
    .data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-left: 1px solid #323361;
      padding: 0 15px;
      width: 100%;
      height: 100%;
      .value {
        font-size: 18x;
      }
      .caption {
        font-size: 13px;
        font-weight: 500;
        color: #777897;
      }
    }
  }

  @media (max-width: 600px) {
    .data-box {
      flex-direction: column;
      .data {
        .value {
          font-size: 12px;
        }
        .caption {
          font-size: 10px;
        }
      }
      .data-first {
        border-left: 1px solid #323361;
        padding-left: 15px;
        margin-bottom: 10px;
        .value {
          font-size: 12px;
        }
        .caption {
          font-size: 10px;
        }
      }
      .data-last {
        margin-top: 10px;
        .value {
          font-size: 12px;
        }
        .caption {
          font-size: 10px;
        }
      }
    }
  }
}
</style>