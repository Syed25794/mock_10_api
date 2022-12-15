const mongoose = require("mongoose");

require("dotenv").config();

const {MONGO_URL} = process.env;

mongoose.set("strictQuery", false);

const connection = mongoose.connect(MONGO_URL);

module.exports = connection ;