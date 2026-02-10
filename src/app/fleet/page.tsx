import AvailabilityTable from "@/common/AvailabilityTable";


export const availabilityData1 = [
  {serial:"1",kmHr: "4 Hrs / 40 Kms", pricingHr: "1200"},
  {serial:"2",kmHr: "8 Hrs / 80 Kms", pricingHr: "2000"},
  {serial:"3",kmHr: "12 Hrs / 120 Kms", pricingHr: "3000"},
  {serial:"4",kmHr: "kmCharge", pricingHr: "13/km"},
  {serial:"5",kmHr: "extraHour", pricingHr: "100/hr"},
]

export const availabilityData2 = [
  {serial:"1",kmHr: "4 Hrs / 40 Kms", pricingHr: "1500"},
  {serial:"2",kmHr: "8 Hrs / 80 Kms", pricingHr: "2200"},
  {serial:"3",kmHr: "12 Hrs / 120 Kms", pricingHr: "4800"},
  {serial:"4",kmHr: "kmCharge", pricingHr: "16/km"},
  {serial:"5",kmHr: "extraHour", pricingHr: "150/hr"},
]

export const availabilityData3 = [
  {serial:"1",kmHr: "4 Hrs / 40 Kms", pricingHr: "NIL"},
  {serial:"2",kmHr: "8 Hrs / 80 Kms", pricingHr: "3000"},
  {serial:"3",kmHr: "12 Hrs / 120 Kms", pricingHr: "5000"},
  {serial:"4",kmHr: "kmCharge", pricingHr: "20/km"},
  {serial:"5",kmHr: "extraHour", pricingHr: "200/hr"},
]

export const availabilityData4 = [
  {serial:"1",kmHr: "4 Hrs / 40 Kms", pricingHr: "NIL"},
  {serial:"2",kmHr: "8 Hrs / 80 Kms", pricingHr: "2500"},
  {serial:"3",kmHr: "12 Hrs / 120 Kms", pricingHr: "4500"},
  {serial:"4",kmHr: "kmCharge", pricingHr: "18/km"},
  {serial:"5",kmHr: "extraHour", pricingHr: "150/hr"},
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
      data={availabilityData1}
      imageSrc="/images/innova-crysta.webp"
      imageAlt="Innova Crysta"
    />

    <AvailabilityTable
      data={availabilityData2}
      imageSrc="/images/RUMION.jpg"
      imageAlt="Toyota Rumion"
    />

    <AvailabilityTable
      data={availabilityData3}
      imageSrc="/images/Kia-Carens.webp"
      imageAlt="Kia Carens"
    />

    <AvailabilityTable
      data={availabilityData4}
      imageSrc="/images/Dzire.webp"
      imageAlt="Swift Dzire"
    />
  </div>
</div>

</div>

      </div>
)
}