<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import Modal from '@/components/global/Modal.vue';
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";
const router = useRouter();
//------------------------------
const carts = ref([]);
const order = ref({
    selectedItems: [],
    sub_total: 0,
    total: 0
});
const deleteVisibleId = ref(null);
//-----------------------------
onMounted(async () => {
    getCarts()
});
//------------------------------
const getCarts = async () => {
    const id = localStorage.getItem('user_id')
    let response = await axios.get(`/api/getCarts/${id}`);
    carts.value = response.data;
};
//=======================================================
const totalDeliveryFee = computed(() => {
    const uniqueRestaurants = new Set(carts.value.map((item) => item.restaurant.id));
    return Array.from(uniqueRestaurants)
        .map((restaurantId) => {
            const restaurant = carts.value.find((item) => item.restaurant.id === restaurantId).restaurant;
            return restaurant.delivery_fee;
        })
        .reduce((total, fee) => total + fee, '');
});
//=======================================================
const updateLineTotal = (item) => {
    item.line_total = item.quantity * item.menu.price;
    subTotal();
}
const subTotal = () => {
    let result = 0;
    for (let i = 0; i < carts.value.length; i++) {
        if (order.value.selectedItems.includes(carts.value[i].id)) {
            result += carts.value[i].line_total;
        }
    }

    order.value.sub_total = result;
    let totalValue = order.value.sub_total + Number(totalDeliveryFee.value) - 5;

    order.value.total = totalValue;
}
//---------------------------------------------------
const openModalDelete = (id) => {
    deleteVisibleId.value = id;
};
const closeModalDelete = () => {
    deleteVisibleId.value = null;
};
const deleteCart = (id) => {
    axios.delete(`/api/carts/${id}`).then(() => {
        notify({
            title: "Cart Item Deleted",
            type: "success",
        });
        getCarts();
    });
};
//----------------------------------------------

const addOrders = async () => {
    try {
        if (order.value.payment_status === 'cash on delivery') {
            let data = {
            restaurant_id: carts.value?.[0]?.restaurant_id,
            user_id: localStorage.getItem('user_id'),
            order_items_id: order.value.selectedItems,
            total_amount: order.value.total,
            delivery_address: order.value.address,
            payment_status: order.value.payment_status,
            name: order.value.name,
            email: order.value.email,
            phone: order.value.phone
        }
            const response = await axios.post("/api/orders", data);
            if (response.status === 201) {
                notify({ title: "Order Placed Successfully", type: "success" });
            }
        } else {
            console.log("Pay using card");
        }
    } catch (error) {
        notify({
            title: "Order Placement Failed",
            text: error.response?.data?.message || "An error occurred",
            type: "error",
        });
    }
};
//-------------------------------------------
// const addOrders2 = async () => {
//     if (order.value.payment_status === 'cash on delivery') {
//         let data = {
//             restaurant_id: carts.value?.[0]?.restaurant_id,
//             user_id: localStorage.getItem('user_id'),
//             order_items_id: order.value.selectedItems,
//             total_amount: order.value.total,
//             delivery_address: order.value.address,
//             payment_status: order.value.payment_status,
//             name: order.value.name,
//             email: order.value.email,
//             phone: order.value.phone
//         }
//         console.log(carts.value?.[0]?.restaurant_id, 'data');
//         await axios.post("/api/orders", data).then((res) => {
//             if (res.status == 201) {
//                 notify({
//                     title: "Order Placed Successfully",
//                     type: "success",
//                 });

//                 let parse_url = JSON.parse(res.data.payment_redirect_url);
//                 if (parse_url.status == "success") {
//                     window.location.replace(parse_url.data);
//                 }

//             } else {
//                 notify({
//                     title: "Order Placed Failed",
//                     text: res.data.message,
//                     type: "error",
//                 });
//             }
//         }).catch((err) => {
//             notify({
//                 title: "Order Placed Failed",
//                 text: err.response.data.message,
//                 type: "error",
//             });
//         })
//         order.value= [];
//     }
//     else{
//         console.log('pay using card');
//     }

// }

