<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import Modal from "@/components/global/Modal.vue";

import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
//---------------------------------------------------
const category = ref([]);
const deleteVisibleId = ref(null);
//---------------------------------------------------
onMounted(async () => {
  getCategory();
});
//---------------------------------------------------
const getCategory = async () => {
  const id = localStorage.getItem('user_id');
  let response = await axios.get(`/api/getCategoryByOwner/${id}`);
  category.value = response.data;
};
//---------------------------------------------------
const deleteCategory = (id) => {
  axios.delete(`/api/categories/${id}`).then(() => {
    notify({
      title: "Category Item Deleted",
      type: "success",
    });
    getCategory();
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
        <h1>All Category</h1>

        <div class="btn">
          <button>
            <router-link :to="{ name: 'add-category' }">
              Add Category
            </router-link>
          </button>
        </div>
      </div>


      <table id="customers">
        <tr>
          <th  style="width: 80px;" ># ID</th>
          <th>User Id</th>
          <th>Restaurant Id</th>
          <th>Name</th>
          <th>Image </th>
          <th style="text-align: center;width: 158px;">Action</th>
        </tr>

        <tbody v-for="item in category" :key="item.id">
          <Modal :show="deleteVisibleId === item.id" @close="closeModalDelete">
            <div id="myModal" style="text-align: center;">
              <h4 class="delete-title">Are you sure?</h4>
              <div class="modal-body">
                <p style="font-size: 14px; color: #999999;">Do you really want to delete these records? This process
                  cannot be undone.</p>
              </div>
              <div class="modal_footer" style="padding: 20px;">
                <button @close="closeModalDelete" type="button" class="secondary">Cancel</button>
                <button @click="deleteCategory(item.id)" type="button" style="background: #f15e5e;">Delete</button>
              </div>
            </div>
          </Modal>
          <tr>
            <td># {{ item.id }}</td>
            <td>{{ item.user_id }}</td>
            <td>{{ item.restaurant_id }}</td>
            <td>{{ item.name }}</td>
            <td>
              <div style="width: 80px; height: 70px">
                <img :src="item.image" style="width: 100%; height: 100%" />
              </div>

            </td>
            <td style="text-align: center;">
              <button @click="openModalDelete(item.id)" class="delete-btn">Delete </button>
              <button class="edit-btn">
                <router-link :to="{ name: 'edit-category', params: { id: item.id } }">Edit</router-link>
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
        border: 1px solid var(--primary-color);
        background: var(--primary-color);
        border-radius: 6px;
        cursor: pointer;
        transition: all ease-in .3s;

        a {
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-color-white);
        }

        &:hover {
          transform: scale(1.05);
          background-color: var(--text-color-white);

          a {
            color: var(--primary-color);
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
    color: var(--text-color-white);
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
      color: var(--text-color-white);
    }
  }
}
</style>