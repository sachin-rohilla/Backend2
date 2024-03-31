const express = require("express");
const mongoose = require("mongoose");
const Product = require("../model/product");

const app = express();
app.use(express.json());
const data = require("../data.json");

exports.getAllProducts = (req, res) => {
  // res.json(data.products);
  Product.find()
    .then((products) => res.json(products))
    .catch((error) => res.status(500).json({ error: error.message }));
};

exports.getProductsWithId = (req, res) => {
  const id = req.params.id;
  // const products = data.products.find((product) => product.id === id);
  // res.json(products);
  Product.findById(id)
    .then((products) => res.json(products))
    .catch((error) => res.status(500).json({ error: error.message }));
};

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  // const products = data.products.filter((product) => product.id !== id);
  // res.json(products);
  Product.findByIdAndDelete(id)
    .then((product) => {
      res.json(product);
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

exports.patchProduct = (req, res) => {
  const id = req.params.id;
  // const productIndex = data.products.findIndex((product) => product.id === id);
  // data.products.splice(productIndex, 1, { id: id, ...req.body });
  Product.findOneAndReplace({ _id: id }, req.body, { new: true })
    .then((product) => {
      res.json(product);
    })
    .catch((error) => res.status(500).json({ error: error.message }));
  // res.json(req.body);
};

exports.updateProduct = (req, res) => {
  (req, res) => {
    const id = req.params.id;
    // const productIndex = data.products.findIndex(
    //   (product) => product.id === id
    // );
    // data.products.splice(productIndex, 1, {
    //   ...data.products[productIndex],
    //   ...req.body,
    // });

    Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    // res.json(req.body);
  };
};
