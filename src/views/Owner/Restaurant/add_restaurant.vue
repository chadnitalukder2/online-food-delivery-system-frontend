<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref,onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
//===========================================
const restaurants = ref({});
const image = ref(null);
const bg_image = ref(null);
const validation = ref({});
//=====================================================
const clearValidationMessage = (field) => {
    setTimeout(() => {
        validation.value[field] = "";
    }, 5000);
};

const handleFileChange = (event) => {
    image.value = event.target.files[0];
};
const handleFileChangeBgImage = (event) => {
    bg_image.value = event.target.files[0];
};
const validateCategory = () => {
    let errors = {};
    if (!restaurants.value.name) {
        errors.name = "Restaurant Name is required.";
        clearValidationMessage("name");
    }
    if (!restaurants.value.email) {
        errors.email = "Restaurant email is required.";
        clearValidationMessage("email");
    }
    if (!restaurants.value.phone) {
        errors.phone = "Restaurant phone number is required.";
        clearValidationMessage("phone");
    }
    if (!restaurants.value.address) {
        errors.address  = "Restaurant address is required.";
        clearValidationMessage("address");
    }
    
    return errors;
};
//==========================================
const addRestaurant = async () => {
    validation.value = {};
    const errors = validateCategory();
    if (Object.keys(errors).length > 0) {
        validation.value = errors;
        return;
    }
console.log('hello');
    const formData = new FormData();
    formData.append("owner_id", localStorage.getItem('user_id'))
    formData.append("name", restaurants.value.name);
    formData.append("phone", restaurants.value.phone);
    formData.append("email", restaurants.value.email);
    formData.append("address", restaurants.value.address);
    formData.append("status", restaurants.value.status || '');
    formData.append("delivery_fee", restaurants.value.delivery_fee || '');
    formData.append("delivery_time", restaurants.value.delivery_time || '');
    formData.append("description", restaurants.value.description || "");
    formData.append("image", image.value || '') ;
    formData.append("bg_image", bg_image.value || '');
    try {
        await axios.post("/api/restaurants", formData);
        notify({
            title: "Restaurant Item Added Successfully",
            type: "success",
        });
        router.push("/owner/owner-all-restaurants");
    } catch (error) {
        console.error("Failed to add restaurants:", error);
        notify({
            title: "Failed to Add restaurants",
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
                    <router-link :to="{ name: 'owner-all-restaurants' }">
                        All Restaurant
                    </router-link>
                </button>
            </div>
            <h1>Add Restaurant</h1>
        </div>

        <div class="content">
            <form @submit.prevent="addRestaurant" enctype="multipart/form-data">
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Restaurant Name <span style="color: #9c4202">*</span></p>
                        <input type="text" v-model="restaurants.name" placeholder="Enter a restaurant name">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.name }}</p>
                    </div>

                    <div class="input-box">
                        <p>Restaurant Image <span style="color: #9c4202">*</span></p>
                        <input @change="handleFileChange" type="file">
                    </div>
                </div>

                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Restaurant Phone <span style="color: #9c4202">*</span></p>
                        <input type="number" v-model="restaurants.phone" placeholder="Enter a restaurant phone">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.phone }}</p>
                    </div>

                    <div class="input-box">
                        <p>Restaurant Email  <span style="color: #9c4202">*</span></p>
                        <input type="email" v-model="restaurants.email" placeholder="Enter a restaurant email">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.email }}</p>
                    </div>
                </div>

                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Restaurant Address  <span style="color: #9c4202">*</span></p>
                        <input type="text" v-model="restaurants.address" placeholder="Enter a restaurant address ">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.address }}</p>
                    </div>

                    <div class="input-box">
                        <p>Restaurant status  <span style="color: #9c4202">*</span></p>
                        <select v-model="restaurants.status" >
                            <option disabled>Select one</option>
                            <option value="open">Open </option>
                            <option value="close" >Close</option>
                        </select>
                    </div>
                </div>

                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Delivery Fee  <span style="color: #9c4202">*</span></p>
                        <input type="number" v-model="restaurants.delivery_fee" placeholder="Enter a restaurant delivery fee ">
                    </div>

                    <div class="input-box">
                        <p>Delivery Time  <span style="color: #9c4202">*</span></p>
                        <input type="number" v-model="restaurants.delivery_time" placeholder="Enter a restaurant delivery time as a min ">
                    </div>
                </div>

                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Restaurant background image  <span style="color: #9c4202">*</span></p>
                        <input @change="handleFileChangeBgImage" type="file">
                    </div>

                </div>
             
                <div class="input-box">
                    <p>Restaurant Description <span style="color: #9c4202">*</span></p>
                    <textarea v-model="restaurants.description" rows="5" cols="50"></textarea>
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

            textarea,select,
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