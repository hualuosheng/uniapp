import Vue from 'vue'
import App from './App'

import store from './store'

import appConfig from '@/1/Config/AppConfig.js';
import apiConfig from '@/1/Config/ApiConfig.js';

import appHttp from '@/0/Libs/HttpHelper.js';
import appWeb from '@/0/Libs/WebHelper.js';
import appCmd from '@/0/Libs/CommandHelper.js';



import appMsg from "@/0/Libs/MessageHelper.js";
import appWechat from "@/0/Libs/WechatHelper.js";
import appRouter from "@/0/Libs/RouterHelper";
import appMap from "@/0/Libs/MapHelper.js";



Vue.prototype.$http = http

import request from './common/request.js'
import api from './common/api/index.js'
import url from './common/config.js'

Vue.config.productionTip = false

// Vue.prototype.$request = request
// Vue.prototype.$api = api
// Vue.prototype.$url = url

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
