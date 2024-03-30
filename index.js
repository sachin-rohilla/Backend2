require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

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

// default routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
