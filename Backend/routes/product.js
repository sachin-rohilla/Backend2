const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("", productController.getAllProducts);

router.get("/:id", productController.getProductsWithId);

router.post("", productController.createProduct);

router.delete("/:id", productController.deleteProduct);

router.put("/:id", productController.patchProduct);

router.patch("/:id", productController.updateProduct);

exports.router = router;