</script>

<template>
    <div class="container">
        <div class="table" style="padding-bottom: 85px">
            <table>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Line Total</th>
                    <th>Action</th>
                </tr>

                <tr v-for="item in carts" :key="item.id">

                    <Modal :show="deleteVisibleId === item.id" @close="closeModalDelete">
                        <div id="myModal" style="text-align: center;">
                            <h4 class="delete-title">Are you sure?</h4>
                            <div class="modal-body">
                                <p style="font-size: 14px; color: #999999;">Do you really want to delete these records?
                                    This process
                                    cannot be undone.</p>
                            </div>
                            <div class="modal_footer" style="padding: 20px;">
                                <button @close="closeModalDelete" type="button" class="secondary">Cancel</button>
                                <button @click="deleteCart(item.id)" type="button"
                                    style="background: #f15e5e;">Delete</button>
                            </div>
                        </div>
                    </Modal>
                    <td>
                        <input @change="subTotal()" type="checkbox" :name="`order-item-${item.id}`" :id="item.id"
                            v-model="order.selectedItems" :value="item.id">
                    </td>

                    <td>{{ item.id }}</td>
                    <td style="width: 120px; height: 100px">
                        <img :src="item.menu.image" style="width: 100%; height: 100%">
                    </td>
                    <td>{{ item.menu.name }}</td>
                    <td>${{ item.menu.price }}</td>
                    <td>
                        <input type="number" @change="updateLineTotal(item)" v-model="item.quantity">

                    </td>
                    <td>${{ item.line_total }}</td>
                    <td @click="openModalDelete(item.id)" style="color: #f15e5e; cursor: pointer;">
                        Remove
                    </td>
                </tr>


            </table>
        </div>
        <!-- ============================= -->
        <div class="order-wrapper">
            <div class="cart">
                <div class="cart_total">
                    <h3>Cart Totals</h3>
                    <p class="d-flex">
                        <span>Subtotal</span>
                        <span>$ {{ order.sub_total }}</span>
                    </p>
                    <p class="d-flex">
                        <span>Delivery</span>
                        <span>$ {{ totalDeliveryFee }}</span>
                    </p>
                    <p>
                        <span>Discount</span>
                        <span>$5.00</span>
                    </p>
                    <hr style="background: rgba(255, 255, 255, 0.1)" />
                    <p>
                        <span>TOTAL</span>
                        <span style="color: #484646; font-weight: 600">${{ order.total }}</span>
                    </p>
                </div>
            </div>
            <div class="order-form">
                <h2 class="title">Personal details</h2>
                <form @submit.prevent="addOrders">
                    <div class="input_box">
                        <label><b> Name : </b></label><br>
                        <input type="text" v-model="order.name" name="name" placeholder="name" required>
                    </div>

                    <div class="input_box">
                        <label><b>Email : </b></label><br>
                        <input type="email" v-model="order.email" name="message" placeholder="email" required>
                    </div>

                    <div class="input_box">
                        <label for="message"><b>Number : </b></label><br>
                        <input type="number" v-model="order.phone" name="phone" placeholder="number" required>
                    </div>

                    <div class="input_box">
                        <label><b>Pick-up Address : </b></label><br>
                        <input type="text" v-model="order.address" name="message" placeholder="address" required>
                    </div>

                    <div class="input_box">
                        <label><b>Payment Type : </b></label><br>
                        <select v-model="order.payment_status">
                            <option disabled>Select one</option>
                            <option value="cash on delivery">Cash On Delivery</option>
                            <option value="pay using card"> Pay Using Card</option>
                        </select>
                    </div>

                    <input type="submit" class="check_out" value="Place pick-up order">
                </form>
            </div>
        </div>

        <!-- ================================= -->


    </div>
</template>

<style lang="scss" scoped>
#myModal {
    .modal_footer {
        button {

            cursor: pointer;
            background: #c1c1c1;
            color: #fff;
            border-radius: 4px;
            text-decoration: none;
            transition: all 0.4s;
            line-height: normal;
            min-width: 120px;
            border: none;
            min-height: 40px;
            border-radius: 3px;
            margin: 0 5px;
        }

    }

}

