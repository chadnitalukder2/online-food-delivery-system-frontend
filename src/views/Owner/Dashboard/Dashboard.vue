<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();

import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
//---------------------------------------------------
const category = ref([]);
const menus = ref([]);
const orders = ref([]);
const restaurants = ref([]);
const restaurantId = ref(null);
const totalCompleteAmount = ref(0);
const completeOrders = ref(0);
const pendingOrders = ref(0);
const pendingOrdersTotal = ref(0);
const OrdersTotal = ref(0);
//---------------------------------------------------
onMounted(async () => {
  getCategory();
  getMenuById();
  fetchRestaurants();
  getOrderById();
});
//---------------------------------------------------
const getCategory = async () => {
  const id = localStorage.getItem('user_id');
  let response = await axios.get(`/api/getCategoryByOwner/${id}`);
  category.value = response.data.length;
};
//---------------------------------------------------
const fetchRestaurants = async () => {
  try {
    const id = localStorage.getItem('user_id');
    let response = await axios.get(`/api/getRestaurantByOwner/${id}`);
    restaurants.value = response.data;
    restaurantId.value = restaurants.value[0]?.id || null;
    if (restaurantId.value) {
      getMenuById();
      getOrderById();
    }
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
}
//--------------------------------------------------
const getMenuById = async () => {
  try {
    const response = await axios.get(`api/getMenuByRestaurantIds/${restaurantId.value}`);
    menus.value = response.data.length;
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};
//-----------------------------------------------------
const getOrderById = async () => {
  if (!restaurantId.value) {
    console.error("Restaurant ID not set");
    return;
  }
  try {
    const response = await axios.get(`api/getOrdersByRestaurantIds/${restaurantId.value}`);
    orders.value = response.data;
    OrdersTotal.value = orders.value.reduce((sum, order) => sum + (order.total_amount || 0), 0);;
    completeOrders.value = orders.value.filter(order => order.status === "completed");
    totalCompleteAmount.value = orders.value.filter(order => order.status === "completed").reduce((sum, order) => sum + (order.total_amount || 0), 0);
    pendingOrders.value = orders.value.filter(order => order.status === "pending");
    pendingOrdersTotal.value = orders.value.filter(order => order.status === "pending").reduce((sum, order) => sum + (order.total_amount || 0), 0);



  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};
//-------------------------------------------------------

</script>

<template>
  <div class="dashboard-container">
    <div class="dashboard-stats">
      <div class="stat-card">
        <h3 class="order-item">Total Order : <span class="number">{{ orders.length }}</span></h3>
        <h3 class="order-item" >Total Amount : <span class="number">{{ OrdersTotal }}</span></h3>
      </div>
      <div class="stat-card">
        <h3 class="order-item">Total Completed Order : <span class="number">{{ completeOrders.length }}</span></h3>
        <h3 class="order-item">Total Amount : <span class="number">{{ totalCompleteAmount }}</span></h3>
      </div>
      <div class="stat-card">
        <h3 class="order-item">Total Pending Order : <span class="number">{{ pendingOrders.length }}</span></h3>
        <h3 class="order-item">Total Amount : <span class="number">{{ pendingOrdersTotal }}</span></h3>
      </div>
      <div class="stat-card">
        <h3>Total Category Items</h3>
        <p class="stat-value" id="sum-items">{{ category }}</p>
      </div>
      <div class="stat-card">
        <h3>Total Menu Items</h3>
        <p class="stat-value" id="sum-items">{{ menus }}</p>
      </div>


    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  padding: 50px 50px;
  width: 100%;
}

.dashboard-stats {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  .stat-card {
    flex-basis: 31%;
    background: var(--text-color-white);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;

    .order-item {
      display: flex;
      justify-content: space-between;
    }
  }
}

.stat-card:hover {
  transform: scale(1.05);
}

.stat-card h3 {
  font-size: 16px;
  color: var(--text-color-small-font);
  margin-bottom: 10px;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0;
}

@media (max-width: 768px) {
  .stat-card h3 {
    font-size: 16px;
  }

  .stat-value {
    font-size: 28px;
  }
}

.number {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 20px;
}
</style>