import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    title: 'home',
    icon: 'icon-shouye',
    component: () => import('@/views/HomeView.vue')
  },
  {
    // 当微应用为Hitory时，需要多添加一项路由配置以适配微应用的路由
    hidden: true,
    name: 'microAppVue2',
    path: '/micro-app-vue2/*',
    component: () => import('@/views/microAppVue2/index.vue')
  },
  {
    name: 'microAppVue2',
    path: '/micro-app-vue2',
    title: 'micro-app-vue2',
    icon: 'icon-16_wangluojiankong_daixuan',
    component: () => import('@/views/microAppVue2/index.vue')
  },
  {
    name: 'microAppVue3',
    path: '/micro-app-vue3',
    title: 'micro-app-vue3',
    icon: 'icon-JVMxinxifuwuqixinxi',
    component: () => import('@/views/microAppVue3/index.vue')
  },
  {
    name: 'microAppReact',
    path: '/micro-app-react',
    title: 'micro-app-react',
    icon: 'icon-instrum',
    component: () => import('@/views/microAppReact/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
