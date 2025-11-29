import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import MealsByName from './views/MealsByName.vue'
import MealsByLetter from './views/MealsByLetter.vue'
import MealsByIngredients from './views/MealsByIngredients.vue'
import MealDetails from './views/MealDetails.vue'
import Ingredients from './views/Ingredients.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/by-name/:name?', name: 'MealsByName', component: MealsByName },
  { path: '/by-letter/:letter?', name: 'MealsByLetter', component: MealsByLetter },
  { path: '/by-ingredient/:ingredient?', name: 'MealsByIngredients', component: MealsByIngredients },
  { path: '/meal/:id', name: 'MealDetails', component: MealDetails },
  { path: '/ingredients', name: 'Ingredients', component: Ingredients },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