.container {
    padding: 80px 100px;
    text-align: center;

    @media (max-width: 750px) {
        padding: 40px 20px;
    }
}

.order-wrapper {
    gap: 20px;
    justify-content: space-between;
    display: flex;

    @media (max-width: 1158px) {
        display: block;
    }

    .cart {
        flex-basis: 35%;


        .cart_total {
            padding: 20px;
            text-align: center;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 8px;

            h3 {
                font-size: 18px;
                text-align: left;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 20px;
                font-weight: 700;
                color: #484646
            }

            p {
                display: flex;
                justify-content: space-between;
                padding-bottom: 10px;

                span {
                    font-family: "Open Sans", Arial, sans-serif;
                    font-size: 15px;
                    line-height: 1.8;
                    font-weight: 400;
                    color: gray;
                }
            }

            hr {
                background: rgba(255, 255, 255, 0.1);
                margin-top: 1rem;
                margin-bottom: 1rem;
                border: 0;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
            }
        }
    }

    .order-form {
        flex-basis: 50%;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 8px;

        .title {
            color: #484646;
            font-size: 22px;
            font-weight: 600;
            letter-spacing: 1.1px;
        }

        .input_box {
            text-align: left;
            padding-top: 20px;
        }

        label {
            text-align: left;
            color: #676666;
            font-size: 14px;
        }

        select,
        input {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;

            &:focus-visible {
                outline: none;
                border: 1px solid #0064d1;
            }
        }

        .check_out {
            border-radius: 8px;
            cursor: pointer;
            background: #0064d1;
            font-size: 16px;
            margin-top: 20px;
            padding: 14px;
            color: #fff;
            border: 1px solid #0064d1;
            transition: all 0.3s ease;

            &:hover {
                background: #0271e8;
                border: 1px solid #0064d1;
            }
        }
    }
}



table {
    border-collapse: collapse;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
}

.delete-icon {
    color: #eb1613;
    cursor: pointer;
}

th {
    background: #d7d6d624;
    padding: 20px 10px !important;
    border: 1px solid transparent;
    color: #353434;
    font-size: 16px;
}

th,
td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

td {
    color: #656262;
    font-size: 14px !important;

    input {
        width: 40%;
        color: #656262;
        padding: 15px 10px;
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.05);

        &:focus-visible {
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.05) !important;
        }
    }
}

.review-template {
    // border-right: 1px solid gray;
    width: 50%;
    min-width: 400px;

    .adrm_review_temp_one {
        display: flex;
        gap: 30px;
        width: calc(100% - 40px);
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid rgb(240, 236, 236);
        background: #9e9e9e1a;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 10px;

        @media screen and (max-width: 768px) {
            padding: 4px;
            gap: 10px;
        }

        .adrm_review_temp_one_avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .adrm_review_temp_one_content {
            width: calc(100% - 100px);

            .adrm_review_temp_one_content_header {
                display: flex;
                gap: 10px;
                justify-content: space-between;

                .date {
                    font-size: 14px;
                    font-weight: 600;
                    color: black;
                }

                h3,
                p {
                    margin: 0px;
                }

                .adrm_review_temp_one_content_header_name {
                    font-size: 20px;
                    font-weight: 600;
                    color: black;
                }

                .adrm_review_temp_one_content_header_rating {
                    display: flex;
                    gap: 5px;
                }

                .adrm-star-rating {
                    span {
                        color: gray;
                        font-size: 18px;
                    }

                    .active {
                        color: #f1c40f;
                    }
                }

                @media screen and (max-width: 768px) {
                    display: block;

                    .date {
                        margin: 0;
                    }

                    .adrm_review_temp_one_content_header_name {
                        margin: 0;
                    }
                }
            }

            .adrm_review_temp_one_content_body {
                .review {
                    color: black;
                    margin-bottom: 10px;
                }

                @media screen and (max-width: 768px) {
                    .review {
                        margin-top: 0px;
                    }
                }
            }
        }
    }
}
</style>