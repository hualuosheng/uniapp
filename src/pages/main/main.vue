<template>
  <view class="content">
    <view class="main-head">
      <view class="main-head-meta">
        <view class="main-meta-topBox">
          <view class="main-meta-prom">
            未出行
          </view>
        </view>
        <view class="meta-recent">
          近期活动
        </view>
        <view class="meta-title">
          洛杉矶全真插班+NBA观赛+海岸 星光号体验13日亲子营
        </view>
        <view class="meta-address">
          <m-address :address="'山西省太原市小店区 数码港A座'"></m-address>
        </view>
        <m-date :dateStr="1553270400000"></m-date>
      </view>
    </view>
    <m-card :list="list"></m-card>
  </view>
</template>

<script>
import {mapState} from 'vuex'
import mDate from '../../components/m-date.vue'
import mAddress from '../../components/m-address.vue'
import mCard from '../../components/m-card.vue'

export default {
  components: {
    mDate,
    mAddress,
    mCard
  },
  data() {
    return {
      list: [
        {
          id: 0,
          title: '活动信息',
          imgSrc: '/static/img/mian_item1.png'
        },
        {
          id: 1,
          title: '导航',
          imgSrc: '/static/img/mian_item2.png'
        },
        {
          id: 2,
          title: '报名审核',
          imgSrc: '/static/img/mian_item3.png'
        },
        {
          id: 3,
          title: '签到',
          imgSrc: '/static/img/mian_item4.png'
        },
        {
          id: 4,
          title: '已报名成员',
          imgSrc: '/static/img/mian_item5.png'
        },
        {
          id: 5,
          title: '活动总结',
          imgSrc: '/static/img/mian_item6.png'
        },
        {
          id: 6,
          title: '分享二维码',
          imgSrc: '/static/img/mian_item7.png'
        },
        {
          id: 7,
          title: '小组列表',
          imgSrc: '/static/img/mian_item8.png'
        },
        {
          id: 8,
          title: '部门列表',
          imgSrc: '/static/img/mian_item9.png'
        }
      ]
    }
  },
  computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
  onLoad() {}
}
</script>

<style scoped>
.main-head {
  position: relative;
  height: 432rpx;
  background: url(../../static/img/main_back.png) no-repeat top;
  background-size: 100% auto;
  padding-top: 57rpx;
  box-sizing: border-box;
}

.main-head .main-head-img {
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 0;
}

.main-head-meta {
  width: 687rpx;
  height: 374rpx;
  margin: 0 auto 0;
  background-color: #ffffff;
  box-shadow: 0px 10rpx 20rpx 0px rgba(0, 0, 0, 0.15);
  border-radius: 10rpx;
  overflow: hidden;
  position: relative;
  font-size: 43rpx;
  color: #ffffff;
  padding: 0 36rpx 0 33rpx;
  box-sizing: border-box;
}

.main-meta-topBox {
  width: 272rpx;
  height: 124rpx;
  background-image: linear-gradient(-30deg, #f26f2f 0%, #f5c532 100%), linear-gradient(#f4a86a, #f4a86a);
  background-blend-mode: normal, normal;
  border-radius: 75rpx;
  background-size: 100% auto;
  position: absolute;
  right: -31px;
  top: -57rpx;
}

.main-meta-prom {
  position: absolute;
  left: 19%;
  bottom: 13%;
  font-size: 40rpx;
}

.meta-recent {
  font-size: 32rpx;
  letter-spacing: 1rpx;
  color: #777777;
  padding: 38rpx 0 24rpx;
}

.meta-title {
  font-size: 43rpx;
  font-weight: bold;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 0px;
  color: #333333;
}

.meta-address {
  padding: 20rpx 0 36rpx;
}

.main-content-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 40rpx 0;
  margin-top: 40rpx;
}

.main-list-item {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 33.333%;
  height: 250rpx;
}

/* 	.main-list-item:nth-child(3n)::after {
		display: none;
	} */

.main-item-img {
  width: 96rpx;
  height: 95rpx;
}

.main-item-title {
  font-size: 32rpx;
  color: #333333;
  padding-top: 30rpx;
}
</style>
