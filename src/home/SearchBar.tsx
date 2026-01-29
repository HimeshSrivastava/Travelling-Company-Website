"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface SearchBarProps {
  onSubmit?: (searchData: SearchData) => void
  variant?: "hero" | "inline"
}

export interface SearchData {
  destination: string
  checkIn: string
  checkOut: string
  guests: number
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, variant = "hero" }) => {
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(2)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ destination, checkIn, checkOut, guests })
  }

  const baseClasses =
    variant === "hero"
      ? "bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-6xl mx-auto"
      : "bg-white rounded-xl shadow-md p-4 w-full"

  return (
    <form onSubmit={handleSubmit} className={baseClasses}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Destination */}
        <div className="flex flex-col gap-2">
          <Label className="text-black">Where to?</Label>
          <Input
            placeholder="Search destinations"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* Check In */}
        <div className="flex flex-col gap-2">
          <Label className="text-black">Check In</Label>
          <Input
            className="text-gray-600"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        {/* Check Out */}
        <div className="flex flex-col gap-2">
          <Label className="text-black">Check Out</Label>
          <Input
            className="text-gray-600"
            type="date"
            value={checkOut}
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        {/* Guests + CTA */}
        <div className="flex flex-col gap-2">
          <Label className="text-black">Guests</Label>
          <div className="flex gap-3">
            <Input
              type="number"
              className="text-gray-600"
              min={1}
              max={10}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            />

            <Button
              type="submit"
              className="bg-[#F4A261] text-black hover:bg-[#E76F51]"
            >
              Search
            </Button>
          </div>
        </div>

      </div>
    </form>
  )
}

export default SearchBar
