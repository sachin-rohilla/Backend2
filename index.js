const express = require("express");

const app = express();
const productRoutes = require("./routes/product");
// middleware
app.use(express.json());
app.use("/", productRoutes.router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server started");
});
