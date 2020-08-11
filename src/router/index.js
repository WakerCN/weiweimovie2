import Vue from 'vue'
import VueRouter from 'vue-router'

import filmRouter from './film'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(VueRouter)

const routes = [
  filmRouter,
  cinemaRouter,
  mineRouter,
  {
    path: '/*',
    redirect: '/film/nowplaying'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
