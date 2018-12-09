<template>
  <div class="m-doctor">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-name">{{name}}</div>
      <div class="u-name-sub">{{ks}}</div>
    </div>
    <transition appear name="fade">
      <div class="m-doctor-content">
        <div class="m-img">
          <div class="m-action">
            <img src="../assets/images/back.png" class="u-img" @click="imgPrev">
          </div>
          <img :src="imgUrls[currentImgIndex]" class="u-img">
          <div class="m-action">
            <img src="../assets/images/next.png" class="u-img" @click="imgNext">
          </div>
        </div>
        <div class="m-detail-btn" @click="goDetailUrl">详情信息</div>
        <div class="u-info">{{briefIntro}}</div>
        <div
          class="u-btn"
          @click="$router.push({
            name: 'AppointmentForm',
            params: {
              appointmentType: 'doctor',
              hospital: hospital,
              id: $route.params.doctorId
            }
          })">预约</div>
      </div>
    </transition>
  </div>
</template>

<script>
import projectApi from '@/api/project'
export default {
  name: 'Doctor',
  components: {
  },
  data () {
    return {
      currentImgIndex: 0,
      name: '',
      briefIntro: '',
      hospital: '',
      ks: '',
      detailUrl: '',
      imgUrls: [
        './images/doctor-0.png'
      ]
    }
  },
  mounted () {
    projectApi.fetchAllDoctors('', this.axiosCancelToken)
      .then((data) => {
        if (data.data) {
          data.data.forEach(doctor => {
            if (parseInt(doctor.id) === parseInt(this.$route.params.doctorId)) {
              console.log(doctor)
              this.name = doctor.name
              this.briefIntro = doctor.jj
              this.hospital = doctor.yy
              this.ks = doctor.ks
              this.detailUrl = doctor.jsurl
              if (doctor.url) {
                this.imgUrls.unshift(`photo${doctor.url}`)
              }
            }
          })
        } else {
          this.$store.commit('showErrPopup', '获取医生信息失败')
        }
      })
  },
  methods: {
    imgPrev () {
      this.currentImgIndex--
      if (this.currentImgIndex < 0) {
        this.currentImgIndex = this.imgUrls.length - 1
      }
    },
    imgNext () {
      this.currentImgIndex++
      if (this.currentImgIndex > this.imgUrls.length - 1) {
        this.currentImgIndex = 0
      }
    },
    goDetailUrl () {
      location.href = this.detailUrl
    }
  }
}
</script>

<style scoped>
.m-doctor {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.m-doctor .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 22.5vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
  color: #fff;
}
.m-doctor .m-head .u-back {
  display: block;
  position: absolute;
  top: 6.8vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-doctor .m-head .u-name {
  margin-top: 4.4vh;
  font-size: 4vh;
  font-weight: bold;
}
.m-doctor .m-head .u-name-sub {
  margin-top: 1.35vh;
  font-size: 3.3vh;
}
.m-doctor .m-doctor-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 77.5vh;
  overflow: auto;
}
.m-doctor .m-doctor-content .m-img {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
  width: 89.3vw;
}
.m-doctor .m-doctor-content .m-img>.m-action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16vw;
  height: 16vw;
  background: linear-gradient(to right, #2d8fff, #9bcaff);
  border-radius: 50%;
}
.m-doctor .m-doctor-content .m-img>.m-action>.u-img {
  display: block;
  width: 3vw;
  height: auto;
}
.m-doctor .m-doctor-content .m-img>.u-img {
  width: 45.6vw;
  height: 45.6vw;
  background: #d8d8d8;
  border-radius: 100%;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
}
.m-doctor .m-doctor-content .m-detail-btn {
  display: flex;
  align-items: center;
  margin-top: 4.5vh;
  color: #64acff;
  font-size: 3.1vh;
}
.m-doctor .m-doctor-content .u-info {
  margin-top: 4.5vh;
  padding: 2.9vh 3.7vw 2.9vh 4.2vw;
  width: 83.2vw;
  height: 22vh;
  color: #7cb9ff;
  font-size: 2.6vh;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
  box-sizing: border-box;
}
.m-doctor .m-doctor-content .u-btn {
  position: absolute;
  left: 50%;
  bottom: 3.67vh;
  width: 86.9vw;
  height: 8vh;
  background: #2d8fff;
  border-radius: 4vh;
  box-shadow: 0 1.8vh 2.7vh 0 rgba(45, 143, 255, 0.3);
  color: #fff;
  line-height: 8vh;
  font-size: 3vh;
  text-align: center;
  transform: translateX(-50%);
}
.m-doctor .fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s;
}
.m-doctor .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
