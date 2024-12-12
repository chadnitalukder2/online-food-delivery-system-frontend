<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from "vue-router";
const route = useRoute();
//---------------------------------------------------
const deliveryPersonnel = ref([]);
const validation = ref({});
//---------------------------------------------------
onMounted(async () => {
    getDeliveryPersonnel();
});
//---------------------------------------------------

const getDeliveryPersonnel = async () => {
    const id = route.params.id;
    let response = await axios.get(`/api/deliveryPersonnel/${id}`);
    deliveryPersonnel.value = response.data.data;

}
//--------------------------------------------------
const clearValidationMessage = (field) => {
    setTimeout(() => {
        validation.value[field] = "";
    }, 5000);
};

const validateDeliveryPersonnel = () => {
    let errors = {};
    if (!deliveryPersonnel.value.name) {
        errors.name = "Name is required.";
        clearValidationMessage("name");
    }
    if (!deliveryPersonnel.value.phone) {
        errors.phone = "Phone number is required.";
        clearValidationMessage("phone");
    }
    if (!deliveryPersonnel.value.email) {
        errors.email = "Email is required.";
        clearValidationMessage("email");
    }
    if (!deliveryPersonnel.value.vehicle_type) {
        errors.vehicle_type = "Vehicle Type is required.";
        clearValidationMessage("vehicle_type");
    }
    if (!deliveryPersonnel.value.availability) {
        errors.availability = "Availability is required.";
        clearValidationMessage("availability ");
    }

    return errors;
};
//--------------------------------------------------
const UpdateDeliveryPersonnel = async () => {

    validation.value = {};
    const errors = validateDeliveryPersonnel();
    if (Object.keys(errors).length > 0) {
        validation.value = errors;
        return;
    }

    let id = route.params.id;
    const formData = new FormData();
    formData.append("name", deliveryPersonnel.value.name);
    formData.append("phone", deliveryPersonnel.value.phone);
    formData.append("email", deliveryPersonnel.value.email);
    formData.append("vehicle_type", deliveryPersonnel.value.vehicle_type);
    formData.append("availability", deliveryPersonnel.value.availability);

    let response = await axios
        .patch(`/api/deliveryPersonnel/${id}`, {
            name: deliveryPersonnel.value.name,
            phone: deliveryPersonnel.value.phone,
            email: deliveryPersonnel.value.email,
            vehicle_type: deliveryPersonnel.value.vehicle_type,
            availability: deliveryPersonnel.value.availability,
        })
        .then(() => {
            notify({
                title: "Delivery Personnel Item Updated Successful",
                type: "success",
            });
            router.push("/owner/delivery-personnel");
        });

};
</script>

<template>
    <div class="container">
        <div class="header">
            <div class="btn">
                <button>
                    <router-link :to="{ name: 'delivery-personnel' }">
                        All delivery-personnel
                    </router-link>
                </button>
            </div>
            <h1>Edit Delivery Personnel</h1>
        </div>
        <div class="content">
            <form @submit.prevent="UpdateDeliveryPersonnel" enctype="multipart/form-data">
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Delivery Personnel Name <span style="color: var(--primary-color)">*</span></p>
                        <input type="text" v-model="deliveryPersonnel.name"
                            placeholder="Enter a delivery personnel name">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.name }}</p>
                    </div>

                    <div class="input-box">
                        <p>Delivery Personnel Number <span style="color: var(--primary-color)">*</span></p>
                        <input type="text" v-model="deliveryPersonnel.phone"
                            placeholder="Enter a delivery personnel number">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.phone }}</p>
                    </div>
                </div>

                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Delivery Personnel Email <span style="color: var(--primary-color)">*</span></p>
                        <input type="email" v-model="deliveryPersonnel.email"
                            placeholder="Enter a delivery personnel email.">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.email }}</p>
                    </div>

                    <div class="input-box">
                        <p>Delivery Personnel Vehicle Type <span style="color: var(--primary-color)">*</span></p>
                        <input type="text" v-model="deliveryPersonnel.vehicle_type"
                            placeholder="Enter a delivery personnel vehicle type.">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.vehicle_type }}</p>
                    </div>
                </div>

                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Availability <span style="color: var(--primary-color)">*</span></p>
                        <select v-model="deliveryPersonnel.availability">
                            <option disabled>Select one</option>
                            <option value="unavailable">Unavailable </option>
                            <option value="available">Available</option>
                        </select>
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.availability }}</p>
                    </div>
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
                border: 1px solid var(--primary-color);
                background: var(--primary-color);
                border-radius: 6px;
                cursor: pointer;
                transition: all ease-in .3s;

                a {
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 500;
                    color: var(--text-color-white);
                }

                &:hover {
                    transform: scale(1.05);
                    background-color: var(--text-color-white);

                    a {
                        color: var(--primary-color);
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

            select,
            input {
                width: 100%;
                padding: 15px;
                border: 1.5px solid rgb(214 211 211);
                border-radius: 6px;
                font-size: 14px;

                &:focus {
                    outline: none;
                    border: 1.5px solid var(--primary-color);
                }
            }
        }

        .submit-btn {
            text-align: right;
            padding-top: 10px;

            button {
                background: var(--primary-color);
                border: 1px solid var(--primary-color);
                border-radius: 6px;
                color: var(--text-color-white);
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