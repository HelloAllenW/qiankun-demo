/**
 * 由插件 react-app-rewired 提供支持修改 react 脚手架配置
 * 1. 安装：npm install react-app-rewired --save-dev
 * 2. 根目录创建 config-overrides.js 并进行自定义配置
 * 3. 替换package.json中scripts：react-scripts改为react-app-rewired
 */
const packageName = require('./package.json').name;
module.exports = {
  webpack: (config) => {
    // 1. 打包方式改造
    config.output.library = packageName;
    config.output.libraryTarget = "umd";
    config.output.globalObject = "window";
    return config;
  },
  devServer: (_) => {
    const config = _;
     // 2. 配置跨域请求头，解决开发环境的跨域问题
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
