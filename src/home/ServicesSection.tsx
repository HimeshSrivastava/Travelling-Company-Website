"use client"

import Image from "next/image";
import Link from "next/link";

const fleet = [
    {
      id: "tours",
      title: "Luxurious Bus",
      description: "",
      image: "/images/mb1.jpeg",
      href: "",
    },
    {
      id: "attractions",
      title: "Eritiga-2",
      description: "",
      image: "/images/ERITIGA-2.jpg",
      href: "",
    },
    {
      id: "experiences",
      title: "Xcent",
      description: "",
      image: "/images/Xcent1.webp",
      href: "",
    },
    {
      id: "day-trips",
      title: "Innova",
      description: "",
      image: "/images/innova-crysta.webp",
      href: "",
    },
    {
      id: "days",
      title: "Swift",
      description: "",
      image: "/images/Dzire.webp",
      href: "",
    },
    {
      id: "day",
      title: "Wagonr",
      description: "",
      image: "/images/wagon.webp",
      href: "",
    },
  ];



export default function ServicesSection () {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Services
            </h2>
          </div>
  
          <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2">
       {fleet.map((item) => (
        <Link
        key={item.id}
        href={item.href}
        className="group min-w-[300px] sm:min-w-[300px] lg:min-w-[430px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
      >
        <div className="relative h-50 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover aspect-ratio-[1/4]"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      </Link>
    ))}
  </div>
        </div>
      </section>
    )
}