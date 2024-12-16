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
const totalAmount = ref(0);

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
     
        totalAmount.value = orders.value
            .filter(order => order.status === "completed")
            .reduce((sum, order) => sum + (order.total_amount || 0), 0);
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
        <h3>Total Order : {{ orders.length }}</h3>
        <h3>Total Order Amount : {{ totalAmount }}</h3>
      </div>
      <div class="stat-card">
        <h3>Total Category Items</h3>
        <p class="stat-value" id="sum-items">{{ category }}</p>
      </div>
      <div class="stat-card">
        <h3>Total Menu Items</h3>
        <p class="stat-value" id="sum-items">{{ menus }}</p>
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
  justify-content: space-between;

  .stat-card {
    flex-basis: 33%;
    background: var(--text-color-white);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
}

.stat-card:hover {
  transform: scale(1.05);
}

.stat-card h3 {
  font-size: 18px;
  color: #666;
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
</style>