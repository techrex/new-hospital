module.exports = {
  baseUrl: './',
  assetsDir: 'static',
  devServer: {
    proxy: {
      'bfhkckcontrller/': {
        target: 'http://top.6cing.com/sss/bfhkckcontrller/',
        changeOrigin: true,
        pathRewrite: {
          '^/bfhkckcontrller/': ''
        }
      },
      'photo/': {
        target: 'http://top.6cing.com/photo/',
        changeOrigin: true,
        pathRewrite: {
          '^/photo/': ''
        }
      }
      // '/api': {
      //   target: '<url>',
      //   ws: true,
      //   changeOrigin: true
      // },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}
