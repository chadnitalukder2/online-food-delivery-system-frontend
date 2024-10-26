import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Frontend/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../components/Login.vue"),
    },

  ]
})

export default router
