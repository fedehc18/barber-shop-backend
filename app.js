const express = require("express");
//ROUTES PLACEHOLDER
const usersRoute = require("./src/routes/users");
const productsRoute = require("./src/routes/products");
const barbersRoute = require("./src/routes/barbers");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//using strategies to login
//require('./src/utils/auth')

//using routes
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/barbers", barbersRoute);

module.exports = app;
