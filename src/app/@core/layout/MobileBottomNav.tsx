"use client";

import { Home, CarFront, User } from "lucide-react";
import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between px-7.5 items-center py-2 z-50 lg:hidden">
      
      <Link href="/" className="flex flex-col items-center text-gray-500 text-xs">
        <Home size={24} />
        <span>Home</span>
      </Link>

      <Link href="/used-cars" className="flex flex-col items-center text-gray-500 text-xs">
        <CarFront size={24} />
        <span>Used Cars</span>
      </Link>

      <div className="relative">
        <Link href="/sell" className="flex flex-col items-center justify-center w-18 h-18 bg-green-900 border-2 border-green-400 rounded-full text-white shadow-2xl -mt-10">
          <CarFront size={30} />
          <span className="text-xs font-bold">SELL</span>
        </Link>
      </div>

      <Link href="/new-cars" className="flex flex-col items-center text-gray-500 text-xs">
        <CarFront size={24} />
        <span>New Cars</span>
      </Link>

      <Link href="/profile" className="flex flex-col items-center text-gray-500 text-xs">
        <User size={24} />
        <span>Profile</span>
      </Link>

    </div>
  );
}
