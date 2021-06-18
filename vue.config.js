const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        port: 8080,
        open: true,
        proxy: {
            '/api': {
                target: 'http://192.168.0.1:80',
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}