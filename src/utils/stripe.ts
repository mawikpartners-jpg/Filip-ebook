// Stripe Payment Link - direct redirect, no backend needed
export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/6oU5kD6tv1g7gNTfI1co000';

export const handleCheckout = () => {
  window.location.href = STRIPE_PAYMENT_LINK;
};