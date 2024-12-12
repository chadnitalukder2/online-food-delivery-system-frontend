<script setup>
import RestaurantCard from './Restaurant_card.vue';
import CategoryMenuCard from '../Category/category_menu.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

import { ref, onMounted, watch } from "vue";
import axios from "axios";

const restaurants = ref([]);
const menus = ref([]);
const categories = ref([]);
//---------------------------------------------------
onMounted(async () => {
    getRestaurants();
    getCategories();
    getMenus();
});
//---------------------------------------------------
const getRestaurants = async () => {
    let response = await axios.get("/api/restaurants");
    restaurants.value = response.data;
};

//===================================
const getCategories = async () => {
    let response = await axios.get("/api/categories");
    categories.value = response.data;
};
//========================================
const getMenus = async () => {
    let response = await axios.get("/api/menus");
    menus.value = response.data
};
</script>

<template>
    <!-- header section -->
    <section class="header_section">
        <div class="container">
            <div class="details_wrapper">
                <div class="left_details">
                    <div class="banner-area">
                        <h2 class="banner-area-title">Most Fastest Food Delivery Service</h2>
                        <p class="banner-area-subtitle">Our job fill your tummy with delicious food and with fast
                            and free delivery</p>
                    </div>
                    <!-- <form class="search-form">
                        <div class="input-group">
                            <input type="text" name="search" class="form-control form--control" id="search">
                            <label for="address">Enter Your Favourite restaurant</label>
                        </div>
                        <div class="banner-search-btn">
                            <button class="btn btn--base" type="submit">Search</button>
                        </div>
                    </form> -->
                </div>

                <div class="banner_img">
                    <img src="../../../assets/delivery-girl.png">
                </div>
            </div>
        </div>
    </section>
    <!-- Category section -->

    <section class="category_section">
        <div class="row">

            <!-- <div class="food-category"> -->

            <Carousel :items-to-show="6" iconArrowRight iconArrowLeft>
                <Slide v-for="(category, index) in categories" :key="index">
                    <div class="food-item">
                        <div class="food-item-box">
                            <div class="food-item-box__thumb">
                                <router-link :to="{ name: 'category', params: { id: category.id } }">
                                    <img :src="category.image">
                                </router-link>
                            </div>
                        </div>
                        <div class="food-item__title">
                            <h1>
                                <router-link :to="{ name: 'category', params: { id: category.id } }">
                                    {{ category.name }}
                                </router-link>
                            </h1>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <navigation />
                </template>

            </Carousel>
        </div>
        <!-- </div> -->

    </section>
    <!-- Restaurant section -->
    <section class="restaurant_section">
        <div class="container">
            <div class="header_section">
                <div class="section-title">
                    <h1>Popular Restaurant</h1>
                </div>
                <div class="all_restaurant">
                    <router-link :to="{ name: 'restaurants' }">View All <i
                            class="fa-regular fa-circle-right"></i></router-link>
                </div>
            </div>
            <div class="nearby-restaurant">
                <RestaurantCard v-for="restaurant in restaurants.slice(0, 8)" :key="restaurant.id"
                    :restaurant="restaurant" />
            </div>
        </div>
    </section>
    <!-- Menu section -->
    <section class="restaurant_section">
        <div class="container">
            <div class="header_section">
                <div class="section-title">
                    <h1>Popular Food Item</h1>
                </div>
            </div>
            <div class="popular-foods-wrapper">
                <CategoryMenuCard v-for="menuItem in menus.slice(0, 9)" :key="menuItem.id" :menuItem="menuItem" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
a {
    text-decoration: none;
}

