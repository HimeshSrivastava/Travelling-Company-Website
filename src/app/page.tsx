"use client"

import CategoryCards from "@/src/components/home/CategoryCards";
import WhyBookWithUs from "@/src/components/home/WhyBookWithUs";
import StatsSection from "@/src/components/home/StatsSection";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageSlider from "@/src/components/home/ImageSlider";
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
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/src/components/home/SearchBar";
import TrustStrip from "@/src/components/home/TrustStrip";

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
const fleet = [
  {
    id: "tours",
    title: "Luxurious Bus",
    description: "",
    image: "/images/mb1.jpeg",
    href: "",
  },
  {
    id: "attractions",
    title: "Eritiga-2",
    description: "",
    image: "/images/ERITIGA-2.jpg",
    href: "",
  },
  {
    id: "experiences",
    title: "Xcent",
    description: "",
    image: "/images/Xcent.jpg",
    href: "",
  },
  {
    id: "day-trips",
    title: "Innova",
    description: "",
    image: "/images/innova.jpg",
    href: "",
  },
  {
    id: "days",
    title: "Swift",
    description: "",
    image: "/images/swift1.jpg",
    href: "",
  },
  {
    id: "day",
    title: "Wagonr",
    description: "",
    image: "/images/wagonr-png.png",
    href: "",
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
  const router = useRouter();
  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }
  
    // Create order
    const orderRes = await fetch("/api/create-order", {
      method: "POST",
    });
  
    const order = await orderRes.json();
  
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Tourist Website",
      description: "Ride Booking Payment",
      order_id: order.id,
      handler: function (response: any) {
        alert("Payment Successful!");
        console.log(response);
        router.push("/"); // redirect after payment
      },
      prefill: {
        name: "Customer Name",
        contact: "9999999999",
      },
      theme: {
        color: "#000000",
      },
    };
  
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

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
      <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6" >
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">
          Book Your Ride
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – FORM */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handlePayment}>
              <input className=" booking-input text-black" placeholder="Full Name" required/>
              <input className=" booking-input text-black" type="Number" placeholder="Mobile No." required/>

              <input className=" booking-input text-black" placeholder="Pick-Up Location" required/>
              <input className=" booking-input text-black" placeholder="Drop-Off Location" required/>

              {/* Trip Type */}
              <div className="flex items-center gap-10 md:col-span-2 text-sm">
                <label className="flex items-center gap-2 text-gray-500">
                  <input
                    type="radio"
                    checked={tripType === "oneway"}
                    onChange={() => setTripType("oneway")}
                    required
                  />
                  One-Way Trip
                </label>

                <label className="flex items-center gap-2 text-gray-500">
                  <input
                    type="radio"
                    checked={tripType === "round"}
                    onChange={() => setTripType("round")}
                    required
                  />
                  Round Trip
                </label>
              </div>

              <input className=" booking-input text-black" placeholder="Choose Your Ride" required/>
              <input className=" booking-input text-black"
                placeholder="No. Of People"
                type="number"
                required
              />

              <div className="md:col-span-2">
                <label className="block text-sm mb-1 font-medium text-gray-500">
                  Departure Date
                </label>
                <input title="Date" type="date" className="booking-input text-black w-full" required/>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-1 font-medium text-gray-500">
                  Return Date
                </label>
                <input title="Date" type="date" className=" booking-input text-black w-full" required/>
              </div>

              <div className="md:col-span-2 flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-black text-white px-10 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  BOOK NOW
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="hidden lg:block">
            <Image
              src="/images/taxi-service.jpg"   
              alt="Book Your Ride"
              width={600}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Local styles */}
      <style jsx>{`
        .booking-input {
          width: 100%;
          background: #f3f3f3;
          padding: 14px 16px;
          border-radius: 6px;
          border: none;
          font-size: 14px;
          outline: none;
        }
        .booking-input:focus {
          box-shadow: inset 0 0 0 1px #999;
          background: #f0f0f0;
        }
      `}</style>
    </section>
      
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Services
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2">
  {fleet.map((item) => (
    <Link
      key={item.id}
      href={item.href}
      className="group min-w-[260px] sm:min-w-[300px] lg:min-w-[280px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
    </Link>
  ))}
</div>+
      </div>
    </section>
      {/* Category Cards Section */}
      <CategoryCards  />

      {/* Why Book With Us Section */}
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
    
      {/* Stats Section */}
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
