const express = require("express");
const { getAllBlog, createBlogp, updateBlog, deleteBlog } = require("../controllers/blogController");

const router = express.Router()


router.get("/getAllBlog",getAllBlog);
router.post("/createBlog",createBlogp)
router.put("/update/:id",updateBlog)
router.delete("/delete/:id",deleteBlog)




module.exports =router