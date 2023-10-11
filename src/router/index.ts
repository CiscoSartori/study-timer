import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/texte',
    name: 'texte',
    component: HomeView
  },
  {
    path: '/clock',
    name: 'clock',
    component: () => import( '../views/AboutView.vue')
  },
  // {
  //   path: '/drawer',
  //   name: 'drawer',
  //   component: () => import( '../views/drawer/DrawerView.vue')
  // },
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/TexteView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
