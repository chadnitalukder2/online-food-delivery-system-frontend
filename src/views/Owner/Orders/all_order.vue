<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import Modal from "@/components/global/Modal.vue";

import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
//---------------------------------------------------
const orders = ref([]);
const deleteVisibleId = ref(null);
const restaurants = ref([]);
const restaurantId = ref(null);
//---------------------------------------------------
onMounted(async () => {
  //getOrder();
  fetchRestaurants();
  getOrderById();
});
//---------------------------------------------------
const fetchRestaurants = async () => {
  try {
    const id = localStorage.getItem('user_id');
    let response = await axios.get(`/api/getRestaurantByOwner/${id}`);
    restaurants.value = response.data;
    restaurantId.value = restaurants.value[0]?.id || null; 
    if (restaurantId.value) {
      getOrderById();
      console.log(restaurantId.value, 'hello')
    }
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
}
//--------------------------------------------------
const getOrderById = async () => {
  
  if (!restaurantId.value) {
    console.error("Restaurant ID not set");
    return;
  }
  console.log(restaurantId.value, 'hello')
  try {
    const response = await axios.get(`api/getOrdersByRestaurantIds/${restaurantId.value}`);
    orders.value = response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};
//---------------------------------------------------
// const getOrder = async () => {
//   let response = await axios.get("/api/orders");
//   orders.value = response.data;
// };
//---------------------------------------------------
const deleteOrder = (id) => {
  axios.delete(`/api/orders/${id}`).then(() => {
    notify({
      title: "Order Item Deleted",
      type: "success",
    });
    getOrder();
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
  <div class="container">
    <div class="table-box">
      <div class="header">
        <h1>All Order</h1>
      </div>


      <table id="customers">
        <tr>
          <th style="width: 80px;"># ID</th>
          <th>User Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Total Amount</th>
          <th>Payment Status</th>
          <th>Status</th>
          <th style="text-align: center;width: 158px;">Action</th>
        </tr>

        <tbody v-for="item in orders" :key="item.id">
          <Modal :show="deleteVisibleId === item.id" @close="closeModalDelete">
            <div id="myModal" style="text-align: center;">
              <h4 class="delete-title">Are you sure?</h4>
              <div class="modal-body">
                <p style="font-size: 14px; color: #999999;">Do you really want to delete these records? This process
                  cannot be undone.</p>
              </div>
              <div class="modal_footer" style="padding: 20px;">
                <button @close="closeModalDelete" type="button" class="secondary">Cancel</button>
                <button @click="deleteOrder(item.id)" type="button" style="background: #f15e5e;">Delete</button>
              </div>
            </div>
          </Modal>
          <tr>
            <td># {{ item.id }}</td>
            <td>{{ item.user_id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.delivery_address }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.total_amount }}</td>
            <td>{{ item.payment_status }}</td>
            <td>{{ item.status }}</td>
            <td style="text-align: center;">
              <button @click="openModalDelete(item.id)" class="delete-btn">Delete </button>
              <button class="edit-btn">
                <router-link :to="{ name: 'edit-order', params: { id: item.id } }">Edit</router-link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
      color: #fff;
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



table {
  border-radius: 6px;
  overflow: hidden;
}

.container {
  width: 100%;
}

.table-box {
  padding: 50px 30px;
  border-radius: 8px;

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    text-align: center;
    align-items: center;

    .btn {
      text-align: right;
      padding-bottom: 10px;

      button {
        padding: 10px 20px;
        border: 1px solid #9c4202;
        background: #9c4202;
        border-radius: 6px;
        cursor: pointer;
        transition: all ease-in .3s;

        a {
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
        }

        &:hover {
          transform: scale(1.05);
          background-color: #fff;

          a {
            color: #9c4202;
          }
        }
      }
    }

    h1 {
      margin-top: 0px;
      font-size: 22px;
      color: #444;
      font-weight: 600;
    }
  }

}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #f3ededad;
  padding: 10px 12px;
  text-align: left;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers th {
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
  background-color: rgb(237 236 236 / 68%);
  color: #444;
  font-size: 16px;
}

#customers td {
  color: #656262;
  font-size: 14px;
}

.delete-btn {
  color: #da0808;
  background: rgb(237 236 236 / 68%);
  border-radius: 6px;
  font-size: 14px;
  border: 1px solid rgb(237 236 236 / 68%);
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
  transition: all .3s;

  &:hover {
    background: #da0808;
    color: #fff;
  }
}

.edit-btn {
  background: rgb(237 236 236 / 68%);
  border: 1px solid rgb(237 236 236 / 68%);
  border-radius: 6px;
  padding: 5px 17px;
  transition: all .3s;

  a {
    color: rgb(0, 179, 255);
  }

  &:hover {
    background: rgb(0, 179, 255);

    a {
      color: #fff;
    }
  }
}
</style>