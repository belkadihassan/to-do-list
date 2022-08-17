const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer : {
    proxy : {
      '^/api' : {
        target : 'https://brilliant-sherbet-298c55.netlify.app',
        changeOrigin : true,
        logLevel : 'debug',
        pathRewrite : { '^/api': '/'},
      } 
    }
  }
}