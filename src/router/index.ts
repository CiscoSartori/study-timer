import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TimerSetView from '../views/TimerSetView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/timerSet',
    name: 'timerSet',
    component: TimerSetView
  },
  {
    path: '/clock',
    name: 'clock',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'timer',
    component: () => import( '../views/TimerView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
