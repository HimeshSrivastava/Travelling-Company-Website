import Image from "next/image"

export default function HeroSection () {
    return (
   <>
     <section className="py-14">
     <div className="max-w-3xl mx-auto px-6 text-center">
       <h1 className="text-3xl md:text-4xl font-semibold">
         <span className="text-black">Chetan</span>{" "}
         <span className="text-gray-900">Tour & Travels</span>
       </h1>

       <div className="flex items-center justify-center gap-3 mt-4">
         <span className="h-px w-20 bg-gray-800"></span>
         <span className="w-3 h-3 rounded-full border border-red-400"></span>
         <span className="h-px w-20 bg-gray-300"></span>
       </div>
     </div>
   </section>
   
   <section className="py-8">
     <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
       <div className="space-y-6">
         <h2 className="text-2xl md:text-3xl font-light italic text-black">
           “Travel with us, and the world will feel like home”
         </h2>

         <p className="text-gray-600 leading-relaxed">
           Travel is what we power. It’s our passion. It drives us every day.
           It’s what excites us to wake up and explore new possibilities.
         </p>

         <p className="text-gray-600 leading-relaxed">
           From the last 20 years, we were and are still proud of being the
           most trusted travel partner for thousands of customers.
         </p>
       </div>

       <div className="flex justify-center">
         <Image
           src="/images/about-us-image.png"
           alt="Travel illustration"
           width={500}
           height={420}
           className="max-w-md w-full object-contain"
         />
       </div>
     </div>
   </section>
   </>
    )
}