const mongoose = require("mongoose");
require("dotenv").config();

module.exports = connect = async () => {
  await mongoose.connect(process.env.MONGO_DB);
};
