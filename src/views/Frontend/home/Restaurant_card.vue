<script setup>
import axios from 'axios';
import { defineProps } from "vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();


const props = defineProps(["restaurant"]);
//--------------------------------------------------

</script>


<template>

    <div class="restaurant_item">
        <div class="restaurant__thumb">
            <div class="image">
                <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
                    <img :src="restaurant.bg_image">
                </router-link>
            </div>
            <div class="wishlist">
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
        <div class="restaurant__info">
            <div class="restaurant__info-thumb">
                <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
                    <img :src="restaurant.image ">
                </router-link>
            </div>
            <div class="restaurant__info-content">
                <h1 class="restaurant__info-content-title">
                    <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
                        {{ restaurant.name }}
                    </router-link>
                </h1>
                <span class="restaurant__info-content-location">
                    <i class="fa-regular fa-compass"></i>{{ restaurant.address }}
                </span>
                <div class="restaurant__info-content-review">
                    <span><i class="fa-solid fa-star"></i></span> <span>(5.0)</span>
                </div>
            </div>
        </div>
    </div>
    <!-- ---------------------------------------------------------- -->

</template>

<style lang="scss" scoped>

.restaurant_item {
    background-color: var(--text-color-white);
    border-radius: 8px;
    .restaurant__thumb {
        position: relative;
        transition: all ease 0.3s;
        overflow: hidden;
        border-radius: 8px 8px 0px 0px;

        .image {
            transition: all ease 0.3s;
            width: 100%;
            height: 175px;
            display: block;

            img {
                width: 100%;
                height: 100%;
                transition: all ease .3s;
            }
        }

        .wishlist {
            position: absolute;
            font-size: 20px;
            margin: 0 auto;
            top: 0;
            right: 0;
            background: var(--text-color-white);
            color: #8f8787;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-right: 15px;
            margin-top: 12px;
            border-radius: 50%;
            box-shadow: 0px 0px 8px #ddd;
        }
    }

    .restaurant__info {
        padding: 25px 15px 20px 15px;
        background-color: var(--text-color-white);
        border-radius: 0px 0px 8px 8px;
        display: flex;
        justify-content: space-between;

        .restaurant__info-thumb {
            margin-right: 15px;
            width: 45px;

            img {
                width: 43px;
                height: 40px;
                border-radius: 6px;
                object-fit: cover;
            }
        }

        .restaurant__info-content {
            width: calc(100% - 45px);

            .restaurant__info-content-title {
                line-height: 1;
                margin-bottom: 6px;

                a {
                    text-decoration: none;
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--text-color-big);
                    transition: all .3s;
                }
            }

            .restaurant__info-content-location {
                font-size: 16px;
                color: var(--text-color-small-font);

                i {
                    color: var(--primary-color);
                    font-size: 16px;
                    margin-right: 5px;
                }
            }

            .restaurant__info-content-review {
                margin-top: 10px;
                font-size: 13px;
                font-weight: 500;
                color: #8f8787;

                i {
                    color: gold;
                }
            }
        }
    }
}

.restaurant_item:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .image img {
        transform: scale(1.2);
    }

    .restaurant__info-content-title a {
        color: var(--primary-color) !important;
    }
}
</style>