import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import UserPanel from '@/view/UserPanel'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'UserPanel',
      component: UserPanel
    },
  ]
})
