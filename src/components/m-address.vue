<template>
	<view class="m-address">
		<image src="../static/img/address_icon.png" class="m-address-icon"></image>
		{{address}}
	</view>
</template>
<script>
	export default {
		props: {
			address: String
		}
	}
</script>

<style scoped>
	.m-address {
		font-size: 32rpx;
		color: #777777;
		display: flex;
	}

	.m-address-icon {
		width: 26rpx;
		height: 35rpx;
		/* min-width: 16px; */
		/* min-height: auto; */
		flex-shrink: 0;
		margin-right: 14rpx;
	}
</style>
