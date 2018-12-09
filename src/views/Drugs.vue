<template>
  <div class="m-drugs">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-title">找药品</div>
      <img src="../assets/images/search.png" class="u-search" @click="showSearch = true">
    </div>
    <van-tabs
      class="m-drugs-container"
      color="#2d8fff"
      :swipe-threshold="13">
      <van-tab
        v-for="index in 26"
        :title="asciiToCapital(index)"
        :key="index">
        <div class="m-drugs-list">
          <div
            v-for="i in 8"
            :key="i"
            class="m-drug"
            @click="$router.push({
              name: 'Drug',
              params: {
                drugId: `${asciiToCapital(index)}-${i}`
              }
            })">
            <img src="../assets/images/drug.png" class="u-img">
            <div class="u-name">药品{{asciiToCapital(index)}}-{{i}}</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <transition name="fade">
      <DrugSearch v-if="showSearch" class="m-drag-search" @close="showSearch = false"></DrugSearch>
    </transition>
  </div>
</template>

<script>
import DrugSearch from './components/DrugSearch'
export default {
  name: 'Drugs',
  components: {
    DrugSearch
  },
  data () {
    return {
      showSearch: false
    }
  },
  mounted () {
  },
  methods: {
    asciiToCapital (num) {
      return String.fromCharCode(num + 64)
    }
  }
}
</script>

<style scoped>
.m-drugs {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.m-drugs .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 15.4vh;
  background: #64acff url(../assets/images/wave-index.png) center bottom / 100% auto no-repeat;
}
.m-drugs .m-head .u-back {
  position: absolute;
  top: 3vh;
  left: 8.9vw;
  width: auto;
  height: 4.5vh;
}
.m-drugs .m-head .u-title {
  margin-top: 3.45vh;
  color: #fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-drugs .m-head .u-search {
  position: absolute;
  display: block;
  top: 2.5vh;
  right: 6.9vw;
  width: auto;
  height: 4.5vh;
}
.m-drugs .m-drugs-container {
  padding-top: 5.4vh;
  width: 100%;
  height: 84.6vh;
  overflow: hidden;
}
.m-drugs .m-drugs-list {
  display: flex;
  padding: 2.25vh 4vw 0;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 79.2vh;
  background: #f3f7fd;
  box-sizing: border-box;
  overflow: auto;
}
.m-drugs .m-drugs-list .m-drug {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.25vh;
  width: 44vw;
  height: 25.26vh;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
}
.m-drugs .m-drugs-list .m-drug .u-img {
  margin-top: 2.7vh;
  width: 17.2vw;
  height: 14.7vh;
  object-fit: contain;
}
.m-drugs .m-drugs-list .m-drug .u-name {
  margin-top: 3vh;
  color: #2d8fff;
  font-size: 2.4vh;
  font-weight: bold;
}
.m-drugs .m-drag-search {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.m-drugs .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.m-drugs .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style>
.m-drugs .van-tabs .van-tabs__line {
  width: 8vw;
}
.m-drugs .van-tabs--line .van-tabs__wrap {
  height: 5.4vh;
}
.m-drugs .van-tabs .van-tab {
  padding: 0;
  flex-basis: 7.7vw;
  line-height: 5.4vh;
  font-size: 2.25vh;
}
</style>
