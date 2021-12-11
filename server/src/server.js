const express = require("express");
const app = express();

const naverRouter = require("./routes/NaverShoppingRouter");

app.use("/naver", naverRouter);

const port = process.env.PORT || "8080";
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
