import { Router } from "express";
import { createBlog, deleteBlog, getAllBlog, updateBlog } from "../controllers/blog.controller.js";

const router = Router();

router.post("/blog", createBlog)
router.put("/blog/:heading", updateBlog)
router.delete("/blog/:heading", deleteBlog)
router.get("/blogs", getAllBlog)

export default router;