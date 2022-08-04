const express = require("express");
const router = express.Router();
const ProductsService = require("../services/products");
const { successResponse, errorResponse, streamUpload } = require("../utils");
const multer = require("multer");
const fileUpload = multer();
const dotenv = require("dotenv");

dotenv.config();

const productsService = new ProductsService();

router.post("/", fileUpload.single("image"), async (req, res) => {

  //create image on cloudinary
  result = await streamUpload(req);

  //create product
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    imageUrl: result.url
  }

  try {
    let productCreated = await productsService.createProduct(product);
    successResponse(req, res, productCreated);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

router.get("/", async (req, res) => {
  try {
    const productId = req.query.id;
    if (productId) {
      const productCreated = await productsService.getProductsById(productId);
      successResponse(req, res, productCreated);
    } else {
      const productsCreated = await productsService.getProducts();
      successResponse(req, res, productsCreated);
    }
  } catch (error) {
    errorResponse(req, res, error);
  }
});

module.exports = router;
