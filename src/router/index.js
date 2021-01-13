import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import projects from '../views/projects.vue'
import todo from '../views/todo.vue'
import more from '../views/more.vue'

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
    path: '/todo',
    component: todo
  },
  {
    path: '/more',
    component: more
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
