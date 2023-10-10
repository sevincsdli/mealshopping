import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardView.vue'
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/card',
    name: 'Card',
    component:CardView
  },
  {
    path: '/detail/:id',
    name: 'FoodDetails',
    component: () => import('../views/FoodDetails.vue')
  },
    {
      path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
