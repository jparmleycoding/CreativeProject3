import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/Today.vue'
import Selected from '../views/Selected.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
