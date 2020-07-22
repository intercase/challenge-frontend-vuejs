import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../layout/Main'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/Home'),
      },
      {
        path: 'movies',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
            path: '',
            name: 'movies',
            component: () => import('../views/Movies'),
          },
          {
            path: ':id',
            name: 'movies details',
            component: () => import('../views/Details'),
          },
        ]
      },
      {
        path: 'series',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
            path: '',
            name: 'series',
            component: () => import('../views/Tv'),
          },
          {
            path: ':id',
            name: 'series details',
            component: () => import('../views/Details'),
          },
        ]
      },

    ],
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
