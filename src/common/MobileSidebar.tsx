"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-black">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 bg-white text-black border-2 border-gray-200 rounded-lg">
      <SheetHeader>
    <SheetTitle className="text-black border-b-2 border-gray-400 pb-5">Menu</SheetTitle>
  </SheetHeader>
        <div className="flex flex-col gap-6 pt-8 text-lg font-medium pl-7">
          <Link href="/">Home</Link>
          <Link href="/fleet">Fleet</Link>
          <Link href="/packages">Upcoming Package</Link>
          <Link href="/trips">Customised Trips</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
