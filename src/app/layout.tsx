import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoginView from "./LoginView";
import { auth } from "@/auth";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amazon Price Tracker",
  description: "Track Amazon product prices and get notified when they drop.",
  metadataBase: new URL("https://amazon-price-tracker-two.vercel.app"),
  openGraph: {
    title: "Amazon Price Tracker",
    description: "Track Amazon product prices and get notified when they drop.",
    url: "https://amazon-price-tracker-two.vercel.app",
    siteName: "Amazon Price Tracker",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amazon Price Tracker Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return <LoginView />;
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <div className="p-4 h-screen">
            <Header user={user} />
            <div className="mt-4 grid grid-cols-12 gap-4 pb-4">
              <div className="col-span-3">
                <Sidebar />
              </div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
