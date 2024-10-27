import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Frontend/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../components/Sing_up.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../components/ForgotPassword.vue"),
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("../components/ResetPassword.vue"),
    },

  ]
})

export default router
