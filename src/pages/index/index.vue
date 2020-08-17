<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="login">
      <view class="input-row border-b">
        <image
          src="../../static/img/phn.jpg"
          mode="widthFix"
          class="input-icon"
        ></image>
        <m-input
          class="m-input"
          type="text"
          clearable
          focus
          v-model="account"
          :placeholder="!account ? txt : ''"
        ></m-input>
      </view>
      <view class="input-row border-b">
        <image
          src="../../static/img/psw.jpg"
          mode="widthFix"
          class="input-icon"
        ></image>
        <m-input
          type="password"
          displayable
          v-model="password"
          placeholder="请输入密码"
        ></m-input>
      </view>
    </view>
    <view class="button">
      <button type="default" class="button-login" @tap="bindLogin">登陆</button>
      <button type="default" class="button-password">忘记密码</button>
    </view>
  </view>
</template>

<script>
import mInput from "@/components/m-input.vue";
export default {
  components: {
    mInput,
  },
  data() {
    return {
      providerList: [],
      hasProvider: false,
      account: "",
      password: "",
      positionTop: 0,
      mobile: "/login",
      txt: "请输入账号",
    };
  },
  onLoad() {
    console.log(this.account);
  },
  methods: {
    async bindLogin() {
      /**
       * 客户端对账号信息进行一些必要的校验。
       * 实际开发中，根据业务需要进行处理，这里仅做示例。
       */
      if (this.account.length < 1) {
        uni.showToast({
          icon: "none",
          title: "账号/密码不能为空",
        });
        return;
      }
      if (this.password.length < 1) {
        uni.showToast({
          icon: "none",
          title: "账号/密码不能为空",
        });
        return;
      }

      const postData = {
        username: this.account,
        password: this.password,
      };

      let { data: result } = await this.$http.login(postData);

      // uni.showToast({
      // 	icon: 'none',
      // 	title: res.data.meta.message
      // });
      uni.setStorage({
        key: "token",
        data: result.token,
      });
      uni.setStorage({
        key: "id",
        data: result.sysUser.id,
      });
      uni.switchTab({
        url: "/pages/main/main",
      });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 299rpx;
  height: 325.5rpx;
  margin-top: 120rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 108rpx;
}

.login {
  width: 100%;
}

.input-row {
  width: 80%;
  height: 84rpx;
  margin: 18rpx auto 0;
  display: flex;
  align-items: center;
}

.input-icon {
  padding-left: 12px;
}

.input-row:first-child .input-icon {
  width: 26rpx;
  height: 38rpx;
  padding-right: 32rpx;
}

.input-row:last-child .input-icon {
  width: 32rpx;
  height: 38rpx;
  padding-right: 28rpx;
}

input:-internal-autofill-selected {
  background-color: #ffffff !important;
}

.button {
  width: 100%;
}

.button button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 112rpx;
}

.button-login:after,
.button-password:after {
  display: none;
}

.button-login {
  background-color: #5066aa;
  color: #ffffff;
  margin-top: 46rpx;
  margin-bottom: 10rpx;
}

.button-hover {
  opacity: 0.5;
}

.button-password {
  color: #5066aa;
  background-color: #ffffff;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
