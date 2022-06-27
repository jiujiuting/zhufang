import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import Layout from '@/views/Layout'
import Login from '@/views/Login'
const Home = () => import('@/views/Home')
const Housing = () => import('@/views/Housing')
const Service = () => import('@/views/Service')
const My = () => import('@/views/My')

Vue.use(VueRouter)

const routes = [
  {
    // 路由规则
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'housing', component: Housing },
      { path: 'service', component: Service },
      { path: 'my', component: My }
    ]
  },
  { path: '/login', component: Login }
]
const router = new VueRouter({
  routes
})

export default router
