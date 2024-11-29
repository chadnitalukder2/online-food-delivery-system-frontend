<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from "vue-router";
const route = useRoute();

const category = ref({});
const menus = ref({});
const image = ref(null);
const validation = ref({});

//---------------------------------------------------
const getCategory = async () => {
    let response = await axios.get("/api/categories");
    category.value = response.data;
};
//---------------------------------------------------
const clearValidationMessage = (field) => {
    setTimeout(() => {
        validation.value[field] = "";
    }, 5000);
};

const handleFileChange = (event) => {
    image.value = event.target.files[0];
};

const validateMenus = () => {
    let errors = {};
    if (!menus.value.name) {
        errors.name = "Menu item name is required.";
        clearValidationMessage("name");
    }
    if (!image.value) {
        errors.image = "Menu Image is required.";
        clearValidationMessage("image");
    }
    if (!menus.value.category_id) {
        errors.category_id = "Category name is required.";
        clearValidationMessage("category_id");
    }
    if (!menus.value.price) {
        errors.price = "Price is required.";
        clearValidationMessage("price");
    }
    if (!menus.value.restaurant_id) {
        errors.restaurant_id = "Restaurant name is required.";
        clearValidationMessage("restaurant_id");
    }
    if (!menus.value.availability) {
        errors.availability = "Availability  is required.";
        clearValidationMessage("availability");
    }
    return errors;
};
//---------------------------------------
const updateMenu = async () => {
    validation.value = {};
    const errors = validateMenus();
    if (Object.keys(errors).length > 0) {
        validation.value = errors;
        return;
    }
    
    let id = route.params.id;
    const formData = new FormData();
    formData.append("name", menus.value.name);
    formData.append("restaurant_id", menus.value.restaurant_id);
    formData.append("category_id", menus.value.category_id);
    formData.append("price", menus.value.price);
    formData.append("availability", menus.value.availability);
    formData.append("description", menus.value.description || "");
    formData.append("image", image.value);

    try {
        let response = await axios.patch(`api/menus/${id}`, formData);
        notify({
            title: "Menu Item Updated Successfully",
            type: "success",
        });
        console.log("API Response:", response);
        // router.push("/owner/menus");
    } catch (error) {
        console.error("Failed to update menu:", error);
        notify({
            title: "Failed to Update Menu",
            type: "error",
        });
    }
};
//-------------------------------------
const getMenus = async () => {
    const id = route.params.id;
    console.log(id)
    let response = await axios.get(`/api/menus/${id}`);
    menus.value = response.data.data;

}
//--------------------------------------------------
onMounted(async () => {
    getCategory();
    getMenus();
});
//---------------------------------------------------
</script>

<template>
    <div class="container">
        <div class="header">
            <div class="btn">
                <button>
                    <router-link :to="{ name: 'menus' }">
                        All Menu
                    </router-link>
                </button>
            </div>
            <h1>Edit Menu</h1>
        </div>

        <div class="content">
            <form @submit.prevent="updateMenu" enctype="multipart/form-data">
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Menu Item Name <span style="color: #9c4202">*</span></p>
                        <input type="text" v-model="menus.name" placeholder="Enter a item name">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.name }}</p>
                    </div>

                    <div class="input-box">
                        <p>Menu Item Image <span style="color: #9c4202">*</span></p>
                        <input @change="handleFileChange" type="file">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.image }}</p>
                    </div>
                </div>
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Menu Item price <span style="color: #9c4202">*</span></p>
                        <input type="number" v-model="menus.price" placeholder="Enter a item price">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.price }}</p>
                    </div>

                    <div class="input-box">
                        <p>Menu Item Availability <span style="color: #9c4202">*</span></p>
                        <select v-model="menus.availability">
                            <option disabled>Select one</option>
                            <option value="out of stock">Out of stock</option>
                            <option value="in stock">In stock</option>
                        </select>
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.availability }}</p>
                    </div>
                </div>
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Category Name <span style="color: #9c4202">*</span></p>
                        <select v-model="menus.category_id">
                            <option disabled>Select a Category</option>
                            <option v-for="item in category" :key="item.id" :value="item.id">
                                {{ item.name }}
                            </option>
                        </select>
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.category_id }}</p>
                    </div>

                    <div class="input-box">
                        <p>Restaurant Name<span style="color: #9c4202">*</span></p>
                        <input v-model="menus.restaurant_id" placeholder="enter a restaurant name" type="number">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.restaurant_id }}</p>
                    </div>
                </div>

                <div class="input-box">
                    <p>Menu Item Description <span style="color: #9c4202">*</span></p>
                    <textarea v-model="menus.description" rows="5" cols="50"></textarea>
                </div>

                <div class="submit-btn">
                    <button type="submit">Update</button>
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
            select,
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