const express = require("express");
const router = express.Router();
const ProductsService = require("../services/products");
const { successResponse, errorResponse } = require("../utils");
const multer = require("multer");
const fileUpload = multer();
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const dotenv = require("dotenv");

dotenv.config();

const productsService = new ProductsService();

router.post("/", async (req, res) => {
  try {
    const product = req.body;
    let productCreated = await productsService.createProduct(product);
    const response = productCreated;
    successResponse(req, res, response);
  } catch (error) {
    errorResponse(req, res, error);
  }
});

//upload image

router.post(
  "/upload/",
  fileUpload.single("product"),
  function (req, res, next) {
    let streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    async function upload(req) {
      let result = await streamUpload(req);
      console.log(result);
      const product = await productsService.getProductsById(req.body.productId);
      product.imageUrl = result.url;
      try {
        await product.save();
        return res.status(200).json(product);
      } catch (err) {
        return res.status(500).json(err);
      }
    }

    upload(req);
  }
);
router.get("/", async (req, res) => {
  try {
    const product = req.query.id;
    if (id) {
      const productCreated = await productsService.getProductsById(id);
      successResponse(req, res, response);
    } else {
      const productCreated = await productsService.getProducts();
      successResponse(req, res, productCreated);
    }
  } catch (error) {
    errorResponse(req, res, error);
  }
});

module.exports = router;
