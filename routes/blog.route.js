const express = require("express");
const multer = require("multer");

const BlogController = require("../controllers/blog.controller");

// creates a new router instance
const router = express.Router();

//upload Image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single(
  "image"
);

// router

router.post("/blogs", BlogController.postNewBlog, uploadImg);
router.get("/blogs", BlogController.getAllBlog);
router.get("/blogs:id", BlogController.getBlogByID);
router.put("/blogs:id", BlogController.updateBlog);
router.delete("/blogs:id", BlogController.deleteBlog);

module.exports = router;