.header_section {
    .container {
        background: #f7e5e5cf;

        .details_wrapper {
            display: flex;
            grid-area: 20px;
            justify-content: space-between;
            padding: 64px 80px;

            @media (max-width: 1251px) {
                padding: 40px 50px 30px;
            }

            @media (max-width: 615px) {
                padding: 40px 20px 30px;
            }

            .left_details {
                flex-basis: 58%;

                @media (max-width: 1014px) {
                    flex-basis: 100%;
                }

                .banner-area {
                    font-family: "Poppins", sans-serif;

                    .banner-area-title {
                        color: #212121;
                        font-size: 60px;
                        margin-bottom: 25px;
                        max-width: 550px;
                        line-height: 1.2;
                        font-weight: 600;

                        @media (max-width: 532px) {
                            font-size: 42px;
                        }
                    }

                    .banner-area-subtitle {
                        max-width: 400px;
                        font-size: 20px;
                        margin-bottom: 25px;
                        color: #787878;
                        line-height: 1.5;

                    }
                }

                .search-form {
                    color: #999999;
                    border-radius: 10px;
                    background: var(--text-color-white);
                    width: 100%;
                    max-width: 830px;
                    padding: 25px;
                    display: flex;
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);

                    .input-group {
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: stretch;
                        width: 100%;

                        input {
                            border-radius: 6px !important;
                            background: var(--text-color-white);
                            height: 60px;
                            padding: 0px 20px 0px 20px;
                            position: relative;
                            flex: 1 1 auto;
                            width: 1%;
                            min-width: 0;
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 1.5;
                            color: #787878;
                            border: 1px solid #ced4da;
                            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                        }

                        label {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            left: 20px;
                            transition: 0.2s linear;
                            background-color: var(--text-color-white);
                            padding: 1px 5px;
                            z-index: 11;
                            pointer-events: none;
                        }

                        input:focus {
                            outline: none;
                            border: 1px solid var(--primary-color);
                        }

                        input:focus+label {
                            top: 0%;
                            color: #212121;
                        }

                    }

                    .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
                        margin-left: -1px;
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }

                    .banner-search-btn {
                        button {
                            font-size: 18px;
                            font-weight: 400;
                            text-transform: inherit;
                            text-align: center;
                            border: 1px solid var(--primary-color);
                            color: var(--text-color-white);
                            background: var(--primary-color);
                            cursor: pointer;
                            border-radius: 6px !important;
                            font-family: var(--body-font);
                            margin-left: 20px !important;
                            padding: 7px 65px !important;
                            height: 60px;
                            transform: all .3s;

                            &:hover {
                                background: #a94804;
                            }

                        }
                    }
                }
            }


            .banner_img {
                flex-basis: 40%;

                @media (max-width: 1014px) {
                    display: none;
                    flex-basis: 0%;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }

        }

    }
}

//================================
.category_section {
    background: #f7f7f7;
    padding: 40px 80px 64px;

    @media (max-width: 1251px) {
        padding: 0px 50px 30px;
    }

    @media (max-width: 615px) {
        padding: 0px 20px 30px;
    }

    .row {
        // .food-category {
        //     display: flex;
        //     flex-wrap: wrap;
        //     gap: 25px;


        .food-item {
            padding: 30px 15px 20px 15px;

            .food-item-box {
                width: 155px;
                height: 155px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--text-color-white);
                margin: 0 auto;
                margin-bottom: 20px;
                transition: all .5s;

                .food-item-box__thumb {
                    width: 115px;
                    height: 115px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                    background: white;

                    img {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
            }

            .food-item__title {
                text-transform: capitalize;
                font-size: 16px;
                font-weight: 500;
                text-align: center;

                a {
                    text-decoration: none;
                    color: #212121;

                }
            }

            &:hover {
                .food-item-box {
                    box-shadow: 0px 0px 18px 0px #d5681b70;
                }

                .food-item__title a {
                    color: var(--primary-color);
                }

            }

        }


    }

}

// }

//=====================================
.restaurant_section {
    background: #f7f7f7;
    padding: 0px 80px 64px;

    @media (max-width: 1251px) {
        padding: 0px 50px 30px;
    }

    @media (max-width: 615px) {
        padding: 0px 20px 30px;
    }

    .container {
        .header_section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 30px;

            .section-title {
                h1 {
                    font-size: 28px;
                    line-height: 1.2;
                    font-weight: 600;
                    position: relative;
                    color: #212121;
                    display: inline-block;
                }
            }

            .all_restaurant {
                a {
                    padding: 8px 16px;
                    font-size: 16px;
                    border-radius: 6px;
                    position: relative;
                    background: var(--primary-color);
                    border: 1px solid;
                    color: var(--text-color-white);
                    text-decoration: none;
                    outline: none !important;
                    transition: all .3s;

                    &:hover {
                        transform: scale(1.1);
                        background: #b54d02;
                    }
                }
            }
        }

        .nearby-restaurant {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;

            @media (max-width: 1251px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media (max-width: 928px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 500px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
}

//===========================================
.popular-foods-wrapper {
    gap: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1089px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }

}
</style>
