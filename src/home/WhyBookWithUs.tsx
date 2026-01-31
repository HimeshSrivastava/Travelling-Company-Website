"use client"

import { BadgePercent, CalendarClock, FileCheck, FileX, Flag, HandMetal, Headset, ShieldCheck, UserCheck, Wallet } from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  blobColor: string;
}


const WhyBookWithUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "24/7 customer support",
      description: "No matter the time zone, we're here to help.",
      blobColor: "bg-pink-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hot Air Balloon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4c-3 0-5.5 2-5.5 5 0 2 1 3.5 2 5L12 20l3.5-6c1-1.5 2-3 2-5 0-3-2.5-5-5.5-5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9h8M10 13h4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v5"
          />
        </svg>
      ),
      title: "Earn rewards",
      description: "Explore, earn, redeem, and repeat with our loyalty program.",
      blobColor: "bg-teal-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      title: "Millions of reviews",
      description: "Plan and book with confidence using reviews from fellow travelers.",
      blobColor: "bg-yellow-100",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Plan your way",
      description:
        "Stay flexible with free cancellation and the option to reserve now and pay later at no additional cost.",
      blobColor: "bg-blue-100",
    },
  ];
  const photos = [
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
  return (
    <>
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why book with us?
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Icon with Colored Blob Background */}
              <div
                className={`${feature.blobColor} w-20 h-20 rounded-full flex items-center justify-center mb-4 relative`}
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                <div className="text-gray-900">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#FEFEE3] py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl text-gray-900 md:text-4xl font-semibold text-center mb-14">
          Book with Confidence
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10">
          {photos.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-5"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-sm">
                  <Icon className="w-8 h-8 text-emerald-900" />
                </div>

                {/* Text */}
                <p className="text-md font-bold leading-snug text-gray-900">
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
    </>
  );
};

export default WhyBookWithUs;

export function ReasonWithUs(){
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
  return (
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
              <Icon className="w-12 h-12 text-emerald-900 shrink-0" />
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
              <Icon className="w-12 h-12 text-emerald-900 shrink-0" />
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
  )
}
