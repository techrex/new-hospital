<template>
  <div class="m-drug-search">
    <div class="m-input-container" style="margin-top: 4.12vh">
      <img src="../../assets/images/search-drugs.png" class="u-input-icon">
      <div v-if="searchWord === ''" class="u-input-placeholder">搜索药品</div>
      <input v-model="searchWord" type="text" name="userName" class="u-input">
    </div>
    <transition name="fade">
      <div
      v-if="searchWord && '药品A-1'.indexOf(searchWord) !== -1"
        class="m-drug"
        @click="$router.push({
          name: 'Drug',
          params: { drugId: 'A-1' }
        })">
        <img src="../../assets/images/drug-search.png" class="u-img">
        <div class="u-name">药品A-1</div>
      </div>
    </transition>
    <div class="m-close" @click="$emit('close')">
      <img src="../../assets/images/close.png" class="u-img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrugSearch',
  data () {
    return {
      searchWord: ''
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.m-drug-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.68);
  overflow: auto;
}
.m-drug-search .m-input-container {
  position: relative;
  width: 91.3vw;
  height: 8.77vh;
  background: #fff;
  border-radius: 4.4vh;
}
.m-drug-search .u-input-icon {
  display: inline-block;
  position: absolute;
  margin-top: -1.8vh;
  top: 50%;
  left: 6.8vw;
  width: auto;
  height: 4.12vh;
}
.m-drug-search .u-input-placeholder {
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
.m-drug-search .u-input {
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
.m-drug-search .u-input:focus {
  outline: none;
}
.m-drug-search .m-drug {
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
.m-drug-search .m-drug .u-img {
  display: block;
  position: absolute;
  top: 3.75vh;
  left: 9.3vw;
  width: 11vw;
  height: 8.17vh;
  object-fit: contain;
}
.m-drug-search .m-drug .u-name {
  position: absolute;
  top: 5.25vh;
  left: 24.8vw;
  color: #2d8fff;
  font-size: 4vh;
  font-weight: bold;
}
.m-drug-search .m-close {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.4vh;
  width: 14vw;
  height: 14vw;
  background: linear-gradient(to right, #2d8fff, #9bcaff);
  border-radius: 50%;
}
.m-drug-search .m-close .u-img {
  width: 5.3vw;
  height: auto;
}
.m-drug-search .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.m-drug-search .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
