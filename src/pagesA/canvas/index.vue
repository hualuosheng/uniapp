<template>
  <view class="m-canvas">
    <view class="wrapper" @click="open">
      <tki-qrcode
        ref="qrcode"
        :val="val"
        :size="200"
        background="#fff"
        foreground="#000"
        pdground="#000"
        :onval="false"
        :loadMake="false"
        :show="false"
        @result="qrR"
      ></tki-qrcode>
      <canvas canvas-id="firstCanvas" id="firstCanvas" style="height: 100vh; width: 100%;"></canvas>
    </view>
    <uni-popup ref="popup" type="bottom" :animation="true">
      <view class="footer">
        <a class="down" download="canvas.png" :href="imgData" @click="downLoad">下载</a>
        <button class="popup-close border-t" @click="hide">取消</button>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
// import uniPopupMessage from "@/components/uni-popup/uni-popup-message.vue";
// import uniPopupDialog from "@/components/uni-popup/uni-popup-dialog.vue";
export default {
  name: 'mCanvas',
  components: {
    tkiQrcode
  },
  props: {
    qrval: {
      // 要生成的二维码值
      type: String
    }
  },
  data() {
    return {
      val: 'https://www.baidu.com',
      imgSrc: '../../static/img/can.jpg',
      ctx: '',
      windowWidth: Number,
      windowHeight: Number,
      dpr: Number,
      address: '../../static/img/address_icon.png',
      imgData: ''
    }
  },
  onReady() {
    this.$refs.qrcode._makeCode()
  },
  methods: {
    downLoad() {
      this.$refs.popup.close()
    },
    open() {
      let that = this
      this.ctx.draw(true, () => {
        uni.canvasToTempFilePath({
          x: 0,
          y: 0,
          destWidth: this.windowWidth,
          destHeight: this.windowHeight,
          fileType: 'jpg',
          canvasId: 'firstCanvas',
          success: function(res) {
            that.imgData = res.tempFilePath
          },
          fail() {
            uni.showToast({
              title: '生成海报失败',
              icon: 'none'
            })
          }
        })
      })
      this.$refs.popup.open()
    },
    hide() {
      this.$refs.popup.close()
    },
    //生成
    readyCanvas(ctx) {
      let w
      let h
      let ratio
      uni.getSystemInfo({
        success: res => {
          console.log(res)
          this.dpr = res.pixelRatio
          w = res.windowWidth
          this.windowWidth = res.windowWidth
          h = res.windowHeight
          this.windowHeight = res.windowHeight
          ratio = w / 375
        }
      })

      //背景
      ctx.beginPath()
      ctx.setFillStyle('#5066aa')
      ctx.fillRect(0, 0, w, 538 * ratio)
      ctx.closePath()

      //二维码背景
      this.roundRect(ctx, (w - 330) / 2, 75, 330, 360, 10, 'rgba(255, 255, 255, 0.2)')

      //二维码box
      this.roundRect(ctx, (w - 275) / 2, 140, 275, 275, 10, '#ffffff')

      //文字
      this.sizeCtx(ctx, '14px Arial', '#484746', '扫码查看活动详情', 'center', w / 2, 396 * ratio)
      this.sizeCtx(ctx, '16px Arial', '#f56a2c', '*截图或点击右上角,分享给小伙伴', 'center', w / 2, 474)
      this.sizeCtx(ctx, 'bold 20px Arial', '#333333', '春节课程', 'left', 20, 580)
      this.sizeCtx(ctx, '13px Arial', '#999999', '山西省太原市小店区六味斋', 'left', 37, 603.5)

      // logo
      this.drawImage(ctx, this.address, 20, 590, 13, 17.5)
      this.drawRing(ctx)
      this.drawCircular(ctx, this.imgSrc, w / 2 - 40, 42, 80, 80)

      //footer
      this.roundRect(ctx, 20, 620, 128, 28, 14, '#ffffff')
      this.sizeCtx(ctx, '12px Arial', '#4763be', '2019年02月16日', 'left', 37, 638.5)
      this.sizeCtx(ctx, '12px Arial', '#f56a2c', '100/人', 'right', w - 20, 638.5)

      setTimeout(function() {
        ctx.stroke()
        ctx.draw()
      }, 0)
    },

    //绘制圆角矩形
    roundRect(ctx, x, y, w, h, r, f) {
      ctx.save()
      if (w < 2 * r) {
        r = w / 2
      }
      if (h < 2 * r) {
        r = h / 2
      }
      ctx.beginPath()
      ctx.setStrokeStyle('white')
      ctx.setFillStyle('rgba(255, 255, 255, 0.2)')
      ctx.setLineWidth(4)
      ctx.moveTo(x + r, y)
      ctx.arcTo(x + w, y, x + w, y + h, r)
      ctx.arcTo(x + w, y + h, x, y + h, r)
      ctx.arcTo(x, y + h, x, y, r)
      ctx.arcTo(x, y, x + w, y, r)
      // const grd = ctx.createLinearGradient(0, 0, 0, 0);
      if (x === 20) {
        ctx.strokeStyle = '#4763be'
        ctx.lineWidth = 2
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0)'
        ctx.lineWidth = 1
      }
      ctx.stroke()
      ctx.fillStyle = f
      ctx.fill()
      ctx.closePath()
    },

    //绘制文字
    sizeCtx(ctx, font, fillStyle, fillText, textAlign, x, y) {
      ctx.font = font //设置字体大小
      ctx.fillStyle = fillStyle //fillStyle填充颜色
      ctx.textAlign = textAlign
      ctx.fillText(fillText, x, y) //文本
    },

    //logo圆环
    drawRing(ctx, strokeColor = '#ffffff') {
      ctx.save()
      ctx.lineWidth = 84 - 82
      ctx.strokeStyle = strokeColor
      ctx.beginPath()
      ctx.arc(this.windowWidth / 2, 82, 82 / 2, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    },

    //处理logo
    drawCircular(ctx, url, ax, ay, width, height) {
      let w = width
      let h = height
      let x = ax
      let y = ay
      ctx.save()
      ctx.beginPath()
      ctx.arc(w / 2 + x, h / 2 + y, w / 2, 0, Math.PI * 20, false)
      ctx.fill()
      ctx.clip()
      ctx.drawImage(url, x, y, w, h)
      ctx.restore()
      ctx.stroke()
      ctx.fillStyle = 'red'
      ctx.strokeRect(400, 200, 400, 300)
      ctx.fillRect(400, 200, 400, 300)
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2
      ctx.closePath()
    },

    //处理图片
    drawImage(ctx, url, x, y, w, h) {
      ctx.save()
      ctx.beginPath()
      ctx.drawImage(url, x, y, w, h)
      ctx.restore()
      ctx.closePath()
    },

    //海报二维码绘制
    qrR(path) {
      let _that = this
      const ctx = uni.createCanvasContext('firstCanvas', this)
      this.ctx = ctx
      this.readyCanvas(ctx)
      this.drawImage(ctx, path, (this.windowWidth - 195) / 2, 175, 195, 195)
    }
  }
}
</script>
<style scoped>
.m-canvas {
  min-height: 100vh;
  position: relative;
}

.wrapper {
  min-height: 100vh;
}

.save {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.button-hover {
  opacity: 0.5;
}

.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.down {
  width: 100%;
  height: 46px;
  display: block;
  text-decoration: none;
  line-height: 46px;
  text-align: center;
  background-color: #42b983;
  border-radius: 10px;
  margin: 0 auto;
  font-size: 18px;
  color: #ffffff;
}
</style>
