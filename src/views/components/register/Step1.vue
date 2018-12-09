<template>
  <div class="m-register-1">
    <transition appear name="fade-0">
      <div class="m-item" @click="selectItem('doctor')">
        <div class="u-img f-doctor"></div>
        <div class="u-text">医生</div>
        <div class="u-radio">
          <img v-if="value === 'doctor'" src="../../../assets/images/checked.png" class="u-radio-checked">
        </div>
      </div>
    </transition>
    <transition appear name="fade-1">
      <div class="m-item" @click="selectItem('patient')">
        <div class="u-img f-patient"></div>
        <div class="u-text">病人</div>
        <div class="u-radio">
          <img v-if="value === 'patient'" src="../../../assets/images/checked.png" class="u-radio-checked">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'RegisterStep1',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    selectItem (index) {
      this.$emit('input', index)
    }
  }
}
</script>

<style scoped>
.m-register-1 {
  padding-top: 3vh;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.m-register-1 .m-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 2.5vh;
  padding: 1.5vh;
  width: 42.6vw;
  height: 20vh;
  background: url(../../../assets/images/mask.png) center / contain no-repeat;
  border-radius: 10px;
  box-shadow: 0 1vh 2.7vh 0 rgba(52, 153, 246, 0.29);
  box-sizing: border-box;
}
.m-register-1 .m-item .u-img {
  width: 100%;
  flex: auto;
  background: transparent center / contain no-repeat;
}
.m-register-1 .m-item .u-img.f-doctor {
  background-image: url(../../../assets/images/doctor.png);
}
.m-register-1 .m-item .u-img.f-hospital {
  background-image: url(../../../assets/images/hospital.png);
}
.m-register-1 .m-item .u-img.f-pills {
  background-image: url(../../../assets/images/pills.png);
}
.m-register-1 .m-item .u-img.f-patient {
  background-image: url(../../../assets/images/patient.png);
}
.m-register-1 .m-item .u-img.f-clinic {
  background-image: url(../../../assets/images/clinic.png);
}
.m-register-1 .m-item .u-img.f-chemistry {
  background-image: url(../../../assets/images/chemistry.png);
}
.m-register-1 .m-item .u-text {
  padding-top: 1.4vh;
  color: #2d8fff;
  font-size: 3vh;
  text-align: center;
}
.m-register-1 .m-item .u-radio {
  position: absolute;
  top: 1vh;
  right: 2vw;
  padding: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 4px #2d8fff;
  box-sizing: content-box;
}
.m-register-1 .m-item .u-radio .u-radio-checked {
  width: 100%;
  height: 100%;
}
.m-register-1 .fade-0-enter-active, .fade-0-leave-active {
  transition: opacity .3s ease-in;
}
.m-register-1 .fade-0-enter, .fade-0-leave-to {
  opacity: 0;
}
.m-register-1 .fade-1-enter-active, .fade-1-leave-active {
  transition: opacity .3s ease-in 0.3s;
}
.m-register-1 .fade-1-enter, .fade-1-leave-to {
  opacity: 0;
}
</style>
