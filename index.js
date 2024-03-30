require("dotenv").config();
const express = require("express");

const app = express();
const productRoutes = require("./routes/product");

// middleware
app.use(express.json());
app.use("/products", productRoutes.router);

// default routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
