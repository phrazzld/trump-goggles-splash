import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { APP_CONFIG } from "@/app/config/app-config";

// Bold display font for headings (900 weight)
const playfairDisplayBlack = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "900",
  display: "swap",
});

// Body font - Playfair Display in regular weights for vintage coherence
const playfairBody = Playfair_Display({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: APP_CONFIG.metadata.title,
  description: APP_CONFIG.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplayBlack.variable} ${playfairBody.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}