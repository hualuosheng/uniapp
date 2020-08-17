import http from '@/common/libs/httpClient/flyClient.js'
// import qs from 'qs'

export default {

  async login(postData) {
    let url = "/api/login"
    let { data } = await http.post(url, postData)
    return data;
  },
  async activityList(params) {
    let url = `/api/activity/info?data=${encodeURI(JSON.stringify(params))}`
    let { data } = await http.get(url)
    return data;
  },
}


