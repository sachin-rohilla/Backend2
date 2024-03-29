const express = require("express");

const app = express();
app.use(express.json());
const data = require("../data.json");

exports.getAllProducts = (req, res) => {
  res.json(data.products);
};

exports.getProductsWithId = (req, res) => {
  const id = +req.params.id;
  // res.json(data.products[id - 1]);
  // OR
  const products = data.products.find((product) => product.id === id);
  res.json(products);
};

exports.createProduct = (req, res) => {
  data.products.push(req.body);
  res.json(req.body);
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const products = data.products.filter((product) => product.id !== id);
  res.json(products);
};

exports.patchProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((product) => product.id === id);
  data.products.splice(productIndex, 1, { id: id, ...req.body });
  res.json(req.body);
};

exports.updateProduct = (req, res) => {
  (req, res) => {
    const id = +req.params.id;
    const productIndex = data.products.findIndex(
      (product) => product.id === id
    );
    data.products.splice(productIndex, 1, {
      ...data.products[productIndex],
      ...req.body,
    });
    res.json(req.body);
  };
};
