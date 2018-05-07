import Vue from 'vue'
import Router from 'vue-router'
import Satoshi from '@/components/Satoshi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Satoshi',
      component: Satoshi
    }
  ]
})
