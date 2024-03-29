const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/products", productController.getAllProducts);

router.get("/products/:id", productController.getProductsWithId);

router.post("/products", productController.createProduct);

router.delete("/products/:id", productController.deleteProduct);

router.put("/products/:id", productController.patchProduct);

router.patch("/products/:id", productController.updateProduct);

exports.router = router;
