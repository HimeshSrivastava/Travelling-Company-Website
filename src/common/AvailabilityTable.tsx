"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEnquiry } from "@/context/EnquiryContext"
import Image from "next/image"

interface AvailabilityItem {
  serial: string
  kmHr: string
  pricingHr: string
}

interface AvailabilityTableProps {
  title?: string
  imageSrc?: string
  imageAlt?: string
  data: AvailabilityItem[]
}

export default function AvailabilityTable({
  title = "PRICEING",
  imageSrc,
  imageAlt = "vehicle",
  data,
}: AvailabilityTableProps) {
  const{ openEnquiry }=useEnquiry();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start bg-white">
      {/* Image */}
      {imageSrc && (
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
        <AspectRatio ratio={16 / 9} className="bg-white rounded-lg overflow-hidden">
         <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
         />
        </AspectRatio>
        </div>
      )}

      {/* Table */}
      <div className="w-full max-w-4xl mx-auto border shadow-md">
        <div className="bg-black text-white text-center py-3 font-semibold">
          {title}
        </div>
        <div className="grid grid-cols-[80%_20%]">
        <div>
        <div className="grid grid-cols-2 border-b">
        <div className="p-3 font-semibold border-r text-gray-800 text-center">Seat</div>
        <div className="p-3 font-semibold text-center text-gray-800">7–8 Person</div>
      </div>
     
        <Table className="text-black">
          {/* ✅ HEADER */}
          <TableHeader>
          <TableRow>
            <TableHead className="border-r text-center text-gray-800">Serial No.</TableHead>
            <TableHead className="border-r text-center text-gray-800">Hour / Distance</TableHead>
            <TableHead className="text-center text-gray-800">Price</TableHead>
          </TableRow>
          </TableHeader>

          {/* ✅ BODY */}
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.pricingHr} className="bg-gray-100">
                <TableCell className="text-center border">
                  {item.serial}
                </TableCell>
                <TableCell className="text-center border">
                  {item.kmHr}
                </TableCell>
                <TableCell className="text-center border">
                  {item.pricingHr}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
        <div className="flex items-center justify-center">
          <Button size="lg" onClick={openEnquiry}>
            Book
            </Button>
        </div>
      </div>
    </div>
    </div>
  )
}
