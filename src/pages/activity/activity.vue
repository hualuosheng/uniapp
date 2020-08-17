<template>
  <view class="content">
    <view
      class="activity-list border-b"
      @click="open"
      v-for="(item, index) in acList"
      :key="index"
    >
      <view class="activity-list-left">
                  <view
          class="activity-list-Warning"
          :style="{
            backgroundColor: [
              item.status == 'NOTBEGINNING'
                ? 'rgb(0,0,0,0.25)'
                : '' || item.status == 'FINISHED'
                ? 'rgb(236,103,106,0.85)'
                : '' || item.status == 'UNDERWAY'
                ? 'rgb(0,128,0,0.65)'
                : '',
            ],
          }"
        >
          {{ item.status | statusCalc(item.status) }}
        </view>
        <image
          src="../../static/img/nomal.jpg"
          class="activity-list-img"
        ></image>
      </view>
      <view class="activity-list-right">
        <view class="activity-list-title" v-if="item.activityLesson.name">{{
          item.activityLesson.name
        }}</view>
        <m-address
          :address="
            item.activityLesson.endProvince +
              item.activityLesson.endCity +
              item.activityLesson.endDistrict +
              item.activityLesson.endAddress
          "
        ></m-address>
        <m-date :dateStr="item.activityDate"></m-date>
      </view>
    </view>
    <uni-popup
      ref="popup"
      type="bottom"
      :animation="true"
      catchtouchmove="true"
    >
      <m-card :list="list" :column="4" @itemLink="itemLink"></m-card>
      <view class="popup-close border-t" @click="hide">
        取消
      </view>
    </uni-popup>
  </view>
</template>
<script>
import mDate from "@/components/m-date.vue";
import mAddress from "@/components/m-address.vue";
import mCard from "@/components/m-card.vue";

import uniPopup from "@/components/uni-popup/uni-popup.vue";
// import uniPopupMessage from "@/components/uni-popup/uni-popup-message.vue";
// import uniPopupDialog from "@/components/uni-popup/uni-popup-dialog.vue";

export default {
  components: {
    mDate,
    mAddress,
    mCard,
    uniPopup,
  },
  data() {
    return {
      acList: [],
      token: String,
      id: Number,
      list: [
        {
          id: 0,
          title: "活动信息",
          imgSrc: "/static/img/mian_item1.png",
        },
        {
          id: 1,
          title: "导航",
          imgSrc: "/static/img/mian_item2.png",
        },
        {
          id: 2,
          title: "报名审核",
          imgSrc: "/static/img/mian_item5.png",
        },
        {
          id: 3,
          title: "专属二维码",
          imgSrc: "/static/img/mian_item8.png",
        },
        {
          id: 4,
          title: "签到",
          imgSrc: "/static/img/mian_item4.png",
        },
        {
          id: 5,
          title: "签退",
          imgSrc: "/static/img/mian_item3.png",
        },
        {
          id: 6,
          title: "活动总结",
          imgSrc: "/static/img/mian_item6.png",
        },
        {
          id: 7,
          title: "装备发放",
          imgSrc: "/static/img/mian_item10.png",
        },
      ],
    };
  },
  async onLoad() {
    this.token = uni.getStorageSync("token");
    this.id = uni.getStorageSync("id");
    let that = this;
    let { data: result } = await this.$http.activityList({
      limit: {
        pn: 1,
        ps: 10,
      },
      manageUserId: this.id,
    });
    this.acList = result.list;
  },
  methods: {
    open() {
      this.$refs.popup.open();
    },
    hide() {
      this.$refs.popup.close();
    },
    itemLink(msg) {
      if (msg == "专属二维码") {
        uni.navigateTo({
          url: "/pagesA/canvas/index",
        });
        this.$refs.popup.close();
      }
    },
  },
  filters: {
    statusCalc(status) {
      switch (status) {
        case "NOTBEGINNING":
          return "未开始";
          break;
        case "UNDERWAY":
          return "进行中";
          break;
        case "FINISHED":
          return "已结束";
          break;
      }
    },
  },
  computed: {
    // statusSty(status) {
    //   switch (status) {
    //     case "NOTBEGINNING":
    //       return "未开始";
    //       break;
    //     case "UNDERWAY":
    //       return "进行中";
    //       break;
    //     case "FINISHED":
    //       return "rgb(0,0,0,0.25)";
    //       brea;
    //   }
    // },
  },
  async onReachBottom() {
    let pn = 1;
    pn++;
    let { data: result } = await this.$http.activityList({
      limit: {
        pn: 1,
        ps: pn,
      },
      manageUserId: this.id,
    });
    this.acList = this.acList.concat(result.list);
  },
  beforeDestroy() {},
};
</script>
<style scoped>
.activity-list {
  box-sizing: border-box;
  height: 288rpx;
  padding: 24rpx 32rpx 30rpx;
  display: flex;
}

.activity-list-left {
  position: relative;
}

.activity-list-Warning {
  width: 126rpx;
  height: 46rpx;
  background-color: #ec676a;
  color: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  font-size: 18rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 26rpx;
}

.activity-list-img {
  width: 292rpx;
  height: 232rpx;
}

.activity-list-right {
  padding-left: 42rpx;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.activity-list-title {
  font-size: 36rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  /* height: 86rpx; */
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.popup-close {
  background-color: #f4f4f4;
  height: 134rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.border-t::before {
  border-color: #cccccc;
}
</style>
