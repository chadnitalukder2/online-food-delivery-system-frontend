<script setup>
import axios from 'axios';
import { defineProps } from "vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();


// const props = defineProps(["restaurant"]);
const props = defineProps(["menuItem"]);
//--------------------------------------------------


</script>

<template>

    <div class="food_item">
        <div class="food__item-thumb">
            <router-link>
                <img :src="menuItem.image">
            </router-link>

        </div>

        <div class="popular-food__item-info">
            <div class="food-name">
                <h1>
                    <router-link :to="{ name: 'restaurant', params: { id: menuItem.restaurant_id } }">
                        {{ menuItem.name }}
                    </router-link>
                </h1>
            </div>
            <div class="price">
                From Tk {{ menuItem.price }}
            </div>
            <div class="description">
                <p>{{ menuItem.description }}</p>
            </div>
        </div>
        <!-- <div class="heart">
            <a href="#">
                <i class="fa-regular fa-heart"></i>
            </a>
        </div> -->
    </div>


</template>

<style lang="scss" scoped>
.food_item {
    padding: 15px;
    height: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    background-color: var(--text-color-white);
    transition: all ease 0.3s;
    align-items: center;
    justify-content: space-between;
    display: flex;

    @media (max-width: 779px) {
        display: ruby;
    }

    .food__item-thumb {
        flex-basis: 25%;
        position: relative;
        margin-right: 15px;
        height: 90px;
        width: 125px;
        border-radius: 6px;
        overflow: hidden;

        @media (max-width: 779px) {
            height: 170px;
            width: 100%;
            padding-bottom: 12px;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover
        }
    }

    .popular-food__item-info {
        flex-basis: 65%;

        .food-name {
            padding-bottom: 10px;

            h1 {
                font-size: 18px;

                a {
                    font-weight: 600;
                    color: var(--text-color-big);

                    &:hover {
                        color: var(--primary-color-hover);
                    }
                }
            }
        }

        .price {
            color: #787878;
            font-size: 15px;
            font-weight: bold;
            padding-bottom: 10px;
        }

        .description {
            color: var(--text-color-small-font);
            font-size: 15px;
            font-weight: bold
        }
    }

    .heart {
        flex-basis: 15%;
        font-size: 18px;
        margin: -70px -30px 0px 0px;

        a {
            color: var(--text-color-small-font);
        }
    }

    &:hover {
        transform: translateY(-5px);

        .food-name h1 a {
            color: var(--primary-color);
        }

    }

}
</style>