/** @format */

import express from "express";
import {
  authUser,
  deleteUsers,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/users.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUserById)
  .put(protect, admin , updateUser)
export default router;
