require("dotenv").config();
const { connection } = require("./db");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const menuRoutes = require("./routes/menuRouter");
const cartRoutes = require("./routes/cartRouter");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/api/menu", menuRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the Database");
    console.log(`Server running at ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
