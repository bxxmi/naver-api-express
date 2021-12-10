const express = require("express");
const app = express();

const naverShoppingRouter = require("./routes/naverShopping");

app.use("/naver", naverShoppingRouter);

module.exports = app;
