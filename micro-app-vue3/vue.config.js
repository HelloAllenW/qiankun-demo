const { name } = require('./package.json')
module.exports = {
    lintOnSave: false,
    devServer: {
        port: "3001",
        disableHostCheck: true, // 关闭主机检查，使微应用可以被 fetch
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    },
    configureWebpack: {
        output: {
            library: name,
            libraryTarget: "umd"
        },
    },
};