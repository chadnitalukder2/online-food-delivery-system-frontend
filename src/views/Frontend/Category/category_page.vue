<script setup>
import CategoryMenuCard from './category_menu.vue';

import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from "vue-router";
const route = useRoute();

const categories = ref([]);
//---------------------------------------------------
onMounted(async () => {
    getCategories();
});
//---------------------------------------------------
const getCategories = async () => {
    const id = route.params.id;
    let response = await axios.get(`/api/categories/${id}`);
    categories.value = response.data.data;
    console.log(response.data.data);
}
</script>

<template>
    <div class="container">

        <div class="title_section">
            <div class="inner-banner">
                <img :src="categories.image">
            </div>
            <div class="banner_title">
                <h1> {{ categories.name }}</h1>
            </div>
        </div>
        <div class="restaurant-content">
            <div class="body-section">
                <CategoryMenuCard v-for=" menuItem in categories.menus" :key="menuItem.id" :menuItem="menuItem"    />
               
            </div>

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
                top: 70px;
            }
            h1 {
                font-size: 42px;
                font-weight: 700;
                color: #fff;
                @media (max-width: 610px) {
                    font-size: 32px;
        }
            }
        }
    }

    .restaurant-content {
        padding: 64px 80px;
        @media (max-width: 610px) {
            padding: 40px 20px;
        }
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
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            padding-top: 30px;
            @media (max-width: 501px) {
                grid-template-columns: repeat(1, 1fr);
        }
        }
    }


}
</style>