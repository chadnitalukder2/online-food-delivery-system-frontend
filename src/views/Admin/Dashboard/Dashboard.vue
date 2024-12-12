<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import Modal from "@/components/global/Modal.vue";

import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
//---------------------------------------------------
const restaurants = ref();
const users = ref();
const owners = ref();
//---------------------------------------------------
onMounted(async () => {
  getRestaurants();
  getUsers();
  getOwner();
});
//---------------------------------------------------
const getRestaurants = async () => {
  let response = await axios.get("/api/restaurants");
  restaurants.value = response.data.length;
};
//--------------------------------------------------
const getUsers = async () => {
  let response = await axios.get("/api/users");
  users.value = response.data.length;
};
//---------------------------------------
const getOwner = async () => {
    try {
        const response = await axios.get("/api/users");
        owners.value = response.data
            .filter(user => user && user.role == "owner"); // Filter users who are not "owner"
    } catch (error) {
        console.error("Error fetching users:", error);
        notify({
            title: "Failed to fetch users",
            type: "error",
        });
    }
};
</script>

<template>
  <div class="dashboard-container">
    <div class="dashboard-stats">
      <div class="stat-card">
        <h3>Total Restaurant </h3>
        <p class="stat-value" id="sum-items">{{ restaurants }}</p>
      </div>
      <div class="stat-card">
        <h3>Total User</h3>
        <p class="stat-value" id="sum-items">{{ users }}</p>
      </div>
      <div class="stat-card">
        <h3>Total Owner </h3>
        <p class="stat-value" id="sum-items">{{ owners.length }}</p>
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

/* Responsive Design */
@media (max-width: 768px) {
  .stat-card h3 {
    font-size: 16px;
  }

  .stat-value {
    font-size: 28px;
  }
}
</style>