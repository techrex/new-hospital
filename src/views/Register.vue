<template>
  <div class="m-register">
    <div class="m-navbar">
      <img src="../assets/images/back.png" class="u-back" @click="goBack">
      <div class="m-steps">
        <div
          v-for="index in stepsNum"
          :key="index"
          :class="{
            'u-step': true,
            'z-current': index === currentIndex
          }"></div>
      </div>
    </div>
    <div class="m-content">
      <component :is="currentStepName" v-model="registerData[currentStepName]"></component>
    </div>
    <div class="m-btn-container">
      <div class="u-btn" @click="goNext">{{currentIndex === stepsNum ? '注册' : '下一步'}}</div>
    </div>
  </div>
</template>

<script>
import Step1 from './components/register/Step1'
import Step2 from './components/register/Step2'
import Step3Patient from './components/register/Step3Patient'
import Step3Doctor from './components/register/Step3Doctor'

import { toFirstUpperCase } from '@/utils/global'
import userApi from '@/api/user'
export default {
  name: 'Register',
  components: {
    Step1,
    Step2,
    Step3Patient,
    Step3Doctor
  },
  data () {
    return {
      stepsNum: 3,
      currentIndex: 1,
      currentStepName: 'Step1',
      registerData: {
        Step1: 'doctor',
        Step2: {
          userName: '',
          telp: '',
          password: '',
          reRassword: ''
        },
        Step3Patient: {
          birthDate: new Date()
        },
        Step3Doctor: {
          yy: '',
          ks: '',
          zc: ''
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    goBack () {
      if (this.currentIndex === 1) {
        this.$router.back()
      } else if (this.currentIndex === 2) {
        this.currentStepName = 'Step1'
      } else if (this.currentIndex === 3) {
        this.currentStepName = 'Step2'
      }
      this.currentIndex--
    },
    goNext () {
      if (this.currentIndex === this.stepsNum) {
        if (this.currentStepName === 'Step3Doctor') {
          if (!this.registerData.Step3Doctor.yy) {
            this.$store.commit('showErrPopup', '医院不能为空')
            return false
          }
          if (!this.registerData.Step3Doctor.ks) {
            this.$store.commit('showErrPopup', '科室不能为空')
            return false
          }
          if (!this.registerData.Step3Doctor.zc) {
            this.$store.commit('showErrPopup', '职称不能为空')
            return false
          }
        }
        // this.$router.push({ name: 'RegisterSuccess' })
        userApi.register(
          this.registerData.Step2.userName,
          this.registerData.Step2.password,
          this.registerData.Step2.telp,
          this.registerData.Step3Doctor.yy,
          this.registerData.Step3Doctor.ks,
          this.registerData.Step3Doctor.zc,
          this.$_moment(this.registerData.Step3Patient.birthDate).format('YYYY-MM-DD'),
          this.axiosCancelToken)
          .then((data) => {
            console.log(data)
            if (data.data === '成功') {
              this.$router.push({ name: 'RegisterSuccess' })
            } else {
              this.$store.commit('showErrPopup', data.data)
            }
          })
      } else {
        if (this.currentIndex === 2) {
          if (!this.registerData.Step2.userName) {
            this.$store.commit('showErrPopup', '用户名不能为空')
            return false
          }
          if (!this.registerData.Step2.telp) {
            this.$store.commit('showErrPopup', '联系方式不能为空')
            return false
          }
          if (!/\d{11}/.test(this.registerData.Step2.telp)) {
            this.$store.commit('showErrPopup', '联系方式必须为11位数字')
            return false
          }
          if (!this.registerData.Step2.password) {
            this.$store.commit('showErrPopup', '密码不能为空')
            return false
          }
          if (this.registerData.Step2.password !== this.registerData.Step2.reRassword) {
            this.$store.commit('showErrPopup', '确认密码与密码不相同')
            return false
          }
          this.currentIndex++
          this.currentStepName = `Step${this.currentIndex}${toFirstUpperCase(this.registerData.Step1)}`
        } else {
          this.currentIndex++
          this.currentStepName = `Step${this.currentIndex}`
        }
      }
    }
  }
}
</script>

<style scoped>
.m-register {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.m-register .m-navbar {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 14.8vh;
  background: #64acff url(../assets/images/wave-register.png) center bottom / 100% auto no-repeat;
}
.m-register .m-navbar .u-back {
  position: absolute;
  top: 3vh;
  left: 5.3vw;
  width: auto;
  height: 4.5vh;
}
.m-register .m-navbar .m-steps {
  display: flex;
  margin-top: 4.5vh;
}
.m-register .m-navbar .m-steps .u-step {
  margin-right: 2.7vw;
  width: 6.7vw;
  height: 0.75vh;
  background: #fff;
  border-radius: 0.375vh;
}
.m-register .m-navbar .m-steps .u-step:last-child {
  margin-right: 0;
}
.m-register .m-navbar .m-steps .u-step.z-current {
  background: #0052b0;
}
.m-register .m-content {
  padding: 0 5.3vw;
  width: 100%;
  height: 73.4vh;
  box-sizing: border-box;
}
.m-register .m-btn-container {
  padding: 0 5.3vw;
  height: 11.8vh;
}
.m-register .m-btn-container .u-btn {
  width: 100%;
  height: 8vh;
  line-height: 8vh;
  background: #2d8fff;
  border-radius: 4vh;
  color: #fff;
  font-size: 3vh;
  text-align: center;
}
</style>
