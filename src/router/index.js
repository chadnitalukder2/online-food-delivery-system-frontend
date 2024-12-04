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
      component: () => import("../views/Frontend/Restaurants/restaurants.vue"),
    },
    {
      path: "/restaurant/:id",
      name: "restaurant",
      component: () => import("../views/Frontend/Menu/Menu_item.vue"),
    },
    {
      path: "/cart-page",
      name: "cart-page",
      component: () => import("../views/Frontend/Cart/cart_page.vue"),
    },
    {
      path: "/category/:id",
      name: "category",
      component: () => import("../views/Frontend/Category/category_page.vue"),
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
      meta: { requiresOwner: true },
      component: Owner,
      children: [
        {
          path: "owner-dashboard",
          name: "owner-dashboard",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Dashboard/Dashboard.vue"),
        },
       
        {
          path: "categories",
          name: "categories",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Categories/all_category.vue"),
        },
        {
          path: "add-category",
          name: "add-category",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Categories/add_category.vue"),
        },
        {
          path: "edit-category/:id",
          name: "edit-category",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Categories/edit_category.vue"),
        },
        {
          path: "menus",
          name: "menus",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Menus/all_menu.vue"),
        },
        {
          path: "add-menu",
          name: "add-menu",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Menus/add_menu.vue"),
        },
        {
          path: "edit-menu/:id",
          name: "edit-menu",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Menus/edit_menu.vue"),
        },
        {
          path: "orders",
          name: "orders",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Orders/all_order.vue"),
        },
        {
          path: "discounts",
          name: "discounts",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Discounts/all_discount.vue"),
        },
        {
          path: "add-discounts",
          name: "add-discounts",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Discounts/add_discount.vue"),
        },
        {
          path: "edit-discounts/:id",
          name: "edit-discounts",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Discounts/edit_discount.vue"),
        },
        {
          path: "delivery-personnel",
          name: "delivery-personnel",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/DeliveryMan/all_delivery_man.vue"),
        },
        {
          path: "add-delivery-personnel",
          name: "add-delivery-personnel",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/DeliveryMan/add_delivery_man.vue"),
        },
        {
          path: "edit-delivery-personnel/:id",
          name: "edit-delivery-personnel",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/DeliveryMan/edit-delivery-man.vue"),
        },
        {
          path: "deliveries",
          name: "deliveries",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Deliveries/all_delivery.vue"),
        },
        {
          path: "payments",
          name: "payments",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Payments/all_payment.vue"),
        },
        {
          path: "order-trackings",
          name: "order-trackings",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/OrderTracking/all_order_tracking.vue"),
        },
        {
          path: "reviews",
          name: "reviews",
          meta: { requiresOwner: true },
          component: () => import("../views/Owner/Reviews/all_review.vue"),
        },
      ]
    },

    //------------------------------------
    {
      path: '/admin/',
      name: 'admin',
      component: Admin,
      meta: { requiresAdmin: true },
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          meta: { requiresAdmin: true },
          component: () => import("../views/Admin/Dashboard/Dashboard.vue"),
        },
        {
          path: "all-restaurants",
          name: "all-restaurants",
          meta: { requiresAdmin: true },
          component: () => import("../views/Admin/Restaurant/all_restaurant.vue"),
        },
        {
          path: "add-restaurant",
          name: "add-restaurant",
          meta: { requiresAdmin: true },
          component: () => import("../views/Admin/Restaurant/add_restaurant.vue"),
        },
      
      ]
    },
    //------------------------------------
  ]
})
//=============================================
router.beforeEach((to, from, next) => {
  const userRole = localStorage.getItem('user_role'); 

  if (to.meta.requiresAdmin && userRole !== 'admin') {
    next('/Login'); 
  } else if (to.meta.requiresOwner && userRole !== 'owner') {
    next('/Login'); 
  } else {
    next(); 
  }
});



export default router
