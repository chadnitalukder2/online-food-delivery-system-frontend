<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const category = ref({
    name: "",
    restaurant_id: "",
    description: "",
});
const image = ref(null);
const validation = ref({});

const clearValidationMessage = (field) => {
    setTimeout(() => {
        validation.value[field] = "";
    }, 5000);
};

const handleFileChange = (event) => {
    image.value = event.target.files[0];
};

const validateCategory = () => {
    let errors = {};
    if (!category.value.name) {
        errors.name = "Category Name is required.";
        clearValidationMessage("name");
    }
    if (!category.value.restaurant_id) {
        errors.restaurant_id = "Restaurant id is required.";
        clearValidationMessage("restaurant_id");
    }
    if (!image.value) {
        errors.image = "Category Image is required.";
        clearValidationMessage("image");
    }
    return errors;
};

const addCategory = async () => {
    validation.value = {};
    const errors = validateCategory();
    if (Object.keys(errors).length > 0) {
        validation.value = errors;
        return;
    }

    const formData = new FormData();
    formData.append("name", category.value.name);
    formData.append("restaurant_id", category.value.restaurant_id);
    formData.append("description", category.value.description || "");
    formData.append("image", image.value);
console.log(category.value, 'hello');
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
    <div class="container">
        <div class="header">
            <div class="btn">
                <button>
                    <router-link :to="{ name: 'categories' }">
                        All Category
                    </router-link>
                </button>
            </div>
            <h1>Add Category</h1>
        </div>

        <div class="content">
            <form @submit.prevent="addCategory">
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Category Name <span style="color: #9c4202">*</span></p>
                        <input type="text" v-model="category.name" placeholder="Enter a category name">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.name }}</p>
                    </div>

                    <div class="input-box">
                        <p>Category Image <span style="color: #9c4202">*</span></p>
                        <input @change="handleFileChange" type="file">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.image }}</p>
                    </div>
                </div>
                <div class="form-wrapper">
                <div class="input-box">
                        <p>Restaurant Id <span style="color: #9c4202">*</span></p>
                        <input v-model="category.restaurant_id" type="number">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.restaurant_id }}</p>
                    </div>
                    </div>
                <div class="input-box">
                    <p>Category Description <span style="color: #9c4202">*</span></p>
                    <textarea v-model="category.description" rows="5" cols="50"></textarea>
                </div>

                <div class="submit-btn">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 50px 30px;

    .header {
        .btn {
            text-align: right;
            padding-bottom: 20px;

            button {
                padding: 10px 20px;
                border: 1px solid #9c4202;
                background: #9c4202;
                border-radius: 6px;
                cursor: pointer;
                transition: all ease-in .3s;

                a {
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                }

                &:hover {
                    transform: scale(1.05);
                    background-color: #fff;

                    a {
                        color: #9c4202;
                    }
                }
            }
        }

        h1 {
            margin-top: 0px;
            font-size: 22px;
            color: #444;
            font-weight: 600;
            background: #e6e6e652;
            padding: 15px 20px;
            border-radius: 6px;
            border: 1px solid #e1dfdf;
        }
    }

    .content {
        padding: 50px 50px;

        .form-wrapper {
            display: flex;
            justify-content: space-between;
            gap: 30px;
            width: 100%;

            .input-box {
                padding-bottom: 20px;
                flex-basis: 50%;

            }
        }

        .input-box {
            padding-bottom: 20px;

            p {
                font-size: 16px;
                color: #444;
                padding-bottom: 10px;
                font-weight: 500;
            }

            textarea,
            input {
                width: 100%;
                padding: 15px;
                border: 1.5px solid rgb(214 211 211);
                border-radius: 6px;
                font-size: 14px;

                &:focus {
                    outline: none;
                    border: 1.5px solid #9c4202;
                }
            }
        }

        .submit-btn {
            text-align: right;
            padding-top: 10px;

            button {
                background: #9c4202;
                border: 1px solid #9c4202;
                border-radius: 6px;
                color: #fff;
                font-size: 18px;
                padding: 8px 28px;
                cursor: pointer;
                transition: all .3s;

                &:hover {
                    background: #ba4f03;
                }
            }
        }
    }
}
</style>