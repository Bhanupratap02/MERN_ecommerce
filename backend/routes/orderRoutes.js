/** @format */

import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderTOPaid,
} from "../controllers/orders.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderTOPaid);

export default router;
