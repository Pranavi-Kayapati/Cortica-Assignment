const express = require("express");
const menuRouter = express.Router();
const MenuItem = require("../models/MenuItem");

// GET all menu items
menuRouter.get("/items", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST add a new menu item
menuRouter.post("/add", async (req, res) => {
  try {
    const { name, description, image, price } = req.body;
    if (!name || !description || !image || price === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new MenuItem({ name, description, image, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = menuRouter;
