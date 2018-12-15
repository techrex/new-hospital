<template>
  <div class="m-register-3-patient">
    <div class="u-title">出生日期</div>
    <div
      ref="birthDatePicker"
      class="m-data-picker-container">
      <van-datetime-picker
        class="m-data-picker"
        v-model="value.birthDate"
        type="date"
        :item-height="itemHeight"
        :min-date="minDate"
        :max-date="maxDate"
        :show-toolbar="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step3Patient',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      itemHeight: 44,
      minDate: new Date('1900-1-1'),
      maxDate: new Date()
    }
  },
  mounted () {
    let el = this.$refs['birthDatePicker']
    let cssObj
    let height
    if (window.getComputedStyle) {
      cssObj = window.getComputedStyle(el, null)
    } else if (el.currentStyle) {
      cssObj = el.currentStyle
    }
    if (cssObj) {
      height = parseFloat(cssObj.height)
    } else {
      height = el.offsetHeight
    }
    this.itemHeight = height / 5
  },
  methods: {
  }
}
</script>

<style scoped>
.m-register-3-patient {
  display: flex;
  flex-direction: column;
  padding: 4.8vh 0 5vh;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.m-register-3-patient .u-title {
  flex: none;
  margin-bottom: 5vh;
  color: #2d8fff;
  font-size: 6.1vh;
  text-align: center;
}
.m-register-3-patient .m-data-picker-container {
  flex: auto;
  width: 100%;
  box-sizing: border-box;
}
.m-register-3-patient .m-data-picker-container .m-data-picker {
  width: 100%;
  height: 100%;
}
</style>

<style>
.m-register-3-patient .van-picker-column__item {
  font-size: 3vh;
  color: #2d8fff;
  opacity: 0.5;
}
.m-register-3-patient .van-picker-column__item.van-picker-column__item--selected {
  font-size: 3.4vh;
  opacity: 1;
}
</style>
