import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// const playfair = Playfair_Display({
//   variable: "--font-display",
//   subsets: ["latin"],
//   display: "swap",
// });

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Rozgar Grid — Bridging the Gap for Every Worker",
  description:
    "A research-driven initiative and digital platform connecting daily wage workers in Sonipat with government welfare schemes and verified employment.",
  keywords: [
    "Rozgar Grid",
    "labor welfare",
    "daily wage workers",
    "Sonipat",
    "Haryana",
    "government schemes",
    "Rishihood University",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
