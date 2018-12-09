import router from '../router'
import store from '../store'
import axios from 'axios'

const webgisRest = axios.create()

webgisRest.defaults.withCredentials = true

webgisRest.interceptors.request.use((config) => {
  if (!config.noLogin && !store.state.isLogin) {
    router.push({ name: 'Login' })
    throw new Error('用户未登录')
  }
  // Do something before request is sent
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

webgisRest.interceptors.response.use((response) => {
  // Do something with response data
  return response
}, (error) => {
  if (axios.isCancel(error)) {
    console.warn('Request Canceled')
  } else if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('Request Status', error.response.status)
    console.log('Request Data', error.response.data)
    // console.log('headers', error.response.headers)
    if (error.response.data.msg) {
      store.commit('showErrPopup', error.response.data.msg)
      // Vue.prototype.$Message.error(error.response.data.msg)
    } else {
      let errMsg = ''
      switch (error.response.status) {
        case 500:
          errMsg = '服务器错误'
          break
        default:
          errMsg = '请求失败'
      }
      store.commit('showErrPopup', errMsg)
      // Vue.prototype.$Message.error(errMsg)
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('Request', error.request)
    store.commit('showErrPopup', '请求失败')
    // Vue.prototype.$Message.error('请求失败')
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Request Error', error.message)
    store.commit('showErrPopup', error.message)
    // Vue.prototype.$Message.error(error.message)
  }
  console.log('Request Config', error.config)
  return Promise.reject(error)
})

export default webgisRest
