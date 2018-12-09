<template>
  <div id="app">
    <van-popup v-model="$store.state.showError" position="top" :overlay="false" class="u-popup-error">
      {{$store.state.errMsg}}
    </van-popup>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app .u-popup-error {
  background-color: #e64340;
  padding-left: 6.5vh;
  height: 7vh;
  line-height: 7vh;
  color: #fff;
  font-size: 2.7vh;
}
</style>
