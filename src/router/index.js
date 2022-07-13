import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import Layout from '@/views/Layout'
import Login from '@/views/Login'
const Home = () => import('@/views/Home')
const Housing = () => import('@/views/Housing')
const Service = () => import('@/views/Service')
const My = () => import('@/views/My')
const MyRent = () => import('@/views/My/MyRent.vue')
const MyHousing = () => import('@/views/My/MyHousing.vue')
const CityList = () => import('@/views/Home/CityList.vue')
const TheMap = () => import('@/views/TheMap')
const HomeHousing = () => import('@/views/Home/Housing.vue')

Vue.use(VueRouter)

const routes = [
  {
    // 路由规则
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home, name: 'home' },
      { path: 'housing', component: Housing, name: 'housing' },
      { path: 'service', component: Service },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login, name: 'login' },
  { path: '/myrent', component: MyRent, name: 'myrent' },
  { path: '/myhousing', component: MyHousing, name: 'myhousing' },
  { path: '/citylist', component: CityList, name: 'citylist' },
  { path: '/themap', component: TheMap },
  { path: '/homehousing', component: HomeHousing }
]
const router = new VueRouter({
  routes
})

export default router
