// Stripe Payment Link - direct redirect, no backend needed
export const STRIPE_PAYMENT_LINK = import.meta.env.VITE_STRIPE_PAYMENT_LINK;

export const handleCheckout = () => {
  window.location.href = STRIPE_PAYMENT_LINK;
};