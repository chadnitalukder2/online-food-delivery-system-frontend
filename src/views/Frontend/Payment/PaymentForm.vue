<template>
    <form @submit.prevent="handleSubmit">
        <div id="card-element"></div>
        <button type="submit" :disabled="processing">
            {{ processing ? 'Processing...' : 'Pay' }}
        </button>
    </form>
</template>

<script>
 import { loadStripe } from '@stripe/stripe-js';

export default {
    data() {
        return {
            stripe: null,
            cardElement: null,
            processing: false,
        };
    },
    async mounted() {
        this.stripe = await loadStripe('your_stripe_public_key');
        const elements = this.stripe.elements();
        this.cardElement = elements.create('card');
        this.cardElement.mount('#card-element');
    },
    methods: {
        async handleSubmit() {
            this.processing = true;

            // Fetch client secret from the backend
            const response = await fetch('/api/create-payment-intent', {
                method: 'POST',
            });
            const { clientSecret } = await response.json();

            // Confirm payment
            const { error } = await this.stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: this.cardElement,
                },
            });

            if (error) {
                console.error(error.message);
                this.processing = false;
                return;
            }

            alert('Payment successful!');
            this.processing = false;
        },
    },
};
</script>

<style>
#card-element {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
}
</style>