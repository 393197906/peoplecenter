import Vue from 'vue'
import Router from 'vue-router'
import Center from '@/view/Center'
import PersonInfo from '@/view/PersonInfo'
import Safe from '@/view/Safe'
import Address from '@/view/Address'
import Order from '@/view/Order'
import Collection from '@/view/Collection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Center',
      name: 'Center',
      component: Center
    },
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
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    }
  ]
})
