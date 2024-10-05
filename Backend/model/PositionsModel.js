const mongoose = require("mongoose"); // Import mongoose
const { PositionsSchema } = require('../schema/PositionsSchema'); // Import the schema

// Create the model using mongoose.model()
const PositionsModel = mongoose.model("Positions", PositionsSchema); // "Positions" is the model name

// Export the model
module.exports = { PositionsModel };
