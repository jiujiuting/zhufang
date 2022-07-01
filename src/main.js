/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 移动端适配
import 'amfe-flexible'
// 引入 vant
import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
// 轮播组件借用的文件
import { Lazyload } from 'vant'
Vue.use(Lazyload)

Vue.config.productionTip = false

Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
