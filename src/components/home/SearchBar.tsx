"use client";

import { useState } from "react";

interface SearchBarProps {
  onSubmit?: (searchData: SearchData) => void;
  variant?: "hero" | "inline";
}

export interface SearchData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, variant = "hero" }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ destination, checkIn, checkOut, guests });
  };

  const baseClasses =
    variant === "hero"
      ? "bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-6xl mx-auto"
      : "bg-white rounded-xl shadow-md p-4 w-full";

  return (
    <div className="bg-transparent">
      <form onSubmit={handleSubmit} className={baseClasses}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Destination */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Where to?
            </label>
            <input
              type="text"
              placeholder="Search destinations"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-100 text-[#1F2933] placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]"
            />
          </div>

          {/* Check In */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Check In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-100 text-[#1F2933]
              focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]"
            />
          </div>

          {/* Check Out */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Check Out
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-100 text-[#1F2933]
              focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]"
            />
          </div>

          {/* Guests + CTA */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Guests
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-[#1F2933]
                focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]"
              />

              <button
                type="submit"
                className="px-8 py-3 bg-[#F4A261] text-black font-semibold
                rounded-lg hover:bg-[#E76F51] transition whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default SearchBar;
