# micro-app-vue3

## 相关命令
1. 启动： `npm run serve`
2. 打包： `npm run build`  
3. 安装依赖：`cnpm install` 
- 在node 18.x.x版本下安装依赖后执行报错，执行npm uninstall vue-loader-v16再执行竟然神奇好了。

## 改造为qiankun的微应用
1. 在`vue.config.js`中修改两点：1是打包方式改造，2是解决开发环境跨域问题。
2. src目录下新建`public-path.js`，并写入内容。
3. 在router中设置hash模式。
4. 入口文件`main.js`修改：  
（1）顶部引入`public-path.js`；  
（2）暴露`qiankun`生命周期钩子；
