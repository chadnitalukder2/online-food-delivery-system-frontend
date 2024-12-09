<template>
    <div class="payment-form">
        <h2>Make a Payment</h2>
        <form @submit.prevent="submitPayment">
            <label for="amount">Amount (USD):</label>
            <input type="number" v-model="amount" placeholder="Enter amount" required />
            <div id="card-element"></div>
            <button type="submit">Pay</button>
        </form>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
export default {

    data() {
        return {
            stripe: null,
            card: null,
            amount: '',
            message: '',
        };
    },
    async mounted() {
        this.stripe = await loadStripe('pk_test_51PE5utRxZcQKYHRCdpA2kGx5R9DAG7N76AhTfc9wr1j4kqynkh9YqmS6ihDkOK2cFPfDdy2Dyb0LeW3CoD2oyDa300jAtsVhvx');
        const elements = this.stripe.elements();
        this.card = elements.create('card');
        this.card.mount('#card-element');
    },
    methods: {
        async submitPayment() {
            if (!this.amount || this.amount <= 0) {
                this.message = 'Please enter a valid amount.';
                return;
            }

            // Create token without address details
            const { token, error } = await this.stripe.createToken(this.card);

            if (error) {
                this.message = error.message;
                return;
            }

            // Send token and amount to the backend
            // const response = await fetch('/api/payment', {
                const response = await axios.post("/api/payment" , {
                    amount: this.amount, token: token.id
                })
            console.log(response, 'response')
            const data = await response.json();
            this.message = data.message;
        },
    },

};
</script>

<style scoped>
.payment-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>