<template>
  <div class="virtualScroll">
    <!-- 虚拟滚动样式问题 -->
    <div class="vir-scroll">
      <div class="scroll-Y" @scroll="scroll">
        <!-- 滚动的内容 -->
        <div class="parentDom">
          <div :style="{ height: screenHeight + 'px' }"></div>
          <div class="positionRelative" :style="{ transform: getTransform }">
            <!-- 虚拟滚动列表 -->
            <div
              class="limit-item"
              v-for="item in visibleData"
              :key="item.index"
              :data-index="item.index"
            >
              <div class="limit-item-bg">
                <div
                  class="limit-id"
                  :class="{ 'limit-id-green': Number(item.index) % 2 === 0 }"
                >
                  {{ item.index }}
                </div>
                <div class="limit-info">
                  <div class="limit-info-line">
                    <div class="limit-area col1">
                      <span class="limit-bold-title">地区：</span>
                      <span class="limit-text">{{ item.areaName }}</span>
                    </div>
                    <div class="limit-site col2 elips1">
                      <span class="limit-bold-title">变电站：</span>
                      <span class="limit-site">{{ item.stationName }}</span>
                    </div>
                  </div>
                  <div class="limit-info-line">
                    <div class="limit-area col1">
                      <span class="limit-bold-title">电压等级：</span>
                      <span class="limit-grade">{{ item.voltageName }}</span>
                    </div>
                    <div class="limit-site col2 elips1">
                      <span class="limit-bold-title">设备名称：</span>
                      <span class="limit-device">{{ item.deviceName }}</span>
                    </div>
                  </div>
                </div>
                <div class="limit-nums">
                  <div class="num-item">
                    <span class="limit-num">{{ item.realValue }}</span>
                    <div class="limit-bold-title">额定值</div>
                  </div>
                  <div class="num-item">
                    <span class="limit-num">{{ item.highRate }}</span>
                    <div class="limit-bold-title">最大负荷率</div>
                  </div>
                  <div class="num-item">
                    <span class="limit-num">{{
                      item.overloadTimeInterval
                    }}</span>
                    <div class="limit-bold-title">越限时长</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from "../../api";

export default {
  name: "VirtualScroll",
  data() {
    return {
      list: [],
      flag: false,
      /** 单行高度 */
      itemHeight: 143,
      /** 偏移高度 */
      startOffset: 0,
      /** 起始显示数据 */
      start: 0,
      /** 结束显示数据 */
      end: 10,
      /** 预留的数量，避免白屏 */
      remain: 10,
      /** 控制节流 */
      throttle: true,
    };
  },
  computed: {
    /** 根据每条数据的高度获取总列表高度 */
    screenHeight() {
      return this.list.length * this.itemHeight;
    },
    /** 前面预留 */
    prevCount() {
      return 8;
    },
    /** 后面预留 */
    nextCount() {
      return 25;
    },
    /** 每次截取虚拟列表的位置 */
    getTransform() {
      return `translate(0,${this.startOffset}px)`;
    },
    /** 虚拟数据 */
    visibleData() {
      return this.list.slice(this.start, Math.min(this.end, this.list.length));
    },
  },
  watch: {},
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const [err, data] = await getData();
      if (err) {
        console.error("getList: err", err);
        return;
      }
      const list = data.data;
      list.forEach((item, index) => {
        // 不满2位前面补0
        item.index = (index + 1).toString().padStart(2, "0");
      });
      console.log('yangs=> list',list);
      this.list = list;
    },

    /** 列表滚动，暂时不节流，因为滚动快触发次数就少，容易导致没有及时更新数组导致白屏 */
    scroll(e) {
      this.scrollThrottle(e.target.scrollTop);
    },

    /** 滚动函数 */
    scrollThrottle(scrollTop) {
      scrollTop -= 230;
      const topCount = Math.floor(scrollTop / this.itemHeight) - this.prevCount;
      // 此时的开始索引
      this.start = topCount >= 0 ? topCount : 0;
      // 此时的结束索引
      this.end = this.start + this.nextCount;
      // 此时的偏移量
      this.startOffset = this.start * this.itemHeight;
      // console.log(
      //   "scrollTop",
      //   scrollTop,
      //   "itemHeight",
      //   this.itemHeight,
      //   "Math.floor(scrollTop / this.itemHeight)",
      //   Math.floor(scrollTop / this.itemHeight),
      //   "start",
      //   this.start,
      //   "end",
      //   this.end,
      //   this.startOffset
      // );
    },
  },
};
</script>
<style scoped lang="scss">
.vir-scroll {
  // 脱离文档流避免回流
  position: fixed;
  left: 0;
  // top: 150px;
  width: 100%;
  height: calc(100% - 16px);
  z-index: 9;

  .scroll-Y {
    width: 100%;
    height: 100%;
    // height: 467px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;

    .parentDom {
      position: relative;

      .positionRelative {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 5px;
        padding-bottom: 12.5px;

        .limit-item {
          height: 143px;
          background-color: #ffffff;
          font-size: 12px;
          padding: 10px 15px 10px 15px;

          // &:nth-child(2) {
          //   padding-top: 15px;
          //   height: 148px;
          //   border-radius: 5px 5px 0 0;
          // }

          // &:last-child {
          //   height: 158px;
          //   border-bottom-left-radius: 5px;
          //   border-bottom-right-radius: 5px;
          // }

          .limit-item-bg {
            background-color: #edf5ff;
            padding: 20px 16px 16px;
            position: relative;
          }

          .limit-id {
            position: absolute;
            left: 0;
            top: 0;
            padding: 3px 11px 4px 8px;
            color: #fff;
            background-image: linear-gradient(
              90deg,
              #417fd1 0%,
              rgba(65, 127, 209, 0.98) 100%
            );
            border-radius: 5px 0px 10px 0px;
          }

          .limit-id-green {
            background-image: linear-gradient(
              90deg,
              #80c710 0%,
              rgba(158, 213, 70, 0.8) 100%
            );
          }

          .limit-info {
            &-line {
              display: flex;
              margin-bottom: 9px;
              color: #333;

              .col1,
              .col2 {
                flex: 1;
              }

              .limit-bold-title {
                display: inline-block;
                min-width: 70px;
                text-align: right;
                color: #3e5b87;
              }
            }
          }

          .limit-nums {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            border-radius: 5px;
            padding: 8px 0;

            .num-item {
              flex: 1;
              position: relative;
              text-align: center;
              padding: 0 12px;

              &::after {
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0, -50%);
                width: 0;
                height: 70%;
                border-left: 1px dashed #b9cde3;
              }

              &:last-child {
                &::after {
                  display: none;
                }
              }

              .limit-num {
                display: inline-block;
                font-weight: 700;
                margin-bottom: 2px;
              }

              .limit-bold-title {
                color: #3e5b87;
              }
            }
          }
        }
      }
    }
  }
}
</style>
