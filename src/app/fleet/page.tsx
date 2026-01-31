import AvailabilityTable from "@/common/AvailabilityTable";
import Image from "next/image";

const availabilityData1 =[
    { serial: 1, model: "Model A", seats: "5 Seater" },
    { serial: 2, model: "Model B", seats: "3 Seater" },
    { serial: 3, model: "Model C", seats: "6 Seater" },
    { serial: 4, model: "Model D", seats: "2 Seater" },
    { serial: 5, model: "Model E", seats: "4 Seater" },
    { serial: 6, model: "Model F", seats: "1 Seater" },
]

export const availabilityData = [
    { serial: 1, model: "Model A", seats: "5 Seater" },
    { serial: 2, model: "Model B", seats: "3 Seater" },
    { serial: 3, model: "Model C", seats: "6 Seater" },
    { serial: 4, model: "Model D", seats: "2 Seater" },
    { serial: 5, model: "Model E", seats: "4 Seater" },
    { serial: 6, model: "Model F", seats: "1 Seater" },
  ]

export default function Page() {
    return ( 
        <div className="bg-white">
<div className="max-w-7xl mx-auto px-6 bg-white p-6">
  {/* Heading */}
  <h2 className="text-center text-4xl font-bold text-gray-700">
    Our Fleet
  </h2>

  {/* Divider */}
  <div className="flex items-center justify-center gap-4 mt-4 mb-12">
    <span className="h-px w-24 bg-gray-300" />
    <span className="text-red-800 text-xl">♡</span>
    <span className="h-px w-24 bg-gray-300" />
  </div>

</div>
<div className="p-28">
    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/ERITIGA-2.jpg"
      imageAlt="Bus"
    />

</div>

<div className="p-28">
    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/Xcent1.webp"
      imageAlt="Bus"
    />

</div>

<div className="p-28">
    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/innova-crysta.webp"
      imageAlt="Bus"
    />

</div>

<div className="p-28">
    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/ERITIGA-2.jpg"
      imageAlt="Bus"
    />

</div>

<div className="p-28">
    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/Dzire.webp"
      imageAlt="Bus"
    />

</div>
<div className="p-28">
    <AvailabilityTable
      data={availabilityData}
      imageSrc="/images/wagon.webp"
      imageAlt="Bus"
    />

</div>

</div>
)
}