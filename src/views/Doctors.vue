<template>
  <div class="m-doctors">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-title">找医生</div>
    </div>
    <div class="m-doctors-container">
      <template v-if="doctors.length">
        <div v-for="(doctor, index) in doctors" :key="index" class="m-doctor"
          @click="$router.push({
            name: 'Doctor',
            params: { doctorId: doctor.id }
            })">
          <img class="u-img" :src="`photo${doctor.url}`">
          <div class="m-content">
            <div class="u-name">{{doctor.name}}</div>
          </div>
          <div class="m-rate">5.0</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import projectApi from '@/api/project'
export default {
  name: 'Doctors',
  components: {
  },
  data () {
    return {
      doctors: []
    }
  },
  mounted () {
    if (!this.$route.params.doctorType) {
      this.$store.commit('showErrPopup', '医生类型')
      this.$router.back()
      return false
    }
    projectApi.fetchAllDoctors(
      this.$route.params.doctorType === 'all' ? '' : this.$route.params.doctorType,
      this.axiosCancelToken
    ).then((data) => {
      if (data.data) {
        this.doctors = data.data
      } else {
        this.$store.commit('showErrPopup', '获取医生列表失败')
      }
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.m-doctors {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
}
.m-doctors .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 22.5vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
}
.m-doctors .m-head .u-back {
  position: absolute;
  top: 6.8vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-doctors .m-head .u-title {
  margin-top: 7.2vh;
  color: #fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-doctors .m-head .u-search {
  position: absolute;
  display: block;
  top: 6.8vh;
  right: 6.9vw;
  width: auto;
  height: 4.5vh;
}
.m-doctors .m-doctors-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh 0 4.2vh;
  width: 100%;
  box-sizing: border-box;
}
.m-doctors .m-doctor {
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
.m-doctors .m-doctor:last-child {
  margin-bottom: 0;
}
.m-doctors .m-doctor .u-img {
  position: absolute;
  top: 3.75vh;
  left: 6.67vw;
  width: 13.3vw;
  height: 13.3vw;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 2.7vh 0 #2d8fff;
  object-fit: cover;
}
.m-doctors .m-doctor .m-content {
  position: absolute;
  top: 3.75vh;
  left: 25.86vw;
}
.m-doctors .m-doctor .m-content .u-name {
  font-size: 6.5vw;
  font-weight: bold;
}
.m-doctors .m-doctor .m-content .u-location {
  position: relative;
  margin-top: 1vh;
  padding-left: 4.8vw;
  font-size: 3.7vw;
}
.m-doctors .m-doctor .m-content .u-location:before {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3.5vw;
  height: 2.4vh;
  background: url(../assets/images/pin.png) left bottom / contain no-repeat;
}
.m-doctors .m-doctor .m-rate {
  position: absolute;
  right: 6vw;
  bottom: 3.3vh;
  font-size: 5.4vw;
  font-weight: bold;
}
.m-doctors .m-doctor .m-rate:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: -6.4vw;
  bottom: 0;
  width: 5.2vw;
  height: 2.7vh;
  background: url(../assets/images/star.png) left bottom / contain no-repeat;
}
</style>
