export default {

  // 加载中轻提示
  showLoading(title = "正在加载...") {
    uni.showLoading({
      title: title,
    })
  },

  // 隐藏加载中轻提示
  hideLoading() {
    uni.hideLoading();
  },

  // Dialog弹框=================
  // 提示弹框（带“确认”按钮）
  alert(content,funOk,title = '系统提示') {
    uni.showModal({
      title: title,
      content,
      showCancel: false,
      success: res => {
        if (funOk) {
          funOk(res);
        }
      }
    });
  },


  // 确认弹窗（带“确认”、“取消”按钮）
  confirm(content,funOk,funCancel,title = "系统确认?") {

    uni.showModal({
      title: title || "系统确认?",
      content: content,
      showCancel: true,
      confirmColor: "#1AAD19",
      success: res => {
        console.log(res,"sssss")
        if(res.confirm){
            funOk();
        }
        
      }
    });    
  },


  showToast(title = "操作成功",duration = 1000) {
    uni.showToast({
      title: title,
      icon: "none",
      duration: duration
    });
  },

  // 隐藏加载中轻提示
  hideToast() {
    uni.hideToast();
  },

  // 成功轻提示
  succ(title = "操作成功",duration  = 1000) {
    uni.showToast({
      title: title,
      icon: "success",
      duration: duration
    });
  },

  // 失败轻提示
  fail(title = "操作失败",duration  = 1000) {
    uni.showToast({
      title: title,
      icon: "none",
      duration: duration
    });
  },

  // 文字轻提示
  info(title = "提示",duration  = 1000) {

    uni.showToast({
      title: title || "操作事项",
      icon: "none",
      duration: duration
    });
    
  },

};
