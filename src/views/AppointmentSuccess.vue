<template>
  <div class="m-register-success">
    <div class="m-head">
      <img src="../assets/images/wave-register.png" class="u-wave">
      <div class="m-check-container">
        <div class="u-check"></div>
      </div>
      <div class="u-text">预约成功！</div>
    </div>
    <div class="m-bottom">
      <div class="u-btn" @click="$router.push({ name: 'Appointments' })">返回</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterSuccess',
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
.m-register-success {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.m-register-success .m-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 87vh;
  background: linear-gradient(to bottom, #2ad484, #11959b);
}
.m-register-success .m-head .u-wave {
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
}
.m-register-success .m-head .m-check-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24.5vh;
  width: 50vw;
  height: 50vw;
  background: #fff;
  border-radius: 50%;
}
.m-register-success .m-head .m-check-container .u-check {
  position: relative;
  margin-top: -3.37vw;
  width: 24.13vw;
  height: 15.26vw;
  transform: rotate(-45deg);
  overflow: hidden;
}
.m-register-success .m-head .m-check-container .u-check:before,
.m-register-success .m-head .m-check-container .u-check:after {
  content: "";
  position: absolute;
  background: #25c689;
}

.m-register-success .m-head .m-check-container .u-check:before {
  width: 6.78vw;
  height: 100%;
  left: 0;
  animation: doCheckLeft 0.3s linear 0.5s 1 both;
}
.m-register-success .m-head .m-check-container .u-check:after {
  width: 100%;
  height: 6.78vw;
  bottom: 0;
  animation: doCheckRight 0.3s linear 0.8s 1 both;
}
.m-register-success .m-head .u-text {
  margin-top: 6.5vh;
  color: #fff;
  font-size: 5vh;
}
.m-register-success .m-bottom {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 13vh;
}
.m-register-success .m-bottom .u-btn {
  margin-top: 1.27vh;
  width: 87vw;
  height: 8.1vh;
  line-height: 8.1vh;
  color: #fff;
  background: #07bba4;
  font-size: 3vh;
  text-align: center;
  border-radius: 4.05vh;
  box-shadow: 0 1vh 2.7vh 0 rgba(45, 143, 255, 0.3);
}
</style>

<style>
@-webkit-keyframes doCheckLeft {
  0% {
    top: -100%
  }
  100% {
    top: 0%
  }
}
@-webkit-keyframes doCheckLeft {
  0% {
    top: -100%
  }
  100% {
    top: 0%
  }
}
@-webkit-keyframes doCheckRight {
  0% {
    left: -100%
  }
  100% {
    left: 0%
  }
}
@-webkit-keyframes doCheckRight {
  0% {
    left: -100%
  }
  100% {
    left: 0%
  }
}
</style>
