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
const discount = ref([]);
const validation = ref({});
//---------------------------------------------------
onMounted(async () => {
    getDiscount();
});
//---------------------------------------------------

const getDiscount = async () => {
    const id = route.params.id;
    let response = await axios.get(`/api/discounts/${id}`);
    discount.value = response.data.data;

}
//------------------------------------------------
const validateDiscount = () => {
    let errors = {};
    if (!discount.value.code) {
        errors.code = "Discount code is required.";
        clearValidationMessage("code");
    }
    if (!discount.value.discount_percentage) {
        errors.discount_percentage = "Discount percentage is required.";
        clearValidationMessage("discount_percentage");
    }
    if (!discount.value.start_date) {
        errors.start_date = "Discount start date is required.";
        clearValidationMessage("start_date");
    }
    if (!discount.value.end_date) {
        errors.end_date = "Discount end date is required.";
        clearValidationMessage("end_date");
    }
    if (!discount.value.usage_limit) {
        errors.usage_limit = "Discount usage limit is required.";
        clearValidationMessage("usage_limit");
    }
    if (!discount.value.min_order_amount) {
        errors.min_order_amount = "Discount min order amount is required.";
        clearValidationMessage("min_order_amount");
    }
    if (!discount.value.restaurant_id ) {
        errors.restaurant_id  = "Restaurant id is required.";
        clearValidationMessage("restaurant_id ");
    }

    return errors;
};
//--------------------------------------------------
const UpdateDiscount = async () => {
    validation.value = {};
    const errors = validateDiscount();
    if (Object.keys(errors).length > 0) {
        validation.value = errors;
        return;
    }
    let id = route.params.id;

    let response = await axios
        .patch(`/api/discounts/${id}`, {
            restaurant_id : discount.value.restaurant_id,
            code : discount.value.code,
            discount_percentage : discount.value.discount_percentage,
            start_date : discount.value.start_date,
            end_date : discount.value.end_date,
            usage_limit : discount.value.usage_limit,
            min_order_amount : discount.value.min_order_amount,
        })
        .then(() => {
            notify({
                title: "Discount Item Updated Successful",
                type: "success",
            });
            router.push("/owner/discounts");
        });

};
</script>

<template>
    <div class="container">
        <div class="header">
            <div class="btn">
                <button>
                    <router-link :to="{ name: 'discounts' }">
                        All Discount
                    </router-link>
                </button>
            </div>
            <h1>Edit Discount</h1>
        </div>
        <div class="content">
            <form @submit.prevent="UpdateDiscount" enctype="multipart/form-data">
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Discount Code <span style="color: var(--primary-color)">*</span></p>
                        <input type="text" v-model="discount.code" placeholder="Enter a discount code">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.code }}</p>
                    </div>

                    <div class="input-box">
                        <p>Discount Percentage <span style="color: var(--primary-color)">*</span></p>
                        <input type="number" v-model="discount.discount_percentage"
                            placeholder="Enter a discount percentage">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.discount_percentage }}
                        </p>
                    </div>
                </div>

                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Discount Usage limit <span style="color: var(--primary-color)">*</span></p>
                        <input type="number" v-model="discount.usage_limit" placeholder="Enter a discount usage limit">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.usage_limit }}</p>
                    </div>

                    <div class="input-box">
                        <p>Discount Min Order Amount <span style="color: var(--primary-color)">*</span></p>
                        <input type="number" v-model="discount.min_order_amount"
                            placeholder="Enter a discount min order amount">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.min_order_amount }}</p>
                    </div>
                </div>
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Discount Start Date <span style="color: var(--primary-color)">*</span></p>
                        <input type="date" v-model="discount.start_date" placeholder="Enter a discount start date">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.start_date }}</p>
                    </div>

                    <div class="input-box">
                        <p>Discount End Date <span style="color: var(--primary-color)">*</span></p>
                        <input type="date" v-model="discount.end_date" placeholder="Enter a discount end date">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.end_date }}</p>
                    </div>
                </div>
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Restaurant name <span style="color: var(--primary-color)">*</span></p>
                        <input type="text" v-model="discount.restaurant_id" placeholder="Enter a restaurant id ">
                        <p style="margin: 0px; color: #da0808; font-size: 14px;">{{ validation.restaurant_id }}</p>
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

            textarea,
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
                    background: var(--primary-color-hover);
                }
            }
        }
    }
}
</style>