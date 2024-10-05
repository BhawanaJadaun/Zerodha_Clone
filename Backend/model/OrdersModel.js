const mongoose = require("mongoose");
const { OrdersSchema } = require('../schema/OrdersSchema');

// Define the model using mongoose.model
const OrdersModel = mongoose.model("Order", OrdersSchema);

module.exports = { OrdersModel };
