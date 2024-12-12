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
const orders = ref([]);
//---------------------------------------------------
onMounted(async () => {
    getOrder();
});

//---------------------------

//-------------------------------------
const getOrder = async () => {
    const id = route.params.id;
    let response = await axios.get(`/api/orders/${id}`);
    orders.value = response.data.data;
console.log(orders.value, 'data')
}
//--------------------------------------------------
const UpdateCategory = async () => {
    let id = route.params.id;

    let response = await axios
        .patch(`/api/orders/${id}`, {
            status: orders.value.status,
            payment_status: orders.value.payment_status,
        })
        .then(() => {
            console.log('hello');
            notify({
                title: "Order Item Updated Successful",
                type: "success",
            });
            router.push("/owner/orders");
        });

};
</script>

<template>
    <div class="container">
        <div class="header">
            <div class="btn">
                <button>
                    <router-link :to="{ name: 'orders' }">
                        All Order
                    </router-link>
                </button>
            </div>
            <h1>Edit Order</h1>
        </div>
        <div class="content">
            <form @submit.prevent="UpdateCategory" enctype="multipart/form-data">
                <div class="form-wrapper">
                    <div class="input-box">
                        <p>Order Status<span style="color: var(--primary-color)">*</span></p>
                        <select v-model="orders.status">
                            <option disabled>Select one</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="canceled">Canceled</option>
                        </select>
                     
                    </div>

                    <div class="input-box">
                        <p>Payment Method<span style="color: var(--primary-color)">*</span></p>
                        <select v-model="orders.payment_status">
                            <option disabled>Select one</option>
                            <option value="cash on delivery">Cash on delivery</option>
                            <option value="pay using card">Pay using card</option>
                        </select>
                      
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