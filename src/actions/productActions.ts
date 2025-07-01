"use server";

import { prisma } from "@/lib/prisma";
import { scrapeAmazonProduct } from "@/lib/scraper";

export async function addProduct(productId: string, userEmail: string) {
  const data = await scrapeAmazonProduct(productId);

  if (!data.title) throw new Error("Failed to scrape product");

  const product = await prisma.product.upsert({
    where: { amazonId: productId },
    update: {
      title: data.title,
      img: data.img,
      price: data.price,
      reviewsCount: data.reviewsCount,
      reviewsAverageRating: Math.round(data.reviewsAverageRating),
    },
    create: {
      amazonId: productId,
      userEmail: userEmail,
      title: data.title,
      img: data.img,
      price: data.price,
      reviewsCount: data.reviewsCount,
      reviewsAverageRating: Math.round(data.reviewsAverageRating),
    },
  });

  return product;
}
