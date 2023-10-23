import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import Main from '@/page/Main/index.vue'

// 创建路由表单
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Main,
    meta: { title: 'Es House' }
  },
  {
    path: '/detail/:id',
    component: () => import('@/page/Detail/index.vue'),
    meta: { title: '详情页面' },
    // 开启 props ，路由params直接通过 props 拿到
    props: true
  },
  {
    path: '/synopsis/:id',
    component: () => import('@/page/Synopsis/index.vue'),
    meta: { title: '描述页面' },
    props: true
  }
]

// 注册路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to: RouteLocationNormalized) => {
  document.title = to.meta.title as string
})

export default router
