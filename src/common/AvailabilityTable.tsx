"use client"

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
    serial:number 
    model: string 
    seats: string 
}

interface AvailabilityTableProps {
    title?: string 
    imageSrc?: string
    imageAlt?: string
    data: AvailabilityItem[]
}

export default function AvailabilityTable({
    title = "AVAILABILITY",
    imageSrc,
    imageAlt = "vehicle",
    data,
}: AvailabilityTableProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start bg-white">
      
        {/* Image */}
        {imageSrc && (
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="w-full max-w-4xl mx-auto border shadow-md">
            <div className="bg-black text-white text-center py-3 font-semibold">
                {title}
            </div>

            <Table>
                <TableHeader>
                    <TableRow className="bg-white">
                        <TableHead className="text-center text-black border">
                            Serial No.
                        </TableHead>
                        <TableHead className="text-center text-black border">
                            Model No.
                        </TableHead>
                        <TableHead className="text-center text-black border">
                          Occupied Seat
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((item)=>(
                        <TableRow key={item.serial} className="bg-gray-100">
                            <TableCell className="text-center text-black border">
                                {item.serial}
                            </TableCell>
                            <TableCell className="text-center text-black border font-medium">
                                {item.model}
                            </TableCell>
                            <TableCell className="text-center text-black border">
                                {item.seats}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
    )
}