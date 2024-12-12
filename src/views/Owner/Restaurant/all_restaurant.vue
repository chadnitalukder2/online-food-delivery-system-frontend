<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import Modal from "@/components/global/Modal.vue";

import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
//---------------------------------------------------
const restaurants = ref([]);
const deleteVisibleId = ref(null);
//---------------------------------------------------
onMounted(async () => {
  getRestaurant();
});
//---------------------------------------------------
const getRestaurant = async () => {
  const id = localStorage.getItem('user_id');
  let response = await axios.get(`/api/getRestaurantByOwner/${id}`);
  restaurants.value = response.data;
  console.log(restaurants.value)
}
//---------------------------------------------------
const deleteRestaurants = (id) => {
  axios.delete(`/api/restaurants/${id}`).then(() => {
    notify({
      title: "Restaurants Item Deleted",
      type: "success",
    });
    getRestaurants();
  });
};
//---------------------------------------------------
const openModalDelete = (id) => {
  deleteVisibleId.value = id;
};
const closeModalDelete = () => {
  deleteVisibleId.value = null;
};
//--------------------------------------------
</script>

<template>
  <div class="profile-warper">
    <div class="restaurant-profile" v-for="(item, index) in restaurants">
      <div class="header">
        <img class="background-img" :src="item.bg_image" alt="Restaurant Background">
        <div class="logo-container">
          <img class="logo" :src="item.image" alt="Restaurant Logo">
        </div>
      </div>

      <div class="info-section">
        <h1 class="name">{{ item.name }}</h1>
        <p class="status open" v-if="item.status === 'open'">{{ item.status }} Now</p>
        <p class="status close" v-else>{{ item.status }} Now</p>
        <p class="phone"><strong>Phone:</strong> {{ item.phone }}</p>
        <p class="email"><strong>Email:</strong> {{ item.email }}</p>
        <p class="address"><strong>Address:</strong> {{ item.address }}</p>
        <p class="delivery">
          <strong>Delivery Time:</strong> {{ item.delivery_time }} mins |
          <strong>Fee:</strong> ${{ item.delivery_fee }}
        </p>
        <p class="action">
          <button class="edit-btn"><router-link :to="{ name: 'owner-edit-restaurants', params: { id: item.id } }">Edit</router-link></button>
          <button class="delete-btn" @click="openModalDelete(item.id)">Delete</button>
        </p>
        <Modal :show="deleteVisibleId === item.id" @close="closeModalDelete">
            <div id="myModal" style="text-align: center;">
              <h4 class="delete-title">Are you sure?</h4>
              <div class="modal-body">
                <p style="font-size: 14px; color: var(--text-color-small-font);">Do you really want to delete these records? This process
                  cannot be undone.</p>
              </div>
              <div class="modal_footer" style="padding: 20px;">
                <button @close="closeModalDelete" type="button" class="secondary">Cancel</button>
                <button @click="deleteRestaurants(item.id)" type="button" style="background: #f15e5e;">Delete</button>
              </div>
            </div>
          </Modal>
      </div>

      <div class="description">
        <h2>About Us</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
#myModal {
  .delete-title {
    margin-top: 20px;
    margin-bottom: 8px;
    font-size: 26px;
    color: #636363;
    font-weight: 500;
  }

  .modal_footer {
    button {

      cursor: pointer;
      background: #c1c1c1;
      color: var(--text-color-white);
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s;
      line-height: normal;
      min-width: 120px;
      border: none;
      min-height: 40px;
      border-radius: 3px;
      margin: 0 5px;
    }
  }
}

.profile-warper{
  flex-basis: 80%;
  padding: 40px 95px;
}
.restaurant-profile {
  max-width: 800px;
  margin: 20px auto;
  background: var(--text-color-white);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Header Section */
.header {
  position: relative;
}

.background-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.logo-container {
  position: absolute;
  bottom: -50px;
  left: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  border: 4px solid var(--text-color-white);
  border-radius: 50%;
  object-fit: cover;
}

/* Info Section */
.info-section {
  text-align: center;
  padding: 70px 20px 20px;
}

.name {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}

.status {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.status.open {
  color: #27ae60;
  text-transform: capitalize;
}
.status.close {
  text-transform: capitalize;
  color: #cf0e0e;
}

.status.closed {
  color: #e74c3c;
}

.phone,
.email,
.address,
.delivery {
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
}
.action{
  padding-top: 10px;
  .edit-btn{
    background: rgba(237, 236, 236, 0.68);
    border: 1px solid rgb(0, 179, 255);
    border-radius: 6px;
    padding: 5px 17px;
    margin-right: 12px;
    transition: all 0.3s;
    a{
      color: rgb(0, 179, 255);
    }
    &:hover{
      background: rgb(0, 179, 255);
      a{
        color: var(--text-color-white);
      }
    }
  }
  .delete-btn{
    background: rgba(237, 236, 236, 0.68);
    border: 1px solid #cf0e0e;
    border-radius: 6px;
    padding: 5px 17px;
    margin-right: 12px;
    transition: all 0.3s;
    color: #cf0e0e;
    cursor: pointer;
   
    &:hover{
      background-color: #cf0e0e;
      color: var(--text-color-white);
    }
  }

}

/* Description Section */
.description {
  padding: 20px;
  border-top: 1px solid #eee;
}

.description h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #444;
}

.description p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}
</style>