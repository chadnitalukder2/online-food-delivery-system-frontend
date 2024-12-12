<script setup>
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import Modal from "@/components/global/Modal.vue";
import ModalView from "@/components/global/ModalView.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from "vue-router";
const route = useRoute();
//---------------------------------------------------
const orders = ref([]);
const deleteVisibleId = ref(null);
const VisibleId = ref(null);
//---------------------------------------------------
onMounted(async () => {
    getOrdersById();
});
//------------------------------------------------------
const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
//=======================================================
const name = localStorage.getItem('user_name')
const email = localStorage.getItem('user_email')
const role = localStorage.getItem('user_role')
//========================================================
const getOrdersById = async () => {
    const id = localStorage.getItem('user_id');
    let response = await axios.get(`/api/getOrdersByUserId/${id}`);
    orders.value = response.data;
    console.log(orders.value)
}
//---------------------------------------------------
const deleteOrder = (id) => {
    axios.delete(`/api/orders/${id}`).then(() => {
        notify({
            title: "Order Item Deleted",
            type: "success",
        });
        getOrdersById();
    });
};
//---------------------------------------------------
const openModalDelete = (id) => {
    deleteVisibleId.value = id;
};
const closeModalDelete = () => {
    deleteVisibleId.value = null;
};
//-----------------------------------------
const openModalView = (id) => {
    VisibleId.value = id;
};
const closeModalView = () => {
    VisibleId.value = null;
};
</script>
<template>
    <div class="container">
        <div class="left_content">
            <div class="profile_section">
                <div class="profile_img">
                    <div class="image">
                        <img src="../../../assets/menu-4.png" style="width: 100%; height: 100%">
                    </div>
                </div>
                <div class="profile_info">
                    <h4>{{ name }}</h4>
                    <p style="margin: 0px;">{{ email }}</p>
                    <p style=" margin-top: 10px;"> Role : {{ role }}</p>
                </div>
                <button @click="handleLogout">
                    Logout
                </button>
            </div>
        </div>
        <div class="right_content">

            <div class="table-box">
                <div>
                    <h1 class="title">Order Items</h1>
                </div>

                <table id="customers">
                    <tr>
                        <th></th>
                        <th>Total Amount</th>
                        <th>Order Status</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tbody v-for="(item, index) in orders" :key="item.id">
                        <Modal :show="deleteVisibleId === item.id" @close="closeModalDelete">
                            <div id="myModal" style="text-align: center;">
                                <h4 class="delete-title">Are you sure?</h4>
                                <div class="modal-body">
                                    <p style="font-size: 14px; color: var(--text-color-small-font);">Do you really want to delete these
                                        records? This process
                                        cannot be undone.</p>
                                </div>
                                <div class="modal_footer" style="padding: 20px;">
                                    <button @close="closeModalDelete" type="button" class="secondary">Cancel</button>
                                    <button @click="deleteOrder(item.id)" type="button"
                                        style="background: #f15e5e;">Delete</button>
                                </div>
                            </div>
                        </Modal>
                        <tr>
                            <td style="color: blue"># {{ item.id }}</td>
                            <td>{{ item.total_amount }}</td>
                            <td>{{ item.status }}</td>
                            <td>{{ item.payment_status }}</td>
                            <td>{{ formatDate(item.created_at) }}</td>
                            <td>
                                <p v-if="item.status === 'pending'" @click="openModalDelete(item.id)"
                                    style="color: rgb(191 42 42);cursor: pointer;">
                                    Cancel</p>
                                <p v-else> Delivered</p>
                            </td>
                            <td>
                                <button @click="openModalView(item.id)" class="view"> View</button>
                            </td>
                        </tr>
                        <ModalView :show="VisibleId === item.id" @close="closeModalView">
                            <div>
                                <h1 style="text-align: left; font-size: 22px; margin-top: 10px;">Order Details</h1>
                            </div>
                            <div class="container"
                                style="padding: 5px; background: transparent; display: flex; gap: 10px;">


                                <table id="customers" style="flex-basis: 80%;">
                                    <tr>
                                        <th style="font-size: 18px;padding: 15px 0px"></th>
                                        <th style="font-size: 18px; padding: 15px 0px">Image</th>
                                        <th style="font-size: 18px; padding: 15px 0px">Name</th>
                                        <th style="font-size: 18px; padding: 15px 0px">Quantity</th>
                                        <th style="font-size: 18px; padding: 15px 0px">Price</th>
                                    </tr>
                                    <tbody v-for="cartItem in item.cart_item" :key="cartItem.id">

                                        <tr>
                                            <td style="color: blue; padding: 5px"># {{ cartItem.id }}</td>
                                            <td style="width: 90px; height: 70px;padding: 5px">
                                                <img :src="cartItem.menu.image"
                                                    style="width: 100%; height: 100%" />
                                            </td>
                                            
                                            <td style="padding: 5px">{{ cartItem.menu.name }}</td>
                                            <td style="padding: 5px">{{ cartItem.quantity }}</td>
                                            <td style="padding: 5px"> {{ cartItem.menu.price }}</td>

                                        </tr>
                                    </tbody>
                                </table>

                                <div class="info" style="flex-basis: 20%;">
                                    <h1>Shipping Address</h1>

                                    <p> <span style="font-weight: 600;">Name </span> : {{ item.name }}</p>
                                    <p> <span style="font-weight: 600;">Email </span> : {{ item.email }}</p>
                                    <p> <span style="font-weight: 600;">Address </span> : {{ item.delivery_address }}
                                    </p>
                                    <p> <span style="font-weight: 600;">Phone </span> : {{ item.phone }} </p>
                                </div>

                            </div>
                        </ModalView>

                    </tbody>
                </table>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
#myModal {

    .modal_footer {
        button {

            cursor: pointer;
            background: #c1c1c1;
            color: var(--text-color-white);
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
    padding: 50px;
    text-align: center;
    background: #d7d1d130;
    display: flex;
    justify-content: space-between;
    gap: 40px;

    @media (max-width: 1137px) {
        display: block;
    }
    @media (max-width: 652px) {
        padding: 20px;
    }

    .left_content {
        flex-basis: 25%;
        height: 100%;
        background: var(--text-color-white);
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
        border-radius: 5px;

        .profile_section {
            position: relative;

            .profile_img {
                background: rgba(215, 209, 209, 0.1882352941);
                height: 175px;

                .image {
                    border-radius: 50%;
                    overflow: hidden;
                    position: absolute;
                    bottom: 170px;
                    right: 20%;
                    text-align: center;
                    width: 170px;
                    height: 170px
                }
            }

            .profile_info {
                margin-top: 28px;
                margin-bottom: 13px;

                h4 {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }

                p {
                    color: #363636;
                    font-size: 16px;
                }
            }

            button {
                width: 70%;
                font-size: 15px;
                padding: 8px;
                border-radius: 5px;
                background: var(--primary-color);
                border: 1px solid var(--primary-color);
                cursor: pointer;
                margin-bottom: 30px;
                color: var(--text-color-white);
                transition: all .3s;

                &:hover {
                    background: var(--primary-color-hover);
                }
            }
        }
    }

    .right_content {
        flex-basis: 75%;

        .info {
            background: var(--text-color-white);
            padding: 10px 10px;
            text-align: left;
            box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
            border-radius: 5px;

            h1 {
                margin: 0px;
                font-size: 18px;
            }

            p {
                font-size: 14px;
                font-weight: 500;
                text-transform: capitalize;
            }
        }
    }
}

.table-box {
    @media (max-width: 1137px) {
       padding-top: 40px;
    }
    .title {
        text-align: left;
        margin: 0px;
        margin-bottom: 18px;
        font-size: 24px;
    }

}

table {
    border-collapse: collapse;
    width: 100%;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    overflow: hidden;
}

th {
    background: var(--text-color-white);
    padding: 20px 10px !important;
    border: 1px solid transparent;
    font-size: 16px;
    color: #363636;
}

td {
    p {
        font-size: 14px;
        font-weight: 600;
        color: #919191;
        border-radius: 5px;
        padding: 3px 5px;
        background: rgba(215, 209, 209, 0.1882352941);
    }
}

th,
td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: var(--text-color-white);

}

td {
    color: #656262;

    input {
        width: 40%;
        padding: 15px 10px;
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.05);

        &:focus-visible {
            outline: none;
            border: 1px solid rgba(0, 0, 0, 0.05) !important;
        }
    }

    button {
        border-radius: 5px;
        font-size: 16px;
        padding: 5px 10px;
        border: none;
        font-weight: 600;
        color: rgb(61, 66, 66);
        cursor: pointer;

        &:hover {
            color: rgb(14 159 159);
        }
    }
}
</style>