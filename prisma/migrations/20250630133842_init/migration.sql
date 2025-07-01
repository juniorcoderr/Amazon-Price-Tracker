-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "amazonId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "reviewsCount" INTEGER NOT NULL,
    "reviewsAverageRating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_amazonId_key" ON "Product"("amazonId");
