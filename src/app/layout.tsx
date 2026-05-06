import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondbalanceyoga.com"),
  title: {
    default: "Beyond Balance | Corporate & Private Yoga",
    template: "%s | Beyond Balance",
  },
  description:
    "Beyond Balance offers private yoga, corporate wellness sessions, retreats, and workshops for grounded, modern living.",
  openGraph: {
    title: "Beyond Balance",
    description:
      "Corporate and private yoga experiences with calm, rooted luxury and practical wellness support.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80",
        width: 1400,
        height: 800,
        alt: "Peaceful yoga studio scene",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
