const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String },
  phone: { type: Number, require: true },
});

module.exports = new mongoose.model("contact", contactSchema);
