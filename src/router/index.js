import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import projects from '../views/projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/projects',
    component: projects
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
