<script setup>
import MenuCard from '../Home/Menu_card.vue';
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from "vue-router";
const route = useRoute();
//---------------------------------------------------
const restaurant = ref({
    categories: [],
    menus: [],
});
const searchMenu = ref();
const results = ref([]);
//--------------------------------------------
const menuSearch = async () => {
    if (searchMenu.value.length > 2) {
        axios
            .get('/api/searchMenu', { params: { searchValue: searchMenu.value } })
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
//--------------------------------------
function filteredMenus(categoryId) {
    const sourceMenus = results.value.length ? results.value : restaurant.value.menus;
    return sourceMenus.filter(menu => menu.category_id === categoryId);
}
//---------------------------------------------------
onMounted(async () => {
    getRestaurant();
});
//---------------------------------------------------

const getRestaurant = async () => {
    const id = route.params.id;
    let response = await axios.get(`/api/restaurants/${id}`);
    restaurant.value = response.data.data;
}
//----------------------------------------------------


</script>

<template>
    <div class="container">
        <div class="title_section">
            <div class="inner-banner">
                <img src="../../../assets/menu-cover.png">
            </div>
            <div class="banner_title">
                <h1>{{ restaurant.name }}</h1>
            </div>
        </div>

        <section class="restaurant-page">
            <div class="restaurant-info">
                <div class="restaurant-info-box__thumb">
                    <div class="image">
                        <img :src="restaurant.image">
                    </div>
                </div>
                <div class="restaurant-info-box__meta">
                    <h4 class="restaurant-name">
                        {{ restaurant.name }}
                    </h4>
                    <div class="restaurant-location">
                        <i class="fa-regular fa-compass"></i>
                        {{ restaurant.address }}
                    </div>
                    <div class="restaurant-rating">
                        <div class="rating-review">
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="status">
                            <span class="badge badge--base badge--sm">{{ restaurant.status }}</span>
                        </div>
                    </div>
                    <div class="restaurant-info_meta-time">
                        <div class="delivery-fee">
                            <i class="fa-solid fa-calendar-minus"></i>
                            Delivery Fee {{ restaurant.delivery_fee }}TK
                        </div>
                        <div class="delivery-time delivery-fee">
                            <i class="fa-regular fa-clock"></i>
                            Delivery {{ restaurant.delivery_time }} min
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="menu-category">
            <div class="search-bar">
                <input type="text" v-model="searchMenu" @input="menuSearch" placeholder="Search in menu name">
                <!-- <button type="submit"  class="search-btn">Search</button> -->
            </div>
            <div class="category">
                <div class="category-item active"> <a href="#">All </a></div>
                <div class="category-item" v-for="(item, index) in restaurant.categories" :key="index"><a href="#">
                        {{ item.name }}
                    </a></div>
            </div>
        </section>

        <section class="menu-card" v-if="restaurant.status === 'open'">
            <div class="menu-item" v-for="(item, index) in restaurant.categories" :key="index">
                <div class="section-title">
                    <h1>{{ item.name }}</h1>
                </div>
                <div v-if="filteredMenus(item.id).length === 0">
                    <h1 class="no-data">No items available in this category.</h1>

                </div>
                <div class="menu-card-details" v-else>
                    <MenuCard v-for="menuItem in filteredMenus(item.id)" :key="menuItem.id" :menuItem="menuItem" />


                </div>
            </div>

        </section>

        <div v-else class="close">
            <p>Our restaurant is closed for now. Come back soon for your favorite dishes!</p>
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

    .restaurant-page {
        padding: 40px 80px;
        background-color: var(--text-color-white);
        border-bottom: 1px solid #e6e2e2;

        @media (max-width: 590px) {
            padding: 30px 20px;
        }

        .restaurant-info {
            display: flex;
            gap: 30px;

            .restaurant-info-box__thumb {
                .image {
                    width: 90px;
                    height: 90px;
                    border-radius: 8px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }

            .restaurant-info-box__meta {
                .restaurant-name {
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 1.2;
                    color: #212121;
                    margin-bottom: 10px;
                }

                .restaurant-location {
                    margin-bottom: 13px;
                    font-size: 18px;
                    color: #919191;

                    i {
                        color: var(--primary-color);
                        padding-right: 3px;
                    }
                }

                .restaurant-rating {
                    display: flex;
                    align-items: center;
                    padding-bottom: 13px;

                    .rating-review {
                        margin-right: 20px;

                        i {
                            color: rgb(253, 216, 6);
                            font-size: 14px;
                        }
                    }

                    .status {
                        background: var(--primary-color);
                        color: var(--text-color-white);
                        padding: 5px 10px;
                        text-transform: uppercase;
                        border-radius: 50px;
                        display: flex;
                        align-items: center;

                        span {
                            letter-spacing: 1px;
                            font-size: 13px;
                            font-weight: 500;
                        }
                    }
                }

                .restaurant-info_meta-time {
                    display: flex;
                    align-items: center;

                    .delivery-fee {
                        i {
                            color: var(--primary-color);
                            padding-right: 2px;
                        }

                        color: #919191;
                        padding-right: 12px;
                        font-size: 14px;
                        border-right: 1.5px solid #919191;
                    }

                    .delivery-time {
                        padding-right: 0px;
                        padding-left: 12px;
                        border-right: none;
                    }
                }
            }


        }
    }

    .menu-category {
        background: var(--text-color-white);
        padding: 20px 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        box-shadow: 1px 2px 4px #f0ecec;

        @media (max-width: 590px) {
            padding: 20px 20px;
        }

        .search-bar {
            display: flex;
            flex-basis: 20%;

            @media (max-width: 590px) {
                display: none;
            }

            input {
                width: 100%;
                padding: 6px;
                border-radius: 6px;
                font-size: 12px;
                color: #787878;
                border: 1px solid #ced4da;

                &:focus {
                    outline: none;
                    border: 1px solid var(--primary-color)
                }
            }

            .search-btn {
                font-size: 12px;
                background: var(--primary-color);
                color: var(--text-color-white);
                border: 1px solid var(--primary-color);
                border-radius: 0px 6px 6px 0px;
                padding: 6px;
                cursor: pointer;
                transition: all .3s;

                &:hover {
                    background: #b84e02;
                }
            }
        }

        .category {
            display: flex;
            gap: 25px;
            align-items: center;
            margin: 0 auto;

            .category-item {
                a {
                    text-transform: capitalize;
                    text-decoration: none;
                    color: #524d4d;
                    font-size: 14px;
                    font-weight: 600;
                    transition: all .3s;

                    &:hover {
                        color: var(--primary-color);
                    }
                }
            }
        }

    }

    .menu-card {
        padding: 0px 80px 40px;

        @media (max-width: 590px) {
            padding: 0px 20px 30px;
        }

        .menu-item {
            padding-top: 40px;

            .section-title {
                padding-bottom: 22px;

                h1 {
                    text-transform: capitalize;
                    font-size: 24px;
                    line-height: 1.2;
                    font-weight: 600;
                    position: relative;
                    color: #212121;
                    letter-spacing: 1.1px;
                    display: inline-block;
                }
            }

            .menu-card-details {
                gap: 20px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);

                @media (max-width: 1181px) {
                    grid-template-columns: repeat(2, 1fr);
                }

                @media (max-width: 451px) {
                    grid-template-columns: repeat(1, 1fr);
                }
            }

        }



    }

    .no-data {
        font-size: 18px;
        color: #bc0d0d;
        text-align: center;
        margin: 20px 0;
        padding: 10px;
        background: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .close {
        padding: 40px 80px;

        p {
            text-align: center;
            background: var(--text-color-white);
            padding: 20px;
            font-size: 20px;
            border-radius: 6px;
            color: #cf0e0e;
            letter-spacing: 1.2px;
            font-weight: 600;
        }
    }
}
</style>