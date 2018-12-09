import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vendor'
import './utils'
import store from './store'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

let userName = window.sessionStorage.getItem('XYL_USERNAME')
let isLogin = window.sessionStorage.getItem('XYL_IS_LOGIN') === 'TRUE'
if (isLogin && userName) {
  store.commit('login', userName)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
