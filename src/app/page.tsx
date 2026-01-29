"use client"

import CategoryCards from "@/home/CategoryCards";
import WhyBookWithUs from "@/home/WhyBookWithUs";
import StatsSection from "@/home/StatsSection";
import ImageSlider from "@/home/ImageSlider";
import {
  ShieldCheck,
  Wallet,
  FileCheck,
  FileX,
  CalendarClock,
  Headset,
  Flag,
  UserCheck,
  BadgePercent,
  HandMetal,
} from "lucide-react";
import SearchBar from "@/home/SearchBar";
import TrustStrip from "@/home/TrustStrip";
import Booking from "@/common/BookingPage";
import ServicesSection from "@/home/ServicesSection";

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  href: string;
}




const categories = [
  {
    id: "tours",
    title: "Airport & Railway",
    description: "",
    image: "/images/railway-airport.jpg",
    href: "/services/AirportRailway",
  },
  {
    id: "attractions",
    title: "Corporate Clients",
    description: "",
    image: "/images/corporate-services.jpg",
    href: "/services/CorporateClients",
  },
  {
    id: "experiences",
    title: "Out Of Station",
    description: "",
    image: "/images/out-of-station.jpg",
    href: "/services/OutOfStation",
  },
  {
    id: "day-trips",
    title: "Local Delhi/NCR",
    description: "",
    image: "/images/local-delhi-ncr.jpg",
    href: "/services/LocalDelhi/NCR",
  },
];


const features = [
  {
    icon: ShieldCheck,
    text: "Secure Your Spot by Paying 20% of the Trip",
  },
  {
    icon: Wallet,
    text: "Book Your Trip on Easy Zero-Cost EMI",
  },
  {
    icon: FileCheck,
    text: "Free Travel Insurance on Every Trip",
  },
  {
    icon: FileX,
    text: "Free Cancellation on Group Trips",
  },
  {
    icon: CalendarClock,
    text: "Reschedule at No Extra Charges",
  },
  {
    icon: Headset,
    text: "24*7 Support & Trained Trip Captains",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Solo is safe.",
    desc: "Girlies, you're safe AF. No need to wait on fam or besties—just pack and go! Explore stress-free with 100% freedom!",
  },
  {
    icon: Flag,
    title: "We're the greenest flag.",
    desc: "We ensure safety with verified stays, reliable transport, and trained guides for a secure, comfy, and hassle-free trip.",
  },
  {
    icon: UserCheck,
    title: "Our Group Captains are fire.",
    desc: "Our awesome trip captains are part-guide, part-friend and full time vibe curators.",
  },
  {
    icon: BadgePercent,
    title: "No kebab main haddi.",
    desc: "No middlemen, no hidden fees. Enjoy direct bookings, lower costs, and personalized support for a seamless and affordable trip.",
  },
  {
    icon: HandMetal,
    title: "Vibe check comes first.",
    desc: "We customize your trips based on age groups, so you’re not stuck vibing to someone else’s playlist without permission.",
  },
];

export default function Home() {

  return (
    <div className="w-full">
      {/* Hero Section with Search */}
      <section className="relative">
        <div className="opacity-100 object-cover">
        <ImageSlider
          images={[
            "/images/tracking.jpg",
            "/images/jammu.jpg",
            "/images/water.jpg",
            "/images/swimming-pool.jpg",
          ]}
        />
        </div>
        <div className="absolute top-1/2 left-32">
        <SearchBar/>
        </div>
      </section>
      <TrustStrip/>
      <Booking/>
      <ServicesSection/>
      <CategoryCards  />
      <WhyBookWithUs />
      <section className="bg-[#FEFEE3] py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl text-gray-900 md:text-4xl font-semibold text-center mb-14">
          Book with Confidence
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-5"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-sm">
                  <Icon className="w-9 h-9 text-red-700" />
                </div>

                {/* Text */}
                <p className="text-lg font-bold leading-snug text-gray-900">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* T&C */}
        <p className="text-sm text-gray-700 text-right mt-10">
          T&amp;C applied*
        </p>
      </div>
    </section>
      <StatsSection />

    <section className="bg-[#CFE5E3] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl text-black font-bold text-center mb-16">
          Reasons To Make Us Your Travel Bestie
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.slice(0, 3).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 flex gap-6 items-center shadow-sm"
              >
                <Icon className="w-12 h-12 text-red-700 shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-700 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-4xl mx-auto">
          {reasons.slice(3).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-gray-900 flex gap-6 items-center shadow-sm"
              >
                <Icon className="w-12 h-12 text-red-700 shrink-0" />
                <div>
                  <h3 className="text-lg text-gray-900 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
}
