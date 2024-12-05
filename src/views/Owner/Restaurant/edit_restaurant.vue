<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref,onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from "vue-router";
const route = useRoute();
//===========================================
const restaurants = ref({});
const validation = ref({});
const users = ref([]);
//==================================================
onMounted(async () => {
  getUsers();
  getRestaurant()
});
//---------------------------------------------------
const getUsers = async () => {
  let response = await axios.get(`/api/users`);
  users.value = response.data;
};
//=====================================================
const getRestaurant = async () => {
    const id = route.params.id;
    let response = await axios.get(`/api/restaurants/${id}`);
    restaurants.value = response.data.data;

}
//====================================================
const clearValidationMessage = (field) => {
    setTimeout(() => {
        validation.value[field] = "";
    }, 5000);
};

const validateCategory = () => {
    let errors = {};
    if (!restaurants.value.owner_id) {
        errors.owner_id = "User Name is required.";
        clearValidationMessage("owner_id");
    }
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
const UpdateRestaurant = async () => {
    validation.value = {};
    const errors = validateCategory();
    if (Object.keys(errors).length > 0) {
        validation.value = errors;
        return;
    }

    let id = route.params.id;
    
    let response = await axios
        .patch(`/api/restaurants/${id}`, {
            owner_id: restaurants.value.owner_id,
            name: restaurants.value.name ,
            phone: restaurants.value.phone,
            email: restaurants.value.email ,
            address: restaurants.value.address ,
            status: restaurants.value.status,
            delivery_fee: restaurants.value.delivery_fee,
            delivery_time: restaurants.value.delivery_time,
            description: restaurants.value.description,
        })
        .then(() => {
            notify({
                title: "Restaurant Item Updated Successful",
                type: "success",
            });
            router.push("/owner/owner-all-restaurants");
        });

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
            <h1>Edit Restaurant</h1>
        </div>

        <div class="content">
            <form @submit.prevent="UpdateRestaurant"  enctype="multipart/form-data">
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Restaurant Name <span style="color: #9c4202">*</span></p>
                        <input type="text" v-model="restaurants.name" placeholder="Enter a restaurant name">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.name }}</p>
                    </div>

                    <div class="input-box">
                        <p>User Name  <span style="color: #9c4202">*</span></p>
                        <select v-model="restaurants.owner_id" >
                            <option disabled>Select one</option>
                            <option v-for="item in users " :key="item.id" :value="item.id">{{ item.name }} </option>
                        </select>
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.owner_id }}</p>
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

               
             
                <div class="input-box">
                    <p>Restaurant Description <span style="color: #9c4202">*</span></p>
                    <textarea v-model="restaurants.description" rows="5" cols="50"></textarea>
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