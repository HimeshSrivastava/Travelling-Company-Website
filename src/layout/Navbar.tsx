"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown, MapPin, Plane, ArrowRight } from "lucide-react";
import { useEnquiry } from "@/context/EnquiryContext";
import { Button } from "@/components/ui/button";
import MobileSidebar from "@/common/MobileSidebar";

export default function Navbar() {
  const{ openEnquiry }=useEnquiry();
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">

      {/* TOP OFFER BAR */}
      <div className="bg-green-700 text-white text-sm font-medium h-8 flex items-center justify-center">
        Special offer for Coperate Client and Services 🎉
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-4">

        {/* ROW 1 */}
        <div className="flex items-center justify-between h-15">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/app icon (2).png"
              alt="Chetan Trip Solution"
              width={55}
              height={55}
            />
            <span className="text-xl font-semibold text-green-700 leading-tight">
              Chetan <br/> Trip Solution
            </span>
          </Link>

          <div className="hidden md:flex items-center w-[300px]">
            <Link href="/UpcomingPackage">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:underline">
             <Plane className="w-4 h-4" />
              Click here for our India trip
             <ArrowRight className="w-4 h-4" />
          </button>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700">
              <Phone size={16} />
              (+91) 9911099992
            </div>
          </div>
        </div>

        <div className="h-14 flex items-center gap-8 text-sm font-medium text-gray-800">
        <div className="md:hidden">
         <MobileSidebar />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
          <Link href="/" className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            👥 Home <ChevronDown size={14} />
          </Link>

          <Link href="/fleet" className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            🏷 Fleet <ChevronDown size={14} />
          </Link>

          <Link href="/UpcomingPackage" className="hover:text-green-700">
            🧳 Upcoming Package
          </Link>

          <Link href="/services" className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            🌍 Customised Trips <ChevronDown size={14} />
          </Link>

          <Link href="/about" className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            ℹ️ More about us <ChevronDown size={14} />
          </Link>

          <Link href="/contact" className="flex items-center gap-1 cursor-pointer hover:text-green-700">
            ℹ️ Contact us <ChevronDown size={14} />
          </Link>

        </div>
          <Button
            onClick={openEnquiry}
            className="ml-auto bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition"
          >
            Enquire
          </Button>
        </div>

      </div>
    </header>
  );
}
