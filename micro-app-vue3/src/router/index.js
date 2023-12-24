import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/about',
        component: () => import('@/views/about/index.vue'),
    },
];

const router = createRouter({
    // 1. 设置 History 路由时必须添加base
    // history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/micro-app-vue3" : "/"),
    // 2. Hash路由设置方法，hash不需要设置base
    history: createWebHashHistory(),
    routes,
});

export default router