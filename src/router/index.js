import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Frontend/Home/Home_page.vue';
import Admin from '../views/Admin/Index.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/restaurants",
      name: "restaurants",
      component: () => import("../views/Frontend/Restaurants/Restaurants.vue"),
    },
    {
      path: "/menu-item",
      name: "menu-item",
      component: () => import("../views/Frontend/Menu/Menu_item.vue"),
    },
    {
      path: "/cart-page",
      name: "cart-page",
      component: () => import("../views/Frontend/Cart/cart_page.vue"),
    },
    {
      path: "/profile-page",
      name: "profile-page",
      component: () => import("../views/Frontend/Profile/profile_page.vue"),
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

    {
      path: '/admin/',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("../views/Admin/Dashboard/Dashboard.vue"),
        },
      ]
    },

  ]
})

export default router
