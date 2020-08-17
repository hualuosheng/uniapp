import Fly from "flyio/dist/npm/wx";
import api from "../../config/apiConfig.js";
// import $msg from "@/commom/libs/message.js";

const flyClient = new Fly();

// 将fly封装为全局变量，方便调用
flyClient.config = {
  method: "get", // 请求方法， GET 、POST ...
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Ajax": 1
  }, // 请求头
  baseURL: api.host, // 请求基地址
  parseJson: false,
  timeout: "120000" // 超时时间
};

//请求拦截
flyClient.interceptors.request.use(res => {
  // console.log("flyClient.interceptors.request", request, "------请求拦截");
  // let token = getApp().globalData;
  let token = uni.getStorageSync('token');
  if (token) {
    res.headers['Access-Token'] = token
  }
  return res;
});

//响应拦截
flyClient.interceptors.response.use(
  res => {
    console.log(res, "//////////////-----------响应拦截")
    if (res.statusCode === 200) {
      if (res.status == 401) {
        uni.reLaunch({
          url: '/pages/login/login'
        })
      }
      return res;
    } else {
      return res;
    }
  },
  err => {
    return Promise.reject(err);
  }
);
export default flyClient;