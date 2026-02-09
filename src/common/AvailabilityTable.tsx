"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"

interface AvailabilityItem {
  serial: number
  seats: string
  fourHr: string
  eightHr: string
  twelveHr: string
  kmCharge: string
  extraHour: string
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

        <Table className="text-black">
          {/* ✅ HEADER */}
          <TableHeader>
            <TableRow>
              <TableHead className="text-center border text-black">Serial No.</TableHead>
              <TableHead className="text-center border text-black">Occupied Seat</TableHead>
              <TableHead className="text-center border text-black">4 Hrs / 40 Kms</TableHead>
              <TableHead className="text-center border text-black">8 Hrs / 80 Kms</TableHead>
              <TableHead className="text-center border text-black">12 Hrs / 180 Kms</TableHead>
              <TableHead className="text-center border text-black">Kms charges</TableHead>
              <TableHead className="text-center border text-black">Extra Hours Charge</TableHead>
            </TableRow>
          </TableHeader>

          {/* ✅ BODY */}
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.serial} className="bg-gray-100">
                <TableCell className="text-center border">
                  {item.serial}
                </TableCell>
                <TableCell className="text-center border">
                  {item.seats}
                </TableCell>
                <TableCell className="text-center border">
                  {item.fourHr}
                </TableCell>
                <TableCell className="text-center border">
                  {item.eightHr}
                </TableCell>
                <TableCell className="text-center border">
                  {item.twelveHr}
                </TableCell>
                <TableCell className="text-center border">
                  {item.kmCharge}
                </TableCell>
                <TableCell className="text-center border">
                  {item.extraHour}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
