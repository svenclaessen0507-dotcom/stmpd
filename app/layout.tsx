import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

/* Heb dit niet werkend gekregen, geen idee hoe dit precies werkt. Daarom heb ik gewoon de styling toegevoegd per element */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-title",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: "STMPD PoC",
  description: "What we do hover PoC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
