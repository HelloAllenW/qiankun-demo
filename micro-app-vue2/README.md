# micro-app-vue2

## 相关命令
1. 启动： `yarn serve`
2. 打包： `yarn build`
3. 安装依赖：`yarn install`  
**安装依赖时，需要先将node切换到14.x.x版本（18.x.x版本会安装失败）**

## 改造为qiankun的微应用
1. 在`vue.config.js`中修改两点：1是打包方式改造，2是解决开发环境跨域问题。
2. src目录下新建`public-path.js`，并写入内容。
3. 在`router`中设置`history`模式并设置`base`。
4. 入口文件`main.js`修改：  
（1）顶部引入`public-path.js`；  
（2）暴露`qiankun`生命周期钩子；
