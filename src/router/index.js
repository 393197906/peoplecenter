import Vue from 'vue'
import Router from 'vue-router'
import PersonInfo from '@/view/PersonInfo'
import Safe from '@/view/Safe'
import Address from '@/view/Address'
import Order from '@/view/Order'
Vue.use(Router)

export default new Router({
  routes: [
    // Person Info
    {
      path: '/PersonInfo',
      name: 'PersonInfo',
      component: PersonInfo
    },
    {
      path: '/Safe',
      name: 'Safe',
      component: Safe
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    }
  ]
})
