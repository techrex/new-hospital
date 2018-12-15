<template>
  <div class="m-appointment-form">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-title">预约</div>
    </div>
    <div class="m-content">
      <div class="m-input-container">
        <img src="../assets/images/icon-username.png" class="u-input-icon">
        <div v-if="realName === ''" class="u-input-placeholder">患者姓名</div>
        <input v-model="realName" type="text" name="realName" class="u-input">
      </div>
      <div class="m-input-container">
        <img src="../assets/images/icon-username.png" class="u-input-icon">
        <div v-if="tel === ''" class="u-input-placeholder">联系方式</div>
        <input v-model="tel" type="tel" name="tel" class="u-input">
      </div>
      <div class="m-input-container-datetimepicker">
        <div class="u-label" style="white-space: nowrap">会诊时间</div>
        <van-datetime-picker
          v-model="hzsj"
          type="date"
          :min-date="minDate"
          :show-toolbar="false"
          style="width: 100%"
        />
      </div>
    </div>
    <div class="m-btn-container">
      <div class="u-btn" @click="appointment">
        <van-loading v-if="isSubmit" color="#fff" size="3vh" style="margin-right: 3vw" />
        <span>预约</span>
      </div>
    </div>
  </div>
</template>

<script>
import projectApi from '@/api/project'
export default {
  name: 'AppointmentDoctorForm',
  components: {
  },
  data () {
    return {
      realName: '',
      tel: '',
      isNeedCar: false,
      isNeedAccompany: false,
      bz: '',
      hzsj: new Date(),
      isSubmit: false,
      minDate: new Date()
    }
  },
  mounted () {
    if (!this.$route.params.id) {
      this.$store.commit('showErrPopup', '预约id不能为空')
      this.$router.back()
      return false
    }
    if (!this.$route.params.hospital) {
      this.$store.commit('showErrPopup', '预约医院不能为空')
      this.$router.back()
      return false
    }
  },
  methods: {
    appointment () {
      if (this.isSubmit) return false
      if (!this.realName) {
        this.$store.commit('showErrPopup', '患者姓名不能为空')
        return false
      }
      if (!this.tel) {
        this.$store.commit('showErrPopup', '联系方式不能为空')
        return false
      }
      if (!/\d{11}/.test(this.tel)) {
        this.$store.commit('showErrPopup', '联系方式必须为11位数字')
        return false
      }
      this.isSubmit = true
      projectApi.appointmentDoctor(
        this.$route.params.id,
        this.realName,
        this.tel,
        this.$route.params.hospital,
        this.$_moment(this.hzsj).format('YYYY-MM-DD'),
        this.axiosCancelToken
      ).then((data) => {
        this.isSubmit = false
        if (data.data === '会诊成功') {
          this.$router.push({ name: 'AppointmentDoctorSuccess' })
        } else {
          this.$store.commit('showErrPopup', data.data)
        }
      }).catch(() => {
        this.isSubmit = false
      })
      // this.$router.push({ name: 'AppointmentSuccess' })
    }
  }
}
</script>

<style scoped>
.m-appointment-form {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.m-appointment-form .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 15.4vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
}
.m-appointment-form .m-head .u-back {
  position: absolute;
  top: 3vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-appointment-form .m-head .u-title {
  margin-top: 3.45vh;
  color: #fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-appointment-form .m-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 72.8vh;
}
.m-appointment-form .m-input-container {
  position: relative;
  margin-top: 4vh;
  width: 87vw;
  height: 7.6vh;
  background: #fff;
  border-radius: 3.8vh;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
}
.m-appointment-form .u-input-icon {
  display: inline-block;
  position: absolute;
  margin-top: -1.8vh;
  top: 50%;
  left: 6.4vw;
  width: auto;
  height: 3.6vh;
}
.m-appointment-form .u-input-placeholder {
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
.m-appointment-form .u-input {
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
.m-appointment-form .u-input:focus {
  outline: none;
}
.m-appointment-form .m-input-container-switch {
  display: flex;
  align-items: center;
  margin-top: 4vh;
  width: 87vw;
  height: 7.6vh;
}
.m-appointment-form .m-input-container-switch .u-label {
  margin-right: 6vw;
  color: #64acff;
  font-size: 3.1vh;
}
.m-appointment-form .m-input-container-switch .u-switch {
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
}
.m-appointment-form .m-input-container-datetimepicker {
  margin-top: 4vh;
  width: 87vw;
}
.m-appointment-form .m-input-container-datetimepicker .u-label {
  margin-right: 6vw;
  color: #64acff;
  font-size: 3.1vh;
}
.m-appointment-form .m-btn-container {
  padding: 0 5.3vw;
  height: 11.8vh;
}
.m-appointment-form .m-btn-container .u-btn {
  display: flex;
  justify-content: center;
  align-items: center;
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

<style>
.m-appointment-form .van-picker-column__item {
  color: #2d8fff;
  opacity: 0.5;
}
.m-appointment-form .van-picker-column__item.van-picker-column__item--selected {
  opacity: 1;
}
</style>
