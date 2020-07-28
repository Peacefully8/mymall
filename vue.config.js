module.exports = {
  configureWebpack: {
    resolve:{
      extensions: ['js', 'vue'],
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}



