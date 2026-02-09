import AvailabilityTable from "@/common/AvailabilityTable";
// import Image from "next/image";

export const availabilityData = [
  {
    serial: 1,
    model: "Toyota Rumion",
    seats: "7 Seater",
    fourHr: "1200",
    eightHr: "2000",
    twelveHr: "3000",
    kmCharge: "13/km",
    extraHour: "100/hr",
  },
]

export const availabilityData1 = [
  {
    serial: 1,
    model: "Toyota Rumion",
    seats: "7 Seater",
    fourHr: "1200",
    eightHr: "2000",
    twelveHr: "3000",
    kmCharge: "13/km",
    extraHour: "100/hr",
  },
]

export const availabilityData2 = [
  {
    serial: 1,
    model: "Kia Carens",
    seats: "7 Seater",
    fourHr: "1500",
    eightHr: "2200",
    twelveHr: "4800",
    kmCharge: "16/km",
    extraHour: "150/hr",
  },
]

export const availabilityData3 = [
  {
    serial: 1,
    model: "Innova Crysta",
    seats: "8 Seater",
    fourHr: "NIL",
    eightHr: "3000",
    twelveHr: "5000",
    kmCharge: "20/km",
    extraHour: "200/hr",
  },
]

export const availabilityData4 = [
  {
    serial: 1,
    model: "Tempo Traveller",
    seats: "6 Seater",
    fourHr: "NIL",
    eightHr: "2500",
    twelveHr: "4500",
    kmCharge: "18/km",
    extraHour: "150/hr",
  },
]

export default function Page() {
    return ( 
      <div>
       <div className="bg-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
  <h2 className="text-center text-4xl font-bold text-gray-700">
    Our Fleet
  </h2>

  <div className="flex items-center justify-center gap-4 mt-4 mb-12">
    <span className="h-px w-24 bg-gray-300" />
    <span className="text-red-800 text-xl">♡</span>
    <span className="h-px w-24 bg-gray-300" />
  </div>

  <div className="space-y-20">
    <AvailabilityTable
      data={availabilityData3}
      imageSrc="/images/innova-crysta.webp"
      imageAlt="Innova Crysta"
    />

    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/RUMION.jpg"
      imageAlt="Toyota Rumion"
    />

    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/Kia-Carens.webp"
      imageAlt="Kia Carens"
    />

    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/Dzire.webp"
      imageAlt="Swift Dzire"
    />
  </div>
</div>

</div>

      </div>
)
}