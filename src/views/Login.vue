<template>
  <div class="m-login">
    <div class="m-header">
      <div class="m-header-background"></div>
      <!-- <img src="../assets/images/wave-login.png" class="m-header-background-bottom"> -->
      <div class="m-header-container">
        <div class="m-input-container" style="margin-top: 13.8vh">
          <img src="../assets/images/icon-username.png" class="u-input-icon">
          <div v-if="userName === ''" class="u-input-placeholder">用户名</div>
          <input v-model="userName" type="text" name="userName" class="u-input">
        </div>
        <div class="m-input-container" style="margin-top: 2.4vh">
          <img src="../assets/images/icon-password.png" class="u-input-icon">
          <div v-if="password === ''" class="u-input-placeholder">密码</div>
          <input v-model="password" type="password" name="password" class="u-input">
        </div>
      </div>
    </div>
    <div class="m-action">
      <button class="u-btn u-submit" style="margin-top: 2.6vh" @click="login">登录</button>
      <button class="u-btn u-submit-quick" style="margin-top: 3.4vh">快捷登录</button>
      <div class="u-register"
        style="margin-top: 3.8vh"
        @click="$router.push({ name: 'Register' })">我还没有注册</div>
    </div>
    <img src="../assets/images/loginBottom.png" class="m-bottom">
  </div>
</template>

<script>
import userApi from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {
    login () {
      if (!this.userName) {
        this.$store.commit('showErrPopup', '用户名不能为空')
        return false
      }
      if (!this.password) {
        this.$store.commit('showErrPopup', '密码不能为空')
        return false
      }
      userApi.login(this.userName, this.password, this.axiosCancelToken)
        .then((data) => {
          console.log(data)
          if (data.data === '登录成功') {
            this.$toast.success({
              message: '登录成功',
              duration: 1000
            })
            this.$store.commit('login', this.userName)
            this.$router.push({ name: 'Index' })
          } else {
            this.$store.commit('showErrPopup', '用户名或密码错误')
          }
        })
    }
  }
}
</script>

<style scoped>
.m-login {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.m-login .m-header {
  position: relative;
  width: 100%;
  height: 46.7vh;
  background: #64acff url(../assets/images/wave-login.png) center bottom / 100% auto no-repeat;
}
.m-login .m-header-background {
  position: absolute;
  top: 2.77vh;
  right: 19vw;
  bottom: 7.64vh;
  left: 16.67vw;
  background: url(../assets/images/mask-login.png) center / contain no-repeat;
}
.m-login .m-header-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}
.m-login .m-input-container {
  position: relative;
  width: 87vw;
  height: 7.6vh;
  background: #fff;
  border-radius: 3.8vh;
}
.m-login .u-input-icon {
  display: inline-block;
  position: absolute;
  margin-top: -1.8vh;
  top: 50%;
  left: 6.4vw;
  width: auto;
  height: 3.6vh;
}
.m-login .u-input-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 7.6vh;
  color: #95c6ff;
  font-size: 3.1vh;
  text-align: center;
}
.m-login .u-input {
  position: absolute;
  padding-left: 15vw;
  padding-right: 6.4vw;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  line-height: 7.6vh;
  font-size: 3.1vh;
  background: transparent;
  border: 0;
  border-radius: 3.8vh;
  z-index: 5;
}
.m-login .u-input:focus {
  outline: none;
}
.m-login .m-action {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
}
.m-login .u-btn {
  width: 87vw;
  height: 8vh;
  border: 0;
  border-radius: 4vh;
  box-shadow: 0 1.8vh 2.7vh 0 rgba(45, 143, 255, 0.5);
  font-weight: bold;
}
.m-login .u-btn.u-submit {
  color: #2d8fff;
  background: #edf5ff;
  font-size: 3.7vh;
}
.m-login .u-btn.u-submit-quick {
  color: #fff;
  background: #2d8fff;
  font-size: 3vh;
}
.m-login .u-btn:focus {
  outline: none;
}
.m-login .u-register {
  color: #2d8fff;
  font-size: 3vh;
  cursor: pointer;
}
.m-login .m-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}
</style>
