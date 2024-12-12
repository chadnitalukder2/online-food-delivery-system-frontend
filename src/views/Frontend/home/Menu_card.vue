<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();

import axios from 'axios';
import { defineProps } from "vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps(["menuItem"]);
const user_id = localStorage.getItem('user_id');
//==========================================


const addToCart = async () => {
    if (!user_id) {
        notify({
            title: "Please Login",
            type: "success",
        });
        router.push({ name: 'Login' });
    }
    else {
        const formData = new FormData();
        formData.append("user_id", user_id);
        formData.append("restaurant_id", props.menuItem.restaurant_id);
        formData.append("menu_id", props.menuItem.id);
        formData.append("quantity", '1');
        formData.append("order_id", '');
        formData.append("line_total", props.menuItem.price);
        formData.append("status", 'cart');
        try {
            await axios.post("/api/carts", formData);
            notify({
                title: "Carts Item Added Successfully",
                type: "success",
            });
            location.reload();
        } catch (error) {
            console.error("Failed to add Cart:", error);
            notify({
                title: "Failed to Add Cart",
                type: "error",
            });
        }
    }

};
</script>

<template>
    <div v-if="menuItem.availability === 'out of stock'">
        <div class="food_item" >
        <div class="food__item-thumb">

            <a href="#">
                <img :src="menuItem.image">
            </a>
        </div>
        <div class="popular-food__item-info">
            <div class="food-name">
                <h1> <a href="#">{{ menuItem.name }}</a> </h1>
            </div>
            <div class="price">
                From Tk {{ menuItem.price }}
            </div>
            <div class="description">
                <p>{{ menuItem.description }}</p>
            </div>
            <p style="color: red; padding-top: 4px;">{{ menuItem.availability  }}</p>
        </div>
      
    
    </div>
    </div>

    <div class="food_item" v-else>
        <div class="food__item-thumb">

            <a href="#">
                <img :src="menuItem.image">
            </a>
        </div>
        <div class="add-btn-long" @click="addToCart">
            <a href="#">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
        <div class="popular-food__item-info">
            <div class="food-name">
                <h1> <a href="#">{{ menuItem.name }}</a> </h1>
            </div>
            <div class="price">
                From Tk {{ menuItem.price }}
            </div>
            <div class="description">
                <p>{{ menuItem.description }}</p>
            </div>
        </div>
        <div class="add-btn-short" @click="addToCart">
            <a href="#">
                <i class="fa-solid fa-plus"></i>
            </a>
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
    display: flex;

    @media (max-width: 826px) {
        display: block;
    }

    .food__item-thumb {
        position: relative;
        margin-right: 15px;
        height: 90px;
        width: 125px;
        border-radius: 6px;
        overflow: hidden;

        @media (max-width: 826px) {
            height: 175px;
            width: 100%;
            padding-bottom: 20px;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover
        }
    }

    .add-btn-long {
        position: absolute;
        font-size: 12px;
        background: var(--text-color-white);
        width: 25px;
        display: flex;
        border-radius: 50%;
        box-shadow: 0px 0px 8px #ddd;
        justify-content: center;
        height: 25px;
        align-items: center;
        margin: 60px 0px 10px 8px;
        transition: all ease .3s;

        @media (max-width: 826px) {
            display: none;
        }

        a {
            color: #787878;
        }

        &:hover {
            background: #f6f5f5;

            a {
                color: var(--primary-color);
            }

        }
    }
    .add-btn-short {
        font-size: 15px;
        background: var(--text-color-white);
        width: 25px;
        display: flex;
        border-radius: 50%;
        box-shadow: 0px 0px 8px #ddd;
        justify-content: center;
        height: 25px;
        align-items: center;
        margin: 16px 0px 0px 0px;
        transition: all ease .3s;

        @media (min-width: 826px) {
            display: none;
        }

        a {
            color: #787878;
        }

        &:hover {
            background: #f6f5f5;

            a {
                color: var(--primary-color);
            }

        }
    }

    .popular-food__item-info {
        .food-name {
            padding-bottom: 10px;

            h1 {
                font-size: 18px;

                a {
                    font-weight: 600;
                    color: #212121;

                    &:hover {
                        color: var(--primary-color);
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
            color: #999999;
            font-size: 15px;
            font-weight: bold
        }
    }

    .heart {
        font-size: 18px;
        margin: -70px 0px 0px 0px;

        a {
            color: #999999;
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