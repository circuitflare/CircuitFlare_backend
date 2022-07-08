const express = require("express");
const router = express.Router();

//controllers
const {createOrder, getUserOrders, addFeedbackForOrderNumber} = require("../controllers/orderControllers")

  //middlewares
const { authenticatedUser } = require("../middleware/authenticatedUser");
const {authorizedRole} = require("../middleware/authorizedRole");

  router.post("/create/order", createOrder);

  router.get("/get/user/orders", getUserOrders);

  router.put("/add/feedback/:orderNumber",addFeedbackForOrderNumber)

module.exports = router