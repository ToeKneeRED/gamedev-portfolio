import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Root',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    // optional :projectId opens that project's details, e.g. /game-projects/dherth
    path: '/game-projects/:projectId?',
    name: 'Game Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameProjects.vue')
  },
  {
    path: '/game-features/:projectId?',
    name: 'Game Features',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameFeatures.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  // clean URLs (no #). Firebase rewrites every path to index.html, and the dev server does the same
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    // opening or closing a project stays on the same page, so keep the scroll position
    if (to.name === from.name) {
      return undefined;
    }
    return { x: 0, y: 0 };
  }
})

export default router
