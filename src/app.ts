import cors from "cors";
import express from "express";
import productRoutes from "./module/product/product.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/product", productRoutes);

export default app;
