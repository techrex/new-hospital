<template>
  <div class="m-hospitals">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-title">找医院</div>
      <img src="../assets/images/search.png" class="u-search" @click="showSearch = true">
    </div>
    <div class="m-hospitals-container">
      <div v-for="(hospital, index) in hospitals" :key="index" class="m-hospital"
        @click="$router.push({
          name: 'Hospital',
          params: { hospitalId: hospital.id }
          })">
        <div class="u-img f-img-1"></div>
        <div class="m-content">
          <div class="u-name">{{hospital.name}}</div>
        </div>
        <div class="m-rate">{{hospital.dq}}</div>
      </div>
    </div>
    <transition name="fade">
      <HospitalSearch v-if="showSearch" class="m-hospital-search" @close="showSearch = false"></HospitalSearch>
    </transition>
  </div>
</template>

<script>
import projectApi from '@/api/project'
import HospitalSearch from './components/HospitalSearch'
export default {
  name: 'Hospitals',
  components: {
    HospitalSearch
  },
  data () {
    return {
      hospitals: [],
      showSearch: false
    }
  },
  mounted () {
    projectApi.fetchAllHospitals(this.axiosCancelToken)
      .then((data) => {
        if (data.data) {
          this.hospitals = data.data
        } else {
          this.$store.commit('showErrPopup', '获取医院列表失败')
        }
      })
  },
  methods: {
  }
}
</script>

<style scoped>
.m-hospitals {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
}
.m-hospitals .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 22.5vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
}
.m-hospitals .m-head .u-back {
  position: absolute;
  top: 6.8vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-hospitals .m-head .u-title {
  margin-top: 7.2vh;
  color: #fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-hospitals .m-head .u-search {
  position: absolute;
  display: block;
  top: 6.8vh;
  right: 6.9vw;
  width: auto;
  height: 4.5vh;
}
.m-hospitals .m-hospitals-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh 0 4.2vh;
  width: 100%;
  box-sizing: border-box;
}
.m-hospitals .m-hospital {
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
.m-hospitals .m-hospital:last-child {
  margin-bottom: 0;
}
.m-hospitals .m-hospital .u-img {
  position: absolute;
  left: 9.3vw;
  background: center / contain no-repeat;
}
.m-hospitals .m-hospital .u-img.f-img-1 {
  top: 3.75vh;
  width: 11vw;
  height: 8.17vh;
  background-image: url(../assets/images/medicine-book.png);
}
.m-hospitals .m-hospital .u-img.f-img-2 {
  top: 4.65vh;
  width: 10.5vw;
  height: 6.15vh;
  background-image: url(../assets/images/hospital-2.png);
}
.m-hospitals .m-hospital .m-content {
  position: absolute;
  top: 3.75vh;
  left: 25.86vw;
}
.m-hospitals .m-hospital .m-content .u-name {
  font-size: 6.5vw;
  font-weight: bold;
}
.m-hospitals .m-hospital .m-content .u-location {
  position: relative;
  margin-top: 1vh;
  padding-left: 4.8vw;
  font-size: 3.7vw;
}
.m-hospitals .m-hospital .m-content .u-location:before {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3.5vw;
  height: 2.4vh;
  background: url(../assets/images/pin.png) left bottom / contain no-repeat;
}
.m-hospitals .m-hospital .m-rate {
  position: absolute;
  right: 6vw;
  bottom: 3.3vh;
  font-size: 4vw;
}
/* .m-hospitals .m-hospital .m-rate:before {
  content: "";
  display: inline-block;
  position: absolute;
  left: -6.4vw;
  bottom: 0;
  width: 5.2vw;
  height: 2.7vh;
  background: url(../assets/images/star.png) left bottom / contain no-repeat;
} */
.m-hospitals .m-hospital-search {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.m-hospitals .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.m-hospitals .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
