import { prisma } from "@/lib/prisma";
import { scrapeAmazonProduct } from "@/lib/scraper";
import { endOfDay, isToday, startOfDay, subDays } from "date-fns";

export async function GET() {
  const products = await prisma.product.findMany();
  for (const product of products) {
    const latestHistoryDbData = await prisma.productDataHistory.findFirst({
      where: {
        amazonId: product.amazonId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (latestHistoryDbData && isToday(latestHistoryDbData.createdAt)) {
      continue;
    }
    // put new data into history
    const newProductData = await scrapeAmazonProduct(product.amazonId);

    await prisma.productDataHistory.create({
      data: newProductData,
    });

    const prevDayData = await prisma.productDataHistory.findFirst({
      where: {
        amazonId: product.amazonId,
        createdAt: {
          gt: startOfDay(subDays(new Date(), 1)),
          lt: endOfDay(subDays(new Date(), 1)),
        },
      },
    });
    if (prevDayData && prevDayData.price > newProductData.price) {
      await prisma.notification.create({
        data: {
          userEmail: product.userEmail,
          amazonId: product.amazonId,
          title: `The price of ${product.title} has decreased from ₹${prevDayData.price} to ₹${newProductData.price}`,
        },
      });
    }
  }
  return Response.json("ok");
}
