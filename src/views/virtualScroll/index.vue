<template>
  <div class="test">
    <div class="virtual">
      <div class="scroll-wrapper" @scroll="handleScroll">
        <div class="content">
          <!-- 占位符 所有项的高度 -->
          <div class="virtual-height" :style="virtualHeight"></div>
          <!-- 虚拟列表 最多渲染10条 -->
          <div class="virtual-list" :style="virtualListStyle" ref="listRef">
            <!-- item -->
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
/*
  1. 特点: 所有list数据并不是全部渲染,而是根据滚动的距离,动态计算子列表.
  2. 重点: 维护好可视区域的子列表,只展示子列表. 减少浏览器处理DOM的数量,优化性能!
  3. 这里的虚拟列表处理方案,是针对item项高度固定的情况
*/
export default {
  name: "Test",
  data() {
    return {
      list: [],
      itemHeight: 163,
      // 截取的 开始下标
      start: 0,
      // 截取的 结束下标
      end: 10,
      // 子列表 最大数量
      max: 10,
      // 列表垂直平移量
      translateY: 10,
    };
  },
  computed: {
    // 占位div 高度 = totalItemHeight
    virtualHeight() {
      return {
        height: this.list.length * this.itemHeight + "px",
      };
    },
    // 虚拟列表垂直 偏移量
    virtualListStyle() {
      return {
        transform: `translateY(${this.translateY + "px"})`,
      };
    },
    visibleData() {
      return this.list.slice(this.start, this.end);
    },
  },
  watch: {},
  created() {
    this.getList();
  },
  mounted() {},
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
      // console.log("yangs=> list", list);
      this.list = list;
      this.getItemHeight();
    },

    // 计算item高度
    getItemHeight() {
      // 确保列表渲染完成后,再去获取dom高度,放到异步队列后面
      this.$nextTick(() => {
        const listRef = this.$refs.listRef;
        const child = listRef?.children[0];
        const height = child?.getBoundingClientRect().height ?? 163;
        this.itemHeight = height;

        // console.log("yangs=> ", child,height);
      });
    },
    // 处理滚动
    handleScroll(event) {
      // 1. 获取相关参数
      const target = event.target;
      // * scrollTop: 上卷的距离 也就是 滚动的距离
      // scrollHeight = scrollTop + offsetHeight
      const scrollTop = target.scrollTop;
      // console.log("yangs=> ", scrollTop);
      const listLength = this.list.length;

      // 2. 根据滚动距离, 动态计算start end, 维护好子列表

      // 已经滚动过去的item数量
      const scrolledCount = Math.floor(scrollTop / this.itemHeight);

      const start = scrolledCount >= 0 ? scrolledCount : 0;
      const end = Math.min(start + this.max, listLength);

      this.start = start;
      this.end = end;

      // 3. 动态计算子列表的垂直平移距离  translateY,保持子列表在可视区!
      this.translateY = scrolledCount * this.itemHeight;

      // console.log("yangs=> ", this.virtualListStyle);

      console.log(
        "yangs=> scrolledCount:%s,scrollTop:%s,start:%s,end:%s,translateY:%s,",
        scrolledCount,
        scrollTop,
        this.start,
        this.end,
        this.translateY
      );
    },
  },
};
</script>
<style scoped lang="scss">
.test {
  width: 100%;
  height: 100%;
  // padding: 8px 0 8px;
  background-color: #f1f1f1;
  .virtual {
    height: 100%;
    // padding: 8px 0 8px;

    .scroll-wrapper {
      height: 100%;
      overflow: scroll;
    }
    .content {
      position: relative;
      .virtual-list {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }
    }
  }
}

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

  &:last-child {
    padding-bottom: 20px;
  }

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
</style>
