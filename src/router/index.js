import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: () => import('../views/Episode.vue')
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/Character.vue')
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/Location.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
