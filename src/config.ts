export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: "price_1P60edDxpZEgjpv3UgDbI4qv",
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: "price_1P60fmDxpZEgjpv3Y4ZkKeun",
        quota: {
          TASKS: 100,
        },
      },
    },
  },
};
