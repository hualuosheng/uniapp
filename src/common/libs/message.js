import messageBox from "./message/messageBox";

export default {

  // 加载中轻提示
  showLoading(title = "正在加载...") {
    messageBox.showLoading(title);
  },

  // 隐藏加载中轻提示
  hideLoading() {
    messageBox.hideLoading();
  },

  // Dialog弹框=================
  // 提示弹框（带“确认”按钮）
  alert(content, funOk, title = '系统提示') {
    messageBox.alert(content, funOk, title);
  },


  // 确认弹窗（带“确认”、“取消”按钮）
  confirm(content, funOk, funCancel, title = "系统确认?") {
    messageBox.confirm(content, funOk, funCancel, title);
  },
  confirm_modal: function (tit, cont, is_show, fun) {
    wx.showModal({
      title: tit,
      content: cont,
      showCancel: is_show,
      confirmColor: "#1AAD19",
      success: res => {
        if (fun) {
          fun(res);
        }
      }
    });
  },

  showToast(title = "操作成功", duration = 1000) {
    messageBox.showToast(title, duration);
  },

  toast(title = "操作成功", duration = 1000) {
    messageBox.showToast(title, duration);
  },

  // 隐藏加载中轻提示
  hideToast() {
    messageBox.hideToast();
  },

  // 成功轻提示
  succ(title, duration) {
    messageBox.succ(title, duration);
  },

  succ2(title, duration) {
    messageBox.succ(title, duration);
  },
  
  success(title, duration) {
    messageBox.succ(title, duration);
  },

  // 失败轻提示
  fail(title, duration) {
    messageBox.fail(title, duration);
  },

  error(title, duration) {
    this.fail(title, duration);
  },

  // 文字轻提示
  info(title) {
    messageBox.info(title);
  },


  //=================================================
  // 加载中轻提示
  loading(title) {
    this.showLoading(title);
  },


};
