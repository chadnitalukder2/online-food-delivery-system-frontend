<script setup>
import RestaurantCard from '../Home/Restaurant_card.vue';

import { ref, onMounted } from "vue";
import axios from "axios";

const restaurants = ref([]);
const searchQuery = ref('');
const results = ref([]);

const performSearch = async () => {
  if (searchQuery.value.length > 2) {
    axios
      .get('/api/search', { params: { searchValue: searchQuery.value } })
      .then((response) => {
        results.value = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    results.value = [];
  }
};

const getRestaurants = async () => {
  try {
    const response = await axios.get("/api/restaurants");
    restaurants.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getRestaurants();
});
</script>

<template>
    <div class="container">

        <div class="title_section">
            <div class="inner-banner">
                <img src="../../../assets/baner-img.jpg">
            </div>
            <div class="banner_title">
                <h1>All restaurants</h1>
            </div>
        </div>
        <div class="restaurant-content">
            <div class="header-section">
                <div class="total-section">
                    <p>Result: {{ restaurants.length }} items Found</p>
                </div>
                <div class="search-section">
                    <input type="text" v-model="searchQuery"  placeholder="Search any keyword...">
                    <button type="submit" class="search-btn" @click="performSearch">Search</button>
                </div>
            </div>
            <div class="body-section">
                <RestaurantCard   v-for="restaurant in (results.length ? results : restaurants)" 
                 :key="restaurant.id" :restaurant="restaurant" />

            </div>
            <p v-if="results.length === 0 && searchQuery.value">No results found.</p>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.container {
    background: #f0f0f085;
    font-family: Tahoma;

    .title_section {
        .inner-banner {
            width: 100%;
            height: 200px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .banner_title {
            position: absolute;
            height: 200px;
            top: 115px;
            width: 100%;
            z-index: 999;
            display: flex;
            background: #0e1212a1;
            justify-content: center;
            align-items: center;

            h1 {
                font-size: 42px;
                font-weight: 700;
                color: #fff;
            }
        }
    }

    .restaurant-content {
        padding: 64px 80px;

        .header-section {
            background: #fff;
            box-shadow: 1px solid gray;
            padding: 20px;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .total-section {
                font-size: 16px;
                color: #787878;
            }

            .search-section {
                flex-basis: 40%;
                display: flex;

                input {
                    width: 100%;
                    padding: 12px;
                    border-radius: 6px 0px 0px 6px;
                    font-size: 16px;
                    color: #787878;
                    border: 1px solid #ced4da;

                    &:focus {
                        outline: none;
                        border: 1px solid #9c4202;
                    }
                }

                .search-btn {
                    font-size: 16px;
                    background: #9c4202;
                    color: #fff;
                    border: 1px solid #9c4202;
                    border-radius: 0px 6px 6px 0px;
                    padding: 10px 12px;
                    cursor: pointer;
                    transition: all .3s;

                    &:hover {
                        background: #b84e02;
                    }
                }
            }
        }

        .body-section {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            padding-top: 30px;
        }
    }


}
</style>