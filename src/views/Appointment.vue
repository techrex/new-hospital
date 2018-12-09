<template>
  <div class="m-appointment">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-title">预约详情</div>
    </div>
    <transition appear name="fade">
      <div class="m-content">
        <div class="m-line">
          <div class="u-label">患者姓名：</div>
          <div class="u-text">{{realName}}</div>
        </div>
        <!-- <div class="m-line">
          <div class="u-label">联系方式：</div>
          <div class="u-text">137xxxxxxxx</div>
        </div> -->
        <div class="m-line">
          <div class="u-label">预约医院：</div>
          <div class="u-text">{{hospital}}</div>
        </div>
        <div class="m-line">
          <div class="u-label">预定时间：</div>
          <div class="u-text">{{time}}</div>
        </div>
        <div class="m-line">
          <div class="u-label">是否用车：</div>
          <div class="u-text">{{isNeedCar | apiBooleanNumber}}</div>
        </div>
        <div class="m-line">
          <div class="u-label">是否陪护：</div>
          <div class="u-text">{{isNeedAccompany | apiBooleanNumber}}</div>
        </div>
        <div class="m-line" style="display: block">
          <div class="u-label">备注：</div>
          <div class="u-text" style="margin-top: 1vh; width: 100%; word-break: break-all;">{{bz}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import projectApi from '@/api/project'
export default {
  name: 'AppointmentForm',
  components: {
  },
  filters: {
    apiBooleanNumber: function(value) {
      return parseInt(value) === 1 ? '是' : '否'
    }
  },
  data () {
    return {
      hospital: '',
      realName: '',
      time: '',
      isNeedCar: 1,
      isNeedAccompany: 1,
      bz: ''
    }
  },
  mounted () {
    projectApi.fetchAllAppointments(this.axiosCancelToken)
      .then((data) => {
        if (data.data && data.data[parseInt(this.$route.params.appointmentId)]) {
          this.hospital = data.data[parseInt(this.$route.params.appointmentId)].name
          this.time = data.data[parseInt(this.$route.params.appointmentId)].time
          this.realName = data.data[parseInt(this.$route.params.appointmentId)].xingming
          this.isNeedCar = data.data[parseInt(this.$route.params.appointmentId)].sfyc
          this.isNeedAccompany = data.data[parseInt(this.$route.params.appointmentId)].sfph
          let bz = data.data[parseInt(this.$route.params.appointmentId)].bz
          this.bz = bz === 'null' ? '' : bz
        } else {
          this.$store.commit('showErrPopup', '获取预约列表失败')
        }
      })
  },
  methods: {
  }
}
</script>

<style scoped>
.m-appointment {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.m-appointment .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 15.4vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
}
.m-appointment .m-head .u-back {
  position: absolute;
  top: 3vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-appointment .m-head .u-title {
  margin-top: 3.45vh;
  color: #fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-appointment .m-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 84.6vh;
  overflow: auto;
}
.m-appointment .m-line {
  display: flex;
  align-items: center;
  margin-top: 4vh;
  width: 87vw;
}
.m-appointment .m-line .u-label {
  margin-right: 6vw;
  color: #64acff;
  font-size: 3.1vh;
}
.m-appointment .m-line .u-text {
  color: #64acff;
  font-size: 3.1vh;
}
.m-appointment .m-line .u-switch {
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
}
.m-appointment .fade-enter-active, .fade-leave-active {
  transition: opacity 0.75s;
}
.m-appointment .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
