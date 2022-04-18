/** @format */

import express from "express";
import { createProduct, createProductReview, deleteProduct, getProduct, getProducts, getTopProducts, updateProduct } from "../controllers/products.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/top", getTopProducts);
router.route("/").post(protect , admin , createProduct)
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/:id", getProduct);
router.route("/:id").delete(protect,admin,deleteProduct).put(protect,admin, updateProduct)
export default router;
