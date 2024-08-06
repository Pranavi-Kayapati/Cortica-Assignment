const express = require("express");
const cartRouter = express.Router();
const CartItem = require("../models/CartItem");
const MenuItem = require("../models/MenuItem");

// POST add item to cart
cartRouter.post("/add", async (req, res) => {
  try {
    const { menuItemId, quantity } = req.body;
    const menuItem = await MenuItem.findById(menuItemId);

    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found" });

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

module.exports = cartRouter;
