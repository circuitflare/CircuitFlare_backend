const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  billingInfo: [],
  usedBillingInfo:{},
  deliveryInfo: {},
  cartItems: [],
  userId: {
    type: String,
    ref: "User",
    required: true,
  },

  paidAt: {
    type: Date,
    required: true,
  },

  totalBasketAmount: {
    type: Number,
    required: true,
  },
  totalTransactionAmount: {
    type: Number,
    required: true,
  },
  totalDiscountAmount: {
    type: Number,
    required: true,
  },
  totalBasketItems: {
    type: Number,
    required: true,
  },

  paymentStatus: {
    type: String,
    required: true,
    default: "Order Placed",
  },

  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  orderNumber: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    default: "-",
  },
  remarks:[],
  razorpay_payment_id: String,

  deliveredAt: Date,

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Order", orderSchema);
