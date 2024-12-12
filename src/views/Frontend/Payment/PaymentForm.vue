<script setup>
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useRoute } from 'vue-router';
const route = useRoute();
const orderData = JSON.parse(route.query.date); // Parse the data if serialized
console.log(orderData.total_amount, 'total');



const name = ref("");
const amount = ref(orderData.total_amount);
const message = ref("");
let stripe = null;
let card = null;

onMounted(async () => {
    stripe = await loadStripe("pk_test_51PE5utRxZcQKYHRCdpA2kGx5R9DAG7N76AhTfc9wr1j4kqynkh9YqmS6ihDkOK2cFPfDdy2Dyb0LeW3CoD2oyDa300jAtsVhvx");
    const elements = stripe.elements();
    card = elements.create("card");
    card.mount("#card-element");
});

const submitPayment = async () => {
    if (!amount.value || !card) {
        notify({ type: "error", text: "Payment amount or card information is missing." });
        return;
    }

    try {
        const { token, error } = await stripe.createToken(card);

        if (error) {
            notify({ type: "error", text: error.message });
            return;
        }

        const paymentResponse = await axios.post("api/payment", {
            amount: amount.value,
            token: token.id,
        });

        if (paymentResponse.status === 200) {
            const orderResponse = await axios.post("/api/orders", orderData);

            if (orderResponse.status === 201) {
                notify({ type: "success", title: "Order Placed Successfully" });
            }
        }
        router.push('profile-page')
        amount.value = '';
        token.id = '';

        notify({ type: "success", text: paymentResponse.data.message });
    } catch (err) {
        console.error("Payment Error:", err);

        if (err.response) {
            notify({
                type: "error",
                title: "Payment Failed",
                text: err.response.data.message || "An error occurred while processing the payment.",
            });
        } else {
            notify({ type: "error", text: "A network or server error occurred." });
        }
    }
};
</script>



<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">Payment Details</h3>
                    </div>
                    <div class="panel-body">

                        <form @submit.prevent="submitPayment">
                            <div class="form-group">
                                <label>Name on Card</label>
                                <input v-model="name" type="text" class="form-control" placeholder="Cardholder Name">
                            </div>
                            <div class="form-group">
                                <label>Amount</label>
                                <input v-model="amount" type="number" class="form-control" placeholder="Amount" readonly>
                            </div>
                            <div id="card-element" class="form-group"></div>

                            <button type="submit" class="btn">Pay Now</button>
                            <div v-if="message" class="alert alert-warning">
                                <p>{{ message }}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: var(--text-color-white);
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
}

.panel {
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
}

.panel-heading {
    background: var(--primary-color);
    color: var(--text-color-white);
    padding: 15px;
    text-align: center;
}

.panel-title {
    margin: 0;
    font-size: 18px;
}

.panel-body {
    padding: 20px;
}





.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-control {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-row {
    display: flex;
    gap: 15px;
}

.form-group {
    flex: 1;
}

.btn {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background: var(--primary-color);
    color: var(--text-color-white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn:hover {
    background: #0056b3;
}

.alert-warning {
    color: rgb(197, 5, 5);
    font-size: 12px;
}
</style>