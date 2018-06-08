import Vue from 'vue'
import Router from 'vue-router'
import ewm from '@/components/ewm/index'
import ewmCh from '@/router/ewmCh'

import elementCity from '@/components/elementCity/index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/ewm'
    },
    {
      path: '/ewm',
      name: 'ewm',
      component: ewm,
      children:ewmCh
    },
    {
      path:'/elementCity',
      name:'elementCity',
      component:elementCity
    }
  ]
})
