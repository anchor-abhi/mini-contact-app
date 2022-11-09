const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "contact",
  },
  text: { type: String, require: true },
  otp: { type: Number, require: true },
  sentAt: { type: Date, default: Date.now(), require: true },
});

module.exports = new mongoose.model("message", messageSchema);
