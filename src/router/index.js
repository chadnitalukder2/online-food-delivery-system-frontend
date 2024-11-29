import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Frontend/Home/Home_page.vue';
import Admin from '../views/Admin/Index.vue';
import Owner from '../views/Owner/OwnerIndex.vue';

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
    //-------------------------------------------
    {
      path: "/owner/",
      name: "owner",
      component: Owner,
      children: [
        {
          path: "owner-dashboard",
          name: "owner-dashboard",
          component: () => import("../views/Owner/Dashboard/Dashboard.vue"),
        },
       
        {
          path: "categories",
          name: "categories",
          component: () => import("../views/Owner/Categories/all_category.vue"),
        },
        {
          path: "add-category",
          name: "add-category",
          component: () => import("../views/Owner/Categories/add_category.vue"),
        },
        {
          path: "edit-category/:id",
          name: "edit-category",
          component: () => import("../views/Owner/Categories/edit_category.vue"),
        },
        {
          path: "menus",
          name: "menus",
          component: () => import("../views/Owner/Menus/all_menu.vue"),
        },
        {
          path: "add-menu",
          name: "add-menu",
          component: () => import("../views/Owner/Menus/add_menu.vue"),
        },
        {
          path: "edit-menu/:id",
          name: "edit-menu",
          component: () => import("../views/Owner/Menus/edit_menu.vue"),
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("../views/Owner/Orders/all_order.vue"),
        },
        {
          path: "discounts",
          name: "discounts",
          component: () => import("../views/Owner/Discounts/all_discount.vue"),
        },
        {
          path: "add-discounts",
          name: "add-discounts",
          component: () => import("../views/Owner/Discounts/add_discount.vue"),
        },
        {
          path: "edit-discounts/:id",
          name: "edit-discounts",
          component: () => import("../views/Owner/Discounts/edit_discount.vue"),
        },
        {
          path: "delivery-personnel",
          name: "delivery-personnel",
          component: () => import("../views/Owner/DeliveryMan/all_delivery_man.vue"),
        },
        {
          path: "deliveries",
          name: "deliveries",
          component: () => import("../views/Owner/Deliveries/all_delivery.vue"),
        },
        {
          path: "payments",
          name: "payments",
          component: () => import("../views/Owner/Payments/all_payment.vue"),
        },
        {
          path: "order-trackings",
          name: "order-trackings",
          component: () => import("../views/Owner/OrderTracking/all_order_tracking.vue"),
        },
        {
          path: "reviews",
          name: "reviews",
          component: () => import("../views/Owner/Reviews/all_review.vue"),
        },
      ]
    },

    //------------------------------------
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
          path: "all-restaurants",
          name: "all-restaurants",
          component: () => import("../views/Admin/Restaurant/all_restaurant.vue"),
        },
      
      ]
    },
    //------------------------------------
  ]
})

export default router
