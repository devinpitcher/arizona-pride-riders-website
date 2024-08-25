import type { Metadata } from "next";
import { Inter, Bangers } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bangers = Bangers({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bangers",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Arizona Pride Riders",
  description:
    "A group for LGBTQIA2S+ motorcycle riders, enthusiasts, and their friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={`h-full ${inter.className} ${bangers.variable}`}>
        {children}
      </body>
    </html>
  );
}
