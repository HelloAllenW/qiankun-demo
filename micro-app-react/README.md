# micro-app-react

## 相关命令
1. 启动： `npm start` 
2. 打包： `npm run build`
3. 安装依赖：`yarn install`

## 改造为qiankun的微应用
1. 在`config.overrides.js`中修改两点：1是打包方式改造，2是解决开发环境跨域问题。
2. src目录下新建`public-path.js`，并写入内容。
3. 入口文件index.tsx修改：  
（1）顶部引入`public-path.js`；  
（2）`ReactDOM.render`中的根DOM ID不能和其他微应用重复，且保证和当前项目中的`index.html`中一致；  
（3）暴露`qiankun`生命周期钩子；
