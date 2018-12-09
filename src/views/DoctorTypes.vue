<template>
  <div class="m-doctor-types">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-title">找医生</div>
    </div>
    <div class="m-services">
      <div
        class="m-service"
        @click="$router.push({
          name: 'Doctors',
          params: {
            doctorType: 'all',
          }
        })">
        <div class="u-img f-doctor"></div>
        <div class="u-text">查看全部</div>
      </div>
      <div
        class="m-service"
        @click="$router.push({
          name: 'Doctors',
          params: {
            doctorType: '呼吸内科',
          }
        })">
        <div class="u-img f-doctor"></div>
        <div class="u-text">呼吸内科专家</div>
      </div>
      <div
        class="m-service"
        @click="$router.push({
          name: 'Doctors',
          params: {
            doctorType: '心脏病',
          }
        })">
        <div class="u-img f-doctor-1"></div>
        <div class="u-text">心脏病专家</div>
      </div>
      <div
        class="m-service"
        @click="$router.push({
          name: 'Doctors',
          params: {
            doctorType: '儿科',
          }
        })">
        <div class="u-img f-doctor-2"></div>
        <div class="u-text">儿科专家</div>
      </div>
      <div
        class="m-service"
        @click="$router.push({
          name: 'Doctors',
          params: {
            doctorType: '妇科',
          }
        })">
        <div class="u-img f-doctor-3"></div>
        <div class="u-text">妇科专家</div>
      </div>
      <div
        class="m-service"
        @click="$router.push({
          name: 'Doctors',
          params: {
            doctorType: '眼科',
          }
        })">
        <div class="u-img f-doctor-4"></div>
        <div class="u-text">眼科专家</div>
      </div>
      <div
        class="m-service"
        @click="$router.push({
          name: 'Doctors',
          params: {
            doctorType: '内分泌科',
          }
        })">
        <div class="u-img f-doctor-5"></div>
        <div class="u-text">内分泌科专家</div>
      </div>
      <div
        class="m-service"
        @click="$router.push({
          name: 'Doctors',
          params: {
            doctorType: '精神科',
          }
        })">
        <div class="u-img f-doctor-6"></div>
        <div class="u-text">精神科专家</div>
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
.m-doctor-types {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
}
.m-doctor-types .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 22.5vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
}
.m-doctor-types .m-head .u-back {
  display: block;
  position: absolute;
  top: 6.8vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-doctor-types .m-head .u-title {
  margin-top: 7.2vh;
  color: #fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-doctor-types .m-services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4.5vh 5.3vw 7.3vh;
  width: 100%;
  /* height: 77.5vh; */
  box-sizing: border-box;
}
.m-doctor-types .m-services .m-service {
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
.m-doctor-types .m-services .m-service .u-img {
  width: 100%;
  flex: auto;
  background: transparent center / contain no-repeat;
}
.m-doctor-types .m-services .m-service .u-img.f-doctor {
  background-image: url(../assets/images/doctor.png);
}
.m-doctor-types .m-services .m-service .u-img.f-doctor-1 {
  background-image: url(../assets/images/doctor-type-1.png);
}
.m-doctor-types .m-services .m-service .u-img.f-doctor-2 {
  background-image: url(../assets/images/doctor-type-2.png);
}
.m-doctor-types .m-services .m-service .u-img.f-doctor-3 {
  background-image: url(../assets/images/doctor-type-3.png);
}
.m-doctor-types .m-services .m-service .u-img.f-doctor-4 {
  background-image: url(../assets/images/doctor-type-4.png);
}
.m-doctor-types .m-services .m-service .u-img.f-doctor-5 {
  background-image: url(../assets/images/doctor-type-5.png);
}
.m-doctor-types .m-services .m-service .u-img.f-doctor-6 {
  background-image: url(../assets/images/doctor-type-6.png);
}
.m-doctor-types .m-services .m-service .u-text {
  padding-top: 1.4vh;
  color: #2d8fff;
  font-size: 3vh;
  text-align: center;
}
</style>
