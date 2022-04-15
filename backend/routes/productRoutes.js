/** @format */

import express from "express";
import { deleteProduct, getProduct, getProducts } from "../controllers/products.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.route("/:id").delete(protect,admin,deleteProduct)
export default router;
