<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	html {
		line-height: 1;
	}

	uni-page-body {
		min-height: 100%!important;
	}

	.border-b,
	.border-r,
	.border-t {
		position: relative;
	}

	.border-t::before,
	.border-b::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 0;
		left: 0;
		border-top: 1px solid #eeeeee;
		transform-origin: 0 0;
		transform: scaleY(.5);
		z-index: 88;
	}

	.border-t::before {
		top: 0;
	}

	.border-b::before {
		bottom: 0;
	}

	.border-r::after {
		content: '';
		position: absolute;
		width: 0;
		height: 100%;
		right: 0;
		top: 0;
		border-right: 1px solid #eeeeee;
		transform-origin: 0 0;
		transform: scalex(.5);
		z-index: 88;
	}
</style>
