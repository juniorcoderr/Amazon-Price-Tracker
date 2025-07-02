# 🛒 Fullstack Amazon Price Tracker

A complete full-stack Amazon Price Tracker application built using modern technologies like **Next.js 15.2 (App Router)**, **Tailwind CSS**, **Prisma (PostgreSQL)**, and **Scraperapi**. This app allows users to track prices of Amazon products, receive notifications when prices drop, and view rich data visualizations of product trends — all in a sleek, responsive UI.

---

## 🔍 Project Overview

This project is designed to help users monitor Amazon product prices over time and get notified when a product drops below its average price. It is built with scalability, modularity, and performance in mind, using server components and the new Next.js App Router architecture.

---

## 🧰 Tech Stack

| Category           | Technology                                         |
| ------------------ | -------------------------------------------------- |
| **Frontend**       | Next.js 15.2 (App Router), Tailwind CSS, shadcn/ui |
| **Backend**        | Node.js, Prisma ORM                                |
| **Database**       | PostgreSQL                                         |
| **Authentication** | NextAuth.js with Google OAuth                      |
| **Web Scraping**   | Scraper API                                        |
| **Charts**         | Recharts                                           |
| **Cron Jobs**      | Node Cron (for daily scraping)                     |
| **Deployment**     | Vercel                                             |

---

## ✨ Key Features

### ✅ Authentication & User Management

* Login via Google using **NextAuth.js**
* Secure session handling
* Products are user-specific and private

### 📦 Product Management

* Add Amazon products manually using product IDs
* Automatically scrape and store product data (title, image, rating, reviews, price)

### 📈 Dashboard with Visual Insights

* Display average price, reviews, and ranking across all tracked products
* View **line charts** showing price history
* Responsive, clean UI built with **Tailwind CSS** and **shadcn/ui components**

### 🔔 Price Drop Notifications

* Automatically notify users via dashboard when a price drops
* Notifications include current price, previous price, and product info

### ⚙️ Automated Price Scraping

* Scheduled **cron jobs** to fetch latest product data daily (e.g., 8 AM)
* Efficient scraping powered by **Scraper API**

---

## 🗂️ Project Structure (Simplified)

```
📦 app/
 ┣ 📂 dashboard/         → Main user dashboard with charts
 ┣ 📂 auth/              → Login and session handling
 ┗ 📂 api/               → Route handlers for scraping and DB actions

📦 components/           → Reusable UI components (Cards, Charts, Sidebar)
📦 lib/                  → Custom scraping logic and utilities
📦 prisma/               → Prisma schema and DB config
📦 actions/              → Server actions (e.g., add product, send notification)
```

---

## 🔐 Environment Variables

To run this project locally, you need a `.env.local` file with:

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DATABASE_URL=postgresql://...
SCRAPER_API_KEY=
NEXTAUTH_SECRET=
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push DB schema
npx prisma db push

# Start development server
npm run dev
```

---

## 🧪 Future Enhancements

* ✅ Add user dashboard with filters & sorting
* 📦 Browser extension for 1-click product tracking
* 📉 Predictive analytics (price trends)
* 📱 Mobile-first UI enhancements
* 🔄 Webhooks for real-time updates

---

## 🤝 Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
