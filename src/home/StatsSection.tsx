"use client";
import { Clock, Users, Rocket, Car } from "lucide-react";
import StatItem from "./StatItem";
import { useState } from "react";


const stats = [
  { icon: Clock, value: 10000, label: "HOURS OF TRIP" },
  { icon: Users, value: 250, label: "SATISFIED CLIENTS" },
  { icon: Rocket, value: 100, label: "EDUCATIONAL TRIPS" },
  { icon: Car, value: 1000, label: "TOURS & TRAVELS SERVICE" },
];

export default function StatsSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/city-night.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0c2538]/90" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-emerald-400">
          SOME OF FACTS
        </h2>

        <div className="flex justify-center items-center gap-4 mt-4 mb-12">
          <span className="w-16 h-px bg-white/40" />
          <span className="text-xl">♡</span>
          <span className="w-16 h-px bg-white/40" />
        </div>

        {/* Stats Grid */}
        <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {stats.map((item, index) => (
        <StatItem key={index} item={item} hovered={hovered} />
      ))}
    </div>
      </div>
    </section>
  );
}
