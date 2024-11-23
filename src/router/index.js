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
        {
          path: "restaurants",
          name: "restaurants",
          component: () => import("../views/Admin/Restaurant/all_restaurant.vue"),
        },
        {
          path: "categories",
          name: "categories",
          component: () => import("../views/Admin/Categories/all_restaurant.vue"),
        },
        {
          path: "menus",
          name: "menus",
          component: () => import("../views/Admin/Menus/all_menu.vue"),
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("../views/Admin/Orders/all_order.vue"),
        },
        {
          path: "discounts",
          name: "discounts",
          component: () => import("../views/Admin/Discounts/all_discount.vue"),
        },
        {
          path: "delivery-personnel",
          name: "delivery-personnel",
          component: () => import("../views/Admin/DeliveryMan/all_delivery_man.vue"),
        },
        {
          path: "deliveries",
          name: "deliveries",
          component: () => import("../views/Admin/Deliveries/all_delivery.vue"),
        },
        {
          path: "payments",
          name: "payments",
          component: () => import("../views/Admin/Payments/all_payment.vue"),
        },
        {
          path: "order-trackings",
          name: "order-trackings",
          component: () => import("../views/Admin/OrderTracking/all_order_tracking.vue"),
        },
        {
          path: "reviews",
          name: "reviews",
          component: () => import("../views/Admin/Reviews/all_review.vue"),
        },
      ]
    },

  ]
})

export default router
