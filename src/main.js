import Vue from 'vue'
import App from './App'
import store from './store'


import http from '@/common/api/api.js'

Vue.prototype.$http = http
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
