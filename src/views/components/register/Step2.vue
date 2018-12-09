<template>
  <div class="m-register-2">
    <div class="u-title">创建账户</div>
    <transition appear name="fade-0">
      <div class="m-input-container" style="margin-top: 6.6vh">
        <img src="../../../assets/images/icon-username.png" class="u-input-icon">
        <div v-if="value.userName === ''" class="u-input-placeholder">用户名</div>
        <input v-model="value.userName" type="text" name="userName" class="u-input">
      </div>
    </transition>
    <transition appear name="fade-1">
      <div class="m-input-container" style="margin-top: 4vh">
        <img src="../../../assets/images/icon-username.png" class="u-input-icon">
        <div v-if="value.telp === ''" class="u-input-placeholder">联系方式</div>
        <input v-model="value.telp" type="tel" name="telp" class="u-input">
      </div>
    </transition>
    <transition appear name="fade-2">
      <div class="m-input-container" style="margin-top: 4vh">
        <img src="../../../assets/images/icon-password.png" class="u-input-icon">
        <div v-if="value.password === ''" class="u-input-placeholder">密码</div>
        <input v-model="value.password" type="password" name="password" class="u-input">
      </div>
    </transition>
    <transition appear name="fade-3">
      <div class="m-input-container" style="margin-top: 4vh">
        <img src="../../../assets/images/icon-password.png" class="u-input-icon">
        <div v-if="value.reRassword === ''" class="u-input-placeholder">确认密码</div>
        <input v-model="value.reRassword" type="password" name="rePassword" class="u-input">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'RegisterStep2',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    // selectItem (index) {
    //   this.$emit('input', index)
    // }
  }
}
</script>

<style scoped>
.m-register-2 {
  padding-top: 4.8vh;
}
.m-register-2 .u-title {
  color: #2d8fff;
  font-size: 6.1vh;
  text-align: center;
}
.m-register-2 .m-input-container {
  position: relative;
  width: 87vw;
  height: 7.6vh;
  background: #fff;
  border-radius: 3.8vh;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
}
.m-register-2 .u-input-icon {
  display: inline-block;
  position: absolute;
  margin-top: -1.8vh;
  top: 50%;
  left: 6.4vw;
  width: auto;
  height: 3.6vh;
}
.m-register-2 .u-input-placeholder {
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
.m-register-2 .u-input {
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
.m-register-2 .u-input:focus {
  outline: none;
}
.m-register-2 .fade-0-enter-active, .fade-0-leave-active {
  transition: opacity .3s ease-in;
}
.m-register-2 .fade-0-enter, .fade-0-leave-to {
  opacity: 0;
}
.m-register-2 .fade-1-enter-active, .fade-1-leave-active {
  transition: opacity .3s ease-in 0.3s;
}
.m-register-2 .fade-1-enter, .fade-1-leave-to {
  opacity: 0;
}
.m-register-2 .fade-2-enter-active, .fade-2-leave-active {
  transition: opacity .3s ease-in 0.6s;
}
.m-register-2 .fade-2-enter, .fade-2-leave-to {
  opacity: 0;
}
.m-register-2 .fade-3-enter-active, .fade-3-leave-active {
  transition: opacity .3s ease-in 0.9s;
}
.m-register-2 .fade-3-enter, .fade-3-leave-to {
  opacity: 0;
}
</style>
