<template>
	<view class="m-card">
		<!-- <view class="m-content-list"> -->
		<!-- {{this.list.length}} -->
		<view class="m-list-item" :class="[item.id<(list.length-column)? 'border-b':'',(item.id+1)%column !==0? 'border-r':'']" v-for="item in list"
		 :key="item.id" :style="{ width: 100/column + '%'}" @click="itemLink(item.title)">
			<image :src="item.imgSrc" class="m-item-img"></image>
			<view class="m-item-title">
				{{item.title}}
			</view>
		</view>
		<!-- </view> -->
	</view>
</template>
<script scoped>
	export default {
		name: 'mCard',
		props: {
			list: {
				type: Array,
				default: []
			},
			column: {
				type: Number,
				default: 3
			}
		},
		data() {
			return {
  
			}
		},
    methods: {
      itemLink(title){
       this.$emit("itemLink",title)
      }
    },
	}
</script>
<style scoped>
	.m-card {
		display: flex;
		flex-wrap: wrap;
		padding: 40rpx 34rpx;
		/* margin-top: 40rpx; */
		background-color: #FFFFFF;
	}

	.m-list-item {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		height: 250rpx;
	}

	.m-item-img {
		width: 96rpx;
		height: 95rpx;
	}

	.m-item-title {
		font-size: 32rpx;
		color: #333333;
		padding-top: 30rpx;
	}
</style>
