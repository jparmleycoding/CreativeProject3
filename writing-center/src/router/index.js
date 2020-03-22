import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/Today.vue'
import Selected from '../views/Selected.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/today',
    name: 'Today',
    component: Today
  },
  {
    path:'/selected',
    name: 'Selected',
    component: Selected
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
