import { Router } from "express";
import { createProduct, getAllProduct } from "./product.controller.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProduct);

export default router;
