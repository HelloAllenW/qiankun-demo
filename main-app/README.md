# qiankun-main

## Available Scripts
In the project directory, you can run:
1. 启动： `yarn serve`
2. 打包： `yarn build`
3. 安装依赖：`yarn install`

## 改造为qiankun的主应用
1. `yarn add qiankun` 或者 `npm i qiankun -S`；
2. 在入口`main.js`中注册所有微应用并开启qiankun；
3. 每个微应用要有一个对应的单文件组件进行挂载，并在mounted中进行判断如果未开启qiankun则进行开启；
4. 配置侧边栏和路由；
