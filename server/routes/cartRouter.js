const express = require("express");
const cartRouter = express.Router();
const CartItem = require("../models/CartItem");
const MenuItem = require("../models/MenuItem");

// POST add item to cart
cartRouter.post("/add", async (req, res) => {
  try {
    const { menuItemId, quantity = 1 } = req.body;
    const menuItem = await MenuItem.findOne({ _id: menuItemId });

    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found" });

    // Check if the item is already in the cart
    const existingCartItem = await CartItem.findOne({
      "menuItemId._id": menuItemId,
    });
    if (existingCartItem) {
      return res.status(400).json({ message: "Item already in the cart" });
    }

    const cartItem = new CartItem({ menuItemId, quantity });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all cart items
cartRouter.get("/", async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate("menuItemId");
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update the quantity of a cart item
cartRouter.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const updatedItem = await CartItem.findByIdAndUpdate(
      { _id: id },
      { quantity },
      { new: true }
    ).populate("menuItemId");
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: "Failed to update item quantity" });
  }
});

cartRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await CartItem.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted", item: result });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete item from cart" });
  }
});

module.exports = cartRouter;
