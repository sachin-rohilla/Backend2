require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const productRoutes = require("./routes/product");

// db connectionmain().catch((err) => console.log(err));
main().catch((err) => console.log(err));
async function main() {
  try {
    const connectionResponse = await mongoose.connect(
      process.env.MONGODB_URL,
      {
        dbName: "E-CommerceTest",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 30000,
      } // Increase timeout to 30 seconds
    );
    console.log(
      "MongoDb connect Successfull",
      connectionResponse.connection.host
    );
  } catch (error) {
    console.log("MongoDb connection Failed", error);
  }
}

// middleware
app.use(express.json());
app.use("/products", productRoutes.router);
app.use(cors());
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// default routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
