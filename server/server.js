const express = require("express");
const app = express();

const naverShoppingRouter = require("./routes/naverShopping");

app.use("/shop", naverShoppingRouter);

module.exports = app;
