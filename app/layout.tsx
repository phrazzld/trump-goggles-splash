import type { Metadata } from "next";
import { Playfair_Display, Inter, Courier_Prime } from "next/font/google";
import "./globals.css";

// Bold display font for headings
const playfairDisplayBlack = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "900", // Black weight for maximum impact
  display: "swap",
});

// Clean body font
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Keep existing fonts for compatibility
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const interCompat = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trump Goggles",
  description: "Translates text to Trumpisms - See the web through a different lens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplayBlack.variable} ${inter.variable} ${playfairDisplay.variable} ${interCompat.variable} ${courierPrime.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
