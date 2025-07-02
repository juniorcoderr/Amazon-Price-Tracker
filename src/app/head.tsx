export default function Head() {
  return (
    <>
      <title>Amazon Price Tracker</title>
      <meta name="description" content="Track Amazon product prices and get notified when they drop." />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Amazon Price Tracker" />
      <meta property="og:description" content="Track Amazon product prices and get notified when they drop." />
      <meta property="og:url" content="https://amazon-price-tracker-two.vercel.app" />
      <meta property="og:image" content="https://amazon-price-tracker-two.vercel.app/og-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Amazon Price Tracker" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Amazon Price Tracker" />
      <meta name="twitter:description" content="Track Amazon product prices and get notified when they drop." />
      <meta name="twitter:image" content="https://amazon-price-tracker-two.vercel.app/og-image.png" />
    </>
  );
}
