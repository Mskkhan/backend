
const express=require('express');
const {  requireSignIn,adminMiddleware,
  superAdminMiddleware } = require('../commonMiddleware');
const {addCategory, getCategory, updateCategories,deleteCategories}=require('../controller/category')

const router=express.Router();

// product part
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


router.post('/category/create',requireSignIn,adminMiddleware,upload.single("categoryImage"),addCategory);
router.get('/category/getcategory',getCategory);

router.post(
  '/category/update',
 
  
  upload.array("categoryImage"),
  updateCategories
);

router.post(
  "/category/delete",
  
 
  deleteCategories
);

module.exports = router;





