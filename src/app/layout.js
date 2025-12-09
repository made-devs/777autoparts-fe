import Navbar from "@/components/Layout/Navbar";
import "./globals.css";
import { Inter } from "next/font/google"; // Atau font pilihan lo
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "777 Auto Part",
  description: "Premium Auto Parts & Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-950 text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
