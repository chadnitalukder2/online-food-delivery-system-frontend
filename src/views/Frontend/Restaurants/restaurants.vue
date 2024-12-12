<script setup>
import RestaurantCard from '../Home/Restaurant_card.vue';

import { ref, onMounted } from "vue";
import axios from "axios";

const restaurants = ref([]);
const searchRestaurant = ref('');
const results = ref([]);

const restaurantSearch = async () => {
    if (searchRestaurant.value.length > 2) {
        axios
            .get('/api/searchRestaurant', { params: { searchValue: searchRestaurant.value } })
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
                    <input type="text" v-model="searchRestaurant" @input="restaurantSearch"
                        placeholder="Search any keyword...">
                    <!-- <button type="submit" class="search-btn" >Search</button> -->
                </div>
            </div>
            <div class="body-section">
                <RestaurantCard v-for="restaurant in (results.length ? results : restaurants)" :key="restaurant.id"
                    :restaurant="restaurant" />

            </div>
            <p v-if="results.length === 0 && searchRestaurant.value">No results found.</p>

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
            height: 201px;
            top: 62px;
            width: 100%;
            display: flex;
            background: #0e1212a1;
            justify-content: center;
            align-items: center;
            @media (max-width: 942px) {
                top: 62px;
            }
            @media (max-width: 914px) {
                top: 65px;
            }
            h1 {
                font-size: 42px;
                font-weight: 700;
                color: var(--text-color-white);

                @media (max-width: 590px) {
                    font-size: 30px;
                }

                @media (max-width: 410px) {
                    font-size: 25px;
                }
            }

        }
    }

    .restaurant-content {
        padding: 64px 80px;

        @media (max-width: 1150px) {
            padding: 40px 40px;
        }

        @media (max-width: 587px) {
            padding: 30px 20px;
        }

        .header-section {
            background: var(--text-color-white);
            box-shadow: 1px solid gray;
            padding: 20px;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 549px) {
                display: block;
            }

            .total-section {
                font-size: 16px;
                color: #787878;
            }

            .search-section {
                flex-basis: 40%;
                display: flex;

                @media (max-width: 549px) {
                    padding-top: 20px;
                }

                input {
                    width: 100%;
                    padding: 12px;
                    border-radius: 6px 0px 0px 6px;
                    font-size: 16px;
                    color: #787878;
                    border: 1px solid #ced4da;

                    &:focus {
                        outline: none;
                        border: 1px solid var(--primary-color);
                    }
                }

                .search-btn {
                    font-size: 16px;
                    background: var(--primary-color);
                    color: var(--text-color-white);
                    border: 1px solid var(--primary-color);
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

            @media (max-width: 1150px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media (max-width: 774px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 851px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 473px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }


}
</style>