import Image from "next/image";

export default function CompanyFounder (){
    return (
     <section className="py-20 bg-gray-50">
     <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
       <div className="flex flex-col items-center">
         <Image
           src="/images/sunil_singh.jpg"
           alt="Mr. Sunil Kumar Raghav"
           width={300}
           height={300}
           className="w-48 h-48 object-cover mb-6"
         />
         <h1 className="text-2xl font-light italic text-black">
           Mr. Sunil Kumar Raghav
         </h1>
         <h2 className="text-lg font-light italic text-gray-700">
           Director, Chetan Trip Solution Pvt. Ltd.
         </h2>
       </div>

       <div className="space-y-6">
         <h2 className="text-2xl md:text-3xl font-light italic text-black">
           Message from the Founder
         </h2>

         <p className="text-gray-600 leading-relaxed">
           At Chetan Tour and Travel, we believe that every journey is an
           opportunity to create unforgettable memories.
         </p>

         <p className="text-gray-600 leading-relaxed">
           Our focus is on customer satisfaction, transparency, and
           responsible travel.
         </p>
       </div>
     </div>
   </section>
    )
}