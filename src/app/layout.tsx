import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/nav";
import Footer from "./components/footer/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Iku Marketplace",
  description: "E-Commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <div className=" flex flex-col min-h-screen">
          <Navbar />
          <main className=" flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
