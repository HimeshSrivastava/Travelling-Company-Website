import AvailabilityTable from "@/common/AvailabilityTable";
import Image from "next/image";

const availabilityData =[
    { serial: 1, model: "Model A", seats: "5 Seater" },
    { serial: 2, model: "Model B", seats: "3 Seater" },
    { serial: 3, model: "Model C", seats: "6 Seater" },
    { serial: 4, model: "Model D", seats: "2 Seater" },
    { serial: 5, model: "Model E", seats: "4 Seater" },
    { serial: 6, model: "Model F", seats: "1 Seater" },
]

export default function ImageCard (){
  return(
    <div className="md:grid-cols-2 ">
       <Image
            src="/images/mb1.jpeg"
            alt="bus"
            fill
            className="object-cover"
          />
        <AvailabilityTable data={availabilityData}/>
    </div>
  )
}