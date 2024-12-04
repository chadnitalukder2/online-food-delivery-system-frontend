<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";
const router = useRouter();
const form = ref({});
//------------------------------
const carts = ref([]);
//-----------------------------
onMounted(async () => {
    getCarts();
});
//------------------------------
const getCarts = async () => {
  let response = await axios.get("/api/carts");
  carts.value = response.data;
};
//----------------------------------------------
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
                  
                    <td>
                        <input @change="subTotal()" type="checkbox">
                    </td>
                    <td>{{ item.id }}</td>
                    <td style="width: 120px; height: 100px">
                        <img :src="item.menu.image" style="width: 100%; height: 100%">
                    </td>
                    <td>{{ item.menu.name }}</td>
                    <td>${{ item.menu.price }}</td>
                    <td>
                        <input type="number" @change="updateLineTotal()" v-model="item.quantity">

                    </td>
                    <td>${{ item.line_total }}</td>
                    <td @click="openModalDelete()">
                        <i class="fa-solid fa-trash-can delete-icon "></i>
                    </td>
                </tr>


            </table>
        </div>
        <!-- ============================= -->
        <div class="order-wrapper" style="display: flex;">
            <div class="cart">
                <div class="cart_total">
                    <h3>Cart Totals</h3>
                    <p class="d-flex">
                        <span>Subtotal</span>
                        <span>$44</span>
                    </p>
                    <p class="d-flex">
                        <span>Delivery</span>
                        <span>$50.00</span>
                    </p>
                    <p>
                        <span>Discount</span>
                        <span>$5.00</span>
                    </p>
                    <hr style="background: rgba(255, 255, 255, 0.1)" />
                    <p>
                        <span>TOTAL</span>
                        <span style="color: #484646; font-weight: 600">$444</span>
                    </p>
                </div>
            </div>
            <div class="order-form">
                <h2 class="title">Personal details</h2>
                <form @submit.prevent="addOrders">
                    <div class="input_box">
                        <label><b> Name : </b></label><br>
                        <input type="text" name="name" placeholder="name">
                    </div>

                    <div class="input_box">
                        <label><b>Email : </b></label><br>
                        <input type="email" name="message" placeholder="email">
                    </div>

                    <div class="input_box">
                        <label for="message"><b>Number : </b></label><br>
                        <input type="number" name="phone" placeholder="number">
                    </div>

                    <div class="input_box">
                        <label><b>Pick-up Address : </b></label><br>
                        <input type="text" name="message" placeholder="address">
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
}

.order-wrapper {
    gap: 20px;
    justify-content: space-between;

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
                border: 1px solid #9c4202;
            }
        }

        .check_out {
            border-radius: 8px;
            cursor: pointer;
            background: #9c4202;
            font-size: 16px;
            margin-top: 20px;
            padding: 14px;
            color: #fff;
            border: 1px solid #9c4202;
            transition: all 0.3s ease;

            &:hover {
                background: white;
                color: #9c4202;
                border: 1px solid #9c4202;
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
.delete-icon{
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