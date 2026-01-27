"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, Search } from "lucide-react";
import { useEnquiry } from "@/src/context/EnquiryContext";


export default function Navbar() {
  const{ openEnquiry }=useEnquiry();
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      {/* TOP OFFER BAR */}
      <div className="bg-green-700 text-white text-sm font-medium h-8 flex items-center justify-center">
        Ladakh Spiti Early Bird – Save up to ₹3,000 🎉
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-4">

        {/* ROW 1 */}
        <div className="flex items-center justify-between h-15">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo.jpg"
              alt="Chetan Trip Solution"
              width={55}
              height={10}
            />
            <span className="text-xl font-semibold text-green-700 leading-tight">
              Chetan <br /> Trip Solution
            </span>
          </Link>

          <div className="hidden md:flex items-center w-[300px]">
            <div className="flex items-center gap-2 w-full border rounded-full px-4 py-2 text-gray-600">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search your trip..."
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700">
              <Phone size={16} />
              (+91) 8287636079
            </div>

            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Login
            </button>
          </div>
        </div>

        {/* ROW 2 – MENU */}
        <div className="h-14 flex items-center gap-8 text-sm font-medium text-gray-800">

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            👥 Group Trips <ChevronDown size={14} />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            🏷 Deals <ChevronDown size={14} />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            🧭 Travel Styles <ChevronDown size={14} />
          </div>

          <Link href="#" className="hover:text-green-700">
            🧳 Upcoming Group Trips
          </Link>

          <Link href="#" className="hover:text-green-700">
            🚗 Weekend Trip
          </Link>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            🌍 Customised Trips <ChevronDown size={14} />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            ℹ️ More about us <ChevronDown size={14} />
          </div>

          {/* ENQUIRE BUTTON */}
          <button
            onClick={openEnquiry}
            className="ml-auto bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition"
          >
            Enquire
          </button>
        </div>

      </div>
    </header>
  );
}
