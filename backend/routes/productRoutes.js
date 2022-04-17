/** @format */

import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/products.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/", getProducts);
router.route("/").post(protect , admin , createProduct)
router.get("/:id", getProduct);
router.route("/:id").delete(protect,admin,deleteProduct).put(protect,admin, updateProduct)
export default router;
