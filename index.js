const express = require("express");

const app = express();
const data = require("./data.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  res.json(data.products);
});

app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  // res.json(data.products[id - 1]);
  // OR
  const products = data.products.find((product) => product.id === id);
  res.json(products);
});

app.post("/products", (req, res) => {
  data.products.push(req.body);
  res.json(req.body);
});

app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const products = data.products.filter((product) => product.id !== id);
  res.json(products);
});

app.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((product) => product.id === id);
  data.products.splice(productIndex, 1, { id: id, ...req.body });
  res.json(req.body);
});
app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((product) => product.id === id);
  data.products.splice(productIndex, 1, {
    ...data.products[productIndex],
    ...req.body,
  });
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("server started");
});
