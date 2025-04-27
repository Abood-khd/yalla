import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./styles/globals.css";

import MobileBottomNav from "@/app/@core/layout/MobileBottomNav";
import Navbar from "./@core/layout/Navbar";
import Footer from "./@core/layout/Footer";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "YallaMotor",
  description: "Find new & used cars for sale in UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body
        className="antialiased"
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
