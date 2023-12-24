const packageName = require('./package.json').name;

module.exports = {
    lintOnSave:false,
    configureWebpack: {
        // 1. 打包方式改造
        output: {
            library: packageName,
            libraryTarget: "umd",
            jsonpFunction: `webpackJsonp_${packageName}`,
        },
    },
    devServer: {
        port: "3003",
        disableHostCheck: true,
        headers: {
            // 2. 解决开发环境跨域问题
            "Access-Control-Allow-Origin": "*",
        },
    }
};