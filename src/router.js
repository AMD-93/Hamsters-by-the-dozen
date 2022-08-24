import { createRouter, createWebHashHistory } from 'vue-router'

import HamsterView from './views/HamsterView.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HamsterView,
      path: '/hamsters'
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})
