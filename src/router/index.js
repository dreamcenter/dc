import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import projects from '../views/projects.vue'
import acgn from '../views/acgn.vue'
import blogs from '../views/blogs.vue'
import stars from '../views/stars.vue'
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
    path: '/acgn',
    component: acgn,
    children: [
      {
        path: 'lihui',
        component: () => import('../views/acgn/lihui.vue')
      },
      {
        path: 'found',
        component: () => import('../views/acgn/found.vue')
      },
      {
        path: 'base',
        component: () => import('../views/acgn/base.vue')
      },
      {
        path: '',
        redirect: '/acgn/lihui'
      }
    ]
  },
  {
    path: '/blogs',
    component: blogs
  },
  {
    path: '/stars',
    component: stars
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
