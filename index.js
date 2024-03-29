const express = require("express");

const app = express();
const data = require("./data.json");
app.use(express.json());
const productController = require("./controllers/product");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", productController.getAllProducts);

app.get("/products/:id", productController.getProductsWithId);

app.post("/products", productController.createProduct);

app.delete("/products/:id", productController.deleteProduct);

app.put("/products/:id", productController.patchProduct);

app.patch("/products/:id", productController.updateProduct);

app.listen(3000, () => {
  console.log("server started");
});
