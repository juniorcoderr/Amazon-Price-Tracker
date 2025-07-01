import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeAmazonProduct(productId: string) {
  const SCRAPER_API_KEY = process.env.SCRAPER_API_KEY!;
  const url = `https://www.amazon.in/dp/${productId}`;

  const { data: html } = await axios.get("http://api.scraperapi.com", {
    params: {
      api_key: SCRAPER_API_KEY,
      url,
    },
  });

  const $ = cheerio.load(html);

  const title = $("#productTitle").text().trim();
  const img = $("#imgTagWrapperId img").attr("src") ?? "";

  const priceText =
    $(".a-price .a-offscreen").first().text().trim() ||
    $("#priceblock_dealprice").text().trim() ||
    $("#priceblock_ourprice").text().trim();

  const cleanedPriceText = priceText.replace(/[₹,]/g, "").trim();
  const price = parseInt(cleanedPriceText, 10) || 0;

  const reviewsCountText = $("#acrCustomerReviewText")
    .text()
    .replace(/[^\d]/g, "");
  const reviewsCount = parseInt(reviewsCountText || "0", 10);

  const ratingText = $("span.a-icon-alt").first().text();
  const reviewsAverageRating = parseFloat(ratingText.split(" ")[0]) || 0;

  return {
    amazonId: productId,
    title,
    img,
    price,
    reviewsCount,
    reviewsAverageRating,
  };
}
