<template>
  <div class="m-index">
    <div class="m-head">
      <div class="u-title">选择你需要的服务</div>
    </div>
    <div class="m-services">
      <div class="m-service" @click="$router.push({ name: 'DoctorTypes' })">
        <div class="u-img f-doctor"></div>
        <div class="u-text">找医生</div>
      </div>
      <div class="m-service" @click="$router.push({ name: 'Hospitals' })">
        <div class="u-img f-hospital"></div>
        <div class="u-text">找医院</div>
      </div>
      <div class="m-service" @click="$router.push({ name: 'Drugs' })">
        <div class="u-img f-pills"></div>
        <div class="u-text">找药品</div>
      </div>
      <div class="m-service" @click="$router.push({ name: 'Appointments' })">
        <div class="u-img f-appointment"></div>
        <div class="u-text">预约详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.m-index {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.m-index .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 22.5vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
}
.m-index .m-head .u-title {
  margin-top: 7.2vh;
  color: #fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-index .m-services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4.5vh 5.3vw 7.3vh;
  width: 100%;
  /* height: 77.5vh; */
  box-sizing: border-box;
}
.m-index .m-services .m-service {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 2.25vh;
  padding: 1.5vh;
  width: 42.6vw;
  height: 20vh;
  background: url(../assets/images/mask.png) center / contain no-repeat;
  border-radius: 10px;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
  box-sizing: border-box;
}
.m-index .m-services .m-service .u-img {
  width: 100%;
  flex: auto;
  background: transparent center / contain no-repeat;
}
.m-index .m-services .m-service .u-img.f-doctor {
  background-image: url(../assets/images/doctor.png);
}
.m-index .m-services .m-service .u-img.f-hospital {
  background-image: url(../assets/images/hospital.png);
}
.m-index .m-services .m-service .u-img.f-pills {
  background-image: url(../assets/images/pills.png);
}
.m-index .m-services .m-service .u-img.f-appointment {
  background-image: url(../assets/images/appointment.png);
}
.m-index .m-services .m-service .u-img.f-clinic {
  background-image: url(../assets/images/clinic.png);
}
.m-index .m-services .m-service .u-img.f-chemistry {
  background-image: url(../assets/images/chemistry.png);
}
.m-index .m-services .m-service .u-text {
  padding-top: 1.4vh;
  color: #2d8fff;
  font-size: 3vh;
  text-align: center;
}
</style>
