const express = require('express');

const {  } = require('../controller/category');
const {
  requireSignIn,
  adminMiddleware,
  uploadS3,
} = require("../commonmiddleware");
const {
  createProduct,
  getProductsBySlug,
  getProductDetailsById,
  deleteProductById,
  getProducts,
} = require("../controller/products");
const multer = require("multer");
const router = express.Router();

const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  '/product/create',
  requireSignIn,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct

);

router.get("/products/:slug", getProductsBySlug);

 router.get("/product/:productId", getProductDetailsById);
router.delete(
  "/product/deleteProductById",
  requireSignIn,
  adminMiddleware,
  deleteProductById
);
router.post(
  "/product/getProducts",
  requireSignIn,
  adminMiddleware,
  getProducts
);

module.exports = router;