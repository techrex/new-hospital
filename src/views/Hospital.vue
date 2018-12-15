<template>
  <div class="m-hospital">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-name">{{name}}</div>
      <div class="u-name-sub">{{dq}}</div>
    </div>
    <transition appear name="fade">
      <div class="m-hospital-content">
        <div class="m-img">
          <div class="m-action">
            <img src="../assets/images/back.png" class="u-img" @click="imgPrev">
          </div>
          <img :src="imgUrls[currentImgIndex]" class="u-img">
          <div class="m-action">
            <img src="../assets/images/next.png" class="u-img" @click="imgNext">
          </div>
        </div>
        <div class="m-detail-btn" @click="doShowDetail">详情信息</div>
        <div class="u-info">
          {{ks}}<br>
          {{tsks}}
        </div>
        <div
          class="u-btn"
          @click="$router.push({
            name: 'AppointmentForm',
            params: {
              hospital: name,
              id: $route.params.hospitalId
            }
          })">预约</div>
        <transition appear name="fade">
          <div v-if="showDetail" class="m-detail-container">
            <div class="u-detail" v-html="yyxq"></div>
            <div
              class="u-btn"
              @click="doHideDetail">返回</div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import projectApi from '@/api/project'
export default {
  name: 'Hospital',
  components: {
  },
  data () {
    return {
      name: '',
      dq: '',
      ks: '',
      tsks: '',
      yyxq: '',
      currentImgIndex: 0,
      imgUrls: [
        './images/hospital-detail.png',
        './images/doctor-0.png'
      ],
      showDetail: false
    }
  },
  mounted () {
    projectApi.fetchAllHospitals(this.axiosCancelToken)
      .then((data) => {
        if (data.data) {
          data.data.forEach(hospital => {
            if (parseInt(hospital.id) === parseInt(this.$route.params.hospitalId)) {
              console.log(hospital)
              this.name = hospital.name
              this.dq = hospital.dq
              this.ks = hospital.ks
              this.tsks = hospital.tsks
              this.yyxq = hospital.yyxq.replace(/\n/g, '<br>')
              if (hospital.img) {
                this.imgUrls.unshift(`photo${hospital.img}`)
              }
            }
          })
        } else {
          this.$store.commit('showErrPopup', '获取医院信息失败')
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
    doShowDetail () {
      this.showDetail = true
    },
    doHideDetail () {
      this.showDetail = false
    }
  }
}
</script>

<style scoped>
.m-hospital {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.m-hospital .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 22.5vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
  color: #fff;
}
.m-hospital .m-head .u-back {
  display: block;
  position: absolute;
  top: 6.8vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-hospital .m-head .u-name {
  margin-top: 4.4vh;
  font-size: 4vh;
  font-weight: bold;
}
.m-hospital .m-head .u-name-sub {
  margin-top: 1.35vh;
  font-size: 3.3vh;
}
.m-hospital .m-hospital-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 77.5vh;
  overflow: auto;
}
.m-hospital .m-hospital-content .m-img {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
  width: 89.3vw;
}
.m-hospital .m-hospital-content .m-img>.m-action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16vw;
  height: 16vw;
  background: linear-gradient(to right, #2d8fff, #9bcaff);
  border-radius: 50%;
}
.m-hospital .m-hospital-content .m-img>.m-action>.u-img {
  display: block;
  width: 3vw;
  height: auto;
}
.m-hospital .m-hospital-content .m-img>.u-img {
  width: 45.6vw;
  height: 45.6vw;
  background: #d8d8d8;
  border-radius: 100%;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
}
.m-hospital .m-hospital-content .m-detail-btn {
  display: flex;
  align-items: center;
  margin-top: 4.5vh;
  color: #64acff;
  font-size: 3.1vh;
}
.m-hospital .m-hospital-content .u-info {
  margin-top: 4.5vh;
  padding: 2.9vh 3.7vw 2.9vh 4.2vw;
  width: 83.2vw;
  height: 22vh;
  color: #7cb9ff;
  font-size: 2.6vh;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
  box-sizing: border-box;
}
.m-hospital .u-btn {
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
.m-hospital .m-detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  overflow: hidden;
}
.m-hospital .u-detail {
  margin-top: 4.5vh;
  padding: 2.9vh 3.7vw 2.9vh 4.2vw;
  width: 83.2vw;
  height: 56.8vh;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
  box-sizing: border-box;
  color: #7cb9ff;
  font-size: 2.6vh;
  text-indent: 2em;
  overflow: auto;
}
.m-hospital .fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s;
}
.m-hospital .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
