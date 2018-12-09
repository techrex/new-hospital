<template>
  <div class="m-appointments">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-title">预约</div>
    </div>
    <div class="m-appointments-container">
      <template v-if="appointments.length">
        <div v-for="(appointment, index) in appointments" :key="index" class="m-appointment"
          @click="$router.push({
            name: 'Appointment',
            params: { appointmentId: index }
            })">
          <div class="u-number">{{index + 1}}</div>
          <div class="m-content">
            <div class="u-name">{{appointment.name}}</div>
            <div class="u-patient-name">{{appointment.xingming}}</div>
          </div>
          <div class="m-time">{{appointment.time}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import projectApi from '@/api/project'
export default {
  name: 'Appointments',
  components: {
  },
  data () {
    return {
      appointments: []
    }
  },
  mounted () {
    projectApi.fetchAllAppointments(this.axiosCancelToken)
      .then((data) => {
        if (data.data) {
          this.appointments = data.data
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
.m-appointments {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
}
.m-appointments .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 22.5vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
}
.m-appointments .m-head .u-back {
  position: absolute;
  top: 6.8vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-appointments .m-head .u-title {
  margin-top: 7.2vh;
  color: #fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-appointments .m-head .u-search {
  position: absolute;
  display: block;
  top: 6.8vh;
  right: 6.9vw;
  width: auto;
  height: 4.5vh;
}
.m-appointments .m-appointments-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh 0 4.2vh;
  width: 100%;
  box-sizing: border-box;
}
.m-appointments .m-appointment {
  flex: none;
  position: relative;
  margin-bottom: 3.2vh;
  width: 88.9vw;
  height: 15vh;
  background: #fff url(../assets/images/mask-hospitals.png) left 1.2vw top 1.72vh / auto 11.7vh no-repeat;
  border-radius: 10px;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
  color: #2d8fff;
}
.m-appointments .m-appointment:last-child {
  margin-bottom: 0;
}
.m-appointments .m-appointment .u-number {
  position: absolute;
  top: 3.75vh;
  left: 6.67vw;
  width: 13.3vw;
  height: 13.3vw;
  line-height: 13.3vw;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 2.7vh 0 #2d8fff;
  color: #64acff;
  font-size: 6.5vw;
  font-weight: bold;
  text-align: center;
}
.m-appointments .m-appointment .m-content {
  position: absolute;
  top: 3.75vh;
  left: 25.86vw;
}
.m-appointments .m-appointment .m-content .u-name {
  font-size: 6.5vw;
  font-weight: bold;
}
.m-appointments .m-appointment .m-content .u-patient-name {
  position: relative;
  margin-top: 1vh;
  font-size: 5.4vw;
}
.m-appointments .m-appointment .m-time {
  position: absolute;
  right: 6vw;
  bottom: 3.3vh;
  font-size: 3.4vw;
}
</style>
