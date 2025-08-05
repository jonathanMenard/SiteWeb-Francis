import { createRouter, createWebHistory } from 'vue-router'
import MissionView from '../views/MissionView.vue'
import ApproachMotives from '../views/ApproachMotives.vue'
import ServicesOfferedView from '../views/ServicesOfferedView.vue'
import WhoAmIView from '../views/WhoAmIView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Mission',
      component: MissionView,
    },
    {
      path: '/ApprocheMotifs',
      name: 'ApprocheMotifs',
      component: ApproachMotives,
    },
    {
      path: '/ServicesOfferts',
      name: 'ServicesOfferts',
      component: ServicesOfferedView,
    },
    {
      path: '/QuiSuisJe',
      name: 'QuiSuisJe',
      component: WhoAmIView,
    },
  ],
})

export default router