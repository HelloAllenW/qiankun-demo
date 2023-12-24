import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index.vue'
import about from '@/views/about/index.vue'
 
Vue.use(Router)
 
export default new Router({
  // 1. 设置history模式
  mode: 'history',
  // 2. 设置base，值和主应用中的activeRule保持一致
  base: window.__POWERED_BY_QIANKUN__ ? "/micro-app-vue2" : "/",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})