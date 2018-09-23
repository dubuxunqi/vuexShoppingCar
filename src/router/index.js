import Vue from 'vue'
import Router from 'vue-router'
import Car from '@/components/Car'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/Car',
      name:"Car",
      component:Car
    }
  ]
})
