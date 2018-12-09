import axios from 'axios'
const axiosCancelTokenMixin = {
  data: function () {
    return {
      axiosCancelToken: ''
    }
  },
  mounted () {
    this.createAxiosCancelToken()
  },
  beforeDestroy () {
    this.axiosCancel('请求已取消')
  },
  methods: {
    createAxiosCancelToken () {
      this.axiosCancelToken = new axios.CancelToken((c) => {
        this.axiosCancel = c
      })
    }
  }
}

export default axiosCancelTokenMixin
