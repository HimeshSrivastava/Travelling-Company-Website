"use client";

import { Star } from "lucide-react";
import Image from "next/image";

export default function TrustStrip() {
  return (
    <section className="w-full bg-[#EFFFF6] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-sm font-medium text-[#0F5132]">

          {/* Instagram */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/Instagram.png"
              alt="Instagram"
              width={22}
              height={10}
            />
            <span className="font-semibold">
              541k+ <span className="font-normal">Community</span>
            </span>
          </div>

          {/* Google Rating */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/search.png"
              alt="Google"
              width={22}
              height={22}
            />
            <Star className="w-4 h-4 fill-[#F4B400] text-[#F4B400]" />
            <span className="font-semibold">
              4.9 <span className="font-normal">(8.5k+ Reviews)</span>
            </span>
          </div>

          {/* Travellers */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/tourist.png"
              alt="Travellers"
              width={22}
              height={22}
            />
            <span className="font-semibold">
              35k+ <span className="font-normal">Travellers</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
