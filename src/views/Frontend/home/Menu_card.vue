<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const category = ref({});

const addCategory = async () => {
    validation.value = {};
    const errors = validateCategory();
    if (Object.keys(errors).length > 0) {
        validation.value = errors;
        return;
    }

    const formData = new FormData();
    formData.append("name", category.value.name);
    formData.append("description", category.value.description || "");
    formData.append("image", image.value);

    try {
        await axios.post("/api/categories", formData);
        notify({
            title: "Category Item Added Successfully",
            type: "success",
        });
        router.push("/owner/categories");
    } catch (error) {
        console.error("Failed to add category:", error);
        notify({
            title: "Failed to Add Category",
            type: "error",
        });
    }
};
</script>

<template>
    <div class="food_item">
        <div class="food__item-thumb">
            <a href="#">
                <img src="../../../assets/menu-1.png">
            </a>
        </div>
        <div class="add-btn">
            <a href="#">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
        <div class="popular-food__item-info">
            <div class="food-name">
                <h1> <a href="#">Chicken Tehari</a> </h1>
            </div>
            <div class="price" >
                From Tk 300
            </div>
            <div class="description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
        <div class="heart">
            <a href="#">
                <i class="fa-regular fa-heart"></i>
            </a>
        </div>
    </div>

    <div class="food_item">
        <div class="food__item-thumb">
            <a href="#">
                <img src="../../../assets/menu-2.png">
            </a>
        </div>
        <div class="add-btn">
            <a href="#">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
        <div class="popular-food__item-info">
            <div class="food-name">
                <h1> <a href="#">Chicken Tehari</a> </h1>
            </div>
            <div class="price">
                From Tk 300
            </div>
            <div class="description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
        <div class="heart">
            <a href="#">
                <i class="fa-regular fa-heart"></i>
            </a>
        </div>
    </div>
    <div class="food_item">
        <div class="food__item-thumb">
            <a href="#">
                <img src="../../../assets/menu-3.png">
            </a>
        </div>
        <div class="add-btn">
            <a href="#">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
        <div class="popular-food__item-info">
            <div class="food-name">
                <h1> <a href="#">Chicken Tehari</a> </h1>
            </div>
            <div class="price">
                From Tk 300
            </div>
            <div class="description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
        <div class="heart">
            <a href="#">
                <i class="fa-regular fa-heart"></i>
            </a>
        </div>
    </div>
    <div class="food_item">
        <div class="food__item-thumb">
            <a href="#">
                <img src="../../../assets/menu-4.png">
            </a>
        </div>
        <div class="add-btn">
            <a href="#">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
        <div class="popular-food__item-info">
            <div class="food-name">
                <h1> <a href="#">Chicken Tehari</a> </h1>
            </div>
            <div class="price">
                From Tk 300
            </div>
            <div class="description">
                <p>Lorem, ipsum vjjdj ndjj ns nd dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
        <div class="heart">
            <a href="#">
                <i class="fa-regular fa-heart"></i>
            </a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.food_item {
    padding: 15px;
    height: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    background-color: #fff;
    transition: all ease 0.3s;
    align-items: center;
    display: flex;

    .food__item-thumb {
        position: relative;
        margin-right: 15px;
        height: 90px;
        width: 125px;
        border-radius: 6px;
        overflow: hidden;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover
        }
    }

    .add-btn {
        position: absolute;
        font-size: 12px;
        background: #fff;
        width: 25px;
        display: flex;
        border-radius: 50%;
        box-shadow: 0px 0px 8px #ddd;
        justify-content: center;
        height: 25px;
        align-items: center;
        margin: 60px 0px 10px 8px;
        transition: all ease .3s;

        a {
            color: #787878;
        }

        &:hover {
            background: #f6f5f5;

            a {
                color: #9c4202;
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
                        color: #9c4202;
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
            color: #9c4202;
        }

    }

}
</style>