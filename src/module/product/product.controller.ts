import { Request, Response } from "express";
import prisma from "../../Utils/prisma.js";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { prdname, prdcategory, prdprice, prddesc, prdimage } = req.body;

    if (!prdname || !prdcategory || !prdprice || !prddesc) {
      return res.status(400).json({
        error: "All field (Name, Category, Price, Description) are required",
      });
    }

    const productset = await prisma.product.create({
      data: {
        prdname,
        prdcategory,
        prdprice,
        prddesc,
        prdimage,
      },
    });

    res.status(201).json(productset);
  } catch (error) {
    res.status(500).json({ error: "Failed to add Product" });
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const getAllProduct = await prisma.product.findMany();
    res.status(200).json(getAllProduct);
  } catch (error) {
    console.log("Error fetching data...", error);
    res.status(500).json(error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const getProductByID = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!getProductByID) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    res.status(200).json(getProductByID);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internel server error  " });
  }
};
