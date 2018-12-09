<template>
  <div class="m-drugs">
    <div class="m-head">
      <img src="../assets/images/back.png" class="u-back" @click="$router.back()">
      <div class="u-title">药品{{$route.params.drugId}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drugs',
  components: {
  },
  data () {
    return {
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
</style>
