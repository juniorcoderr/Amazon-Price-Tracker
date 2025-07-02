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

  // --- Multiple selectors to handle different categories ---
  const priceSelectors = [
    "#priceblock_dealprice", // Deals
    "#priceblock_ourprice", // Regular price
    "#priceblock_saleprice", // Sale price
    "#corePrice_feature_div .a-offscreen", // New UI core price
    "#snsPrice .a-offscreen", // Subscribe & Save
    "#actualPriceValue .a-offscreen", // Alternate price block
    ".apexPriceToPay .a-offscreen", // Used in some mobiles
    ".a-price .a-offscreen", // General fallback
    ".a-price .a-offscreen span", // Extra fallback
    "span.priceToPay .a-offscreen", // Shoes, variants
    ".a-section .a-spacing-small .a-color-price", // Deals or offers
    "#usedPrice .a-color-price", // Used products
    "#newBuyBoxPrice", // New buy box
    "#tp_price_block_total_price_ww", // Total price block (e.g. electronics)
  ];

  let priceText = "";
  for (const selector of priceSelectors) {
    const found = $(selector).first().text().trim();
    if (found) {
      priceText = found;
      break;
    }
  }

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
