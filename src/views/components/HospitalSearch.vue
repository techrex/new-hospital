<template>
  <div class="m-hospital-search">
    <div class="m-input-container" style="margin-top: 4.12vh">
      <img src="../../assets/images/search-drugs.png" class="u-input-icon">
      <div v-if="searchWord === ''" class="u-input-placeholder">搜索医院</div>
      <input v-model="searchWord" type="text" name="userName" class="u-input">
    </div>
    <transition name="fade">
      <template v-if="results.length">
        <div
          v-for="(hospital, index) in results"
          :key="index"
          class="m-hospital"
          @click="$router.push({
            name: 'Hospital',
            params: { hospitalId: hospital.id }
          })">
          <img src="../../assets/images/hospital-2.png" class="u-img">
          <div class="u-name">{{hospital.name}}</div>
        </div>
      </template>
    </transition>
    <div class="m-close" @click="$emit('close')">
      <img src="../../assets/images/close.png" class="u-img">
    </div>
  </div>
</template>

<script>
import projectApi from '@/api/project'
export default {
  name: 'DrugSearch',
  data () {
    return {
      searchWord: '',
      results: []
    }
  },
  watch: {
    searchWord (val) {
      if (val) {
        projectApi.searchHospital(val, this.axiosCancelToken)
          .then((data) => {
            if (data.data) {
              this.results = data.data
            } else {
              this.$store.commit('showErrPopup', '获取搜索结果失败')
            }
          })
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.m-hospital-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.68);
  overflow: auto;
}
.m-hospital-search .m-input-container {
  position: relative;
  width: 91.3vw;
  height: 8.77vh;
  background: #fff;
  border-radius: 4.4vh;
}
.m-hospital-search .u-input-icon {
  display: inline-block;
  position: absolute;
  margin-top: -1.8vh;
  top: 50%;
  left: 6.8vw;
  width: auto;
  height: 4.12vh;
}
.m-hospital-search .u-input-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 8.77vh;
  color: #2d8fff;
  font-size: 3.9vh;
  text-align: center;
}
.m-hospital-search .u-input {
  position: absolute;
  padding-left: 16vw;
  padding-right: 7.5vw;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  line-height: 8.77vh;
  font-size: 3.9vh;
  background: transparent;
  border: 0;
  border-radius: 4.4vh;
  z-index: 5;
}
.m-hospital-search .u-input:focus {
  outline: none;
}
.m-hospital-search .m-hospital {
  flex: none;
  position: relative;
  margin-top: 4.2vh;
  width: 88.9vw;
  height: 15vh;
  background: #fff url(../../assets/images/mask-hospitals.png) left 1.2vw top 1.72vh / auto 11.7vh no-repeat;
  border-radius: 10px;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
  color: #2d8fff;
}
.m-hospital-search .m-hospital .u-img {
  display: block;
  position: absolute;
  top: 4.65vh;
  left: 9.3vw;
  width: 10.5vw;
  height: 6.15vh;
  object-fit: contain;
}
.m-hospital-search .m-hospital .u-name {
  position: absolute;
  top: 5.25vh;
  left: 24.8vw;
  color: #2d8fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-hospital-search .m-close {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.4vh;
  width: 14vw;
  height: 14vw;
  background: linear-gradient(to right, #2d8fff, #9bcaff);
  border-radius: 50%;
}
.m-hospital-search .m-close .u-img {
  width: 5.3vw;
  height: auto;
}
.m-hospital-search .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.m-hospital-search .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
