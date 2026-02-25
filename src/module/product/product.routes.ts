import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getProductById,
} from "./product.controller.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProductById);

export default router;
