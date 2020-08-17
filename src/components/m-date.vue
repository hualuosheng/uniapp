<template>
	<view class="m-date">
		{{ dateStr|dateFormat(dateStr)}}
	</view>
</template>


<script>
	export default {
		props: {
			dateStr: {
				type: Number,
				default: ""
			},
		},
		data() {
			return {}
		},
		methods: {
			formatDate(date, fmt) {
				if (/(y+)/.test(fmt)) {
					fmt = fmt.replace(RegExp.$1,
						(date.getFullYear() + '').substr(4 - RegExp.$1.length));
				}
				let o = {
					'M+': date.getMonth() + 1,
					'd+': date.getDate(),
					'h+': date.getHours(),
					'm+': date.getMinutes(),
					's+': date.getSeconds()
				};
				for (let k in o) {
					if (new RegExp(`(${k})`).test(fmt)) {
						let str = o[k] + '';
						fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ?
							str : this.padLeftZero(str));
					}
				}
				return fmt;
			},
			padLeftZero(str) {
				return ('00' + str).substr(str.length);
			},
			//计算属性 computed
			dateFormat(dateStr) {
				let date = new Date(dateStr);
				return this.formatDate(date, "yyyy-MM-dd");
			}
		},
		filters: {
			dateFormat(dateStr) {
				let date = new Date(dateStr);
				let y = date.getFullYear();
				let m = date.getMonth() + 1;
				let d = date.getDate();
				let h = date.getHours();
				let u = date.getMinutes();
				let s = date.getSeconds();
				// m = m < 10 ? ("0" + m) : m;
				// d = d < 10 ? ("0" + d) : d;
				return y + "年" + m + "月" + d + "日";
			}
		}
	}
</script>

<style scoped>
	.m-date {
		width: 259rpx;
		height: 56rpx;
		border-radius: 28rpx;
		border: solid 1.5px #4763be;
		font-size: 32rpx;
		color: #4763be;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
</style>
