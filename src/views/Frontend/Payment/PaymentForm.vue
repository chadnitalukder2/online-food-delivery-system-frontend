<script setup>
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();



const name = ref("");
const amount = ref();
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
    try {
        const { token, error } = await stripe.createToken(card);

        if (error) {
            message.value = error.message;
            return;
        }

        const response = await axios.post("api/payment", {
            amount: amount.value,
            token: token.id,
        });
        
        amount.value = '';
        token.id = '';
        notify({ type: "success", text: response.data.message });
    } catch (err) {
        message.value = "An error occurred during the payment process.";
        console.error(err);
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
                                <input v-model="amount" type="number" class="form-control" placeholder="Amount">
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
    background: #fff;
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
    background: #007bff;
    color: #fff;
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
    background: #007bff;
    color: #fff;
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