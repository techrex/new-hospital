import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: '',
    showError: false,
    errMsg: '',
    errShowTime: 2000,
    errTimer: ''
  },
  mutations: {
    showErrPopup (state, msg) {
      if (this.errTimer) {
        clearTimeout(this.errTimer)
      }
      state.errMsg = msg || '错误'
      state.showError = true
      this.errTimer = setTimeout(() => {
        state.showError = false
      }, state.errShowTime)
    },
    login (state, userName) {
      state.isLogin = true
      state.userName = userName
      window.sessionStorage.setItem('XYL_IS_LOGIN', 'TRUE')
      window.sessionStorage.setItem('XYL_USERNAME', userName)
    },
    lgOut (state) {
      state.isLogin = false
      window.sessionStorage.removeItem('XYL_IS_LOGIN')
      window.sessionStorage.removeItem('XYL_USERNAME')
    }
  },
  actions: {

  }
})
