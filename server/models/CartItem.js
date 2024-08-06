const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
    required: true,
  },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("CartItem", cartItemSchema);
