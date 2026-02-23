-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "prdname" TEXT NOT NULL,
    "prdcategory" TEXT NOT NULL,
    "prdprice" INTEGER NOT NULL,
    "prddesc" TEXT NOT NULL,
    "prdimage" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
