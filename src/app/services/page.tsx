"use client";
import HeroSection from "@/home/HeroSection";
import Image from "next/image";
import {
    Bus,
    Pencil,
    Megaphone,
    Hotel,
    Building2,
    Building,
    Mail, Twitter, Facebook
  } from "lucide-react";
import CategoryCards from "@/home/CategoryCards";
import ImageSlider from "@/home/ImageSlider";

export default function ServicesPage() {
    const services = [
        {
          icon: Bus,
          title: "Tour by Taxi or Mini Bus",
          desc: "We can arrange, our said tours exclusively for you and your family, as per your requirement.",
        },
        {
          icon: Pencil,
          title: "Special Group Tours",
          desc: "Schools, colleges, corporates or organizations, we arrange exclusive tour packages as per your requirement.",
        },
        {
          icon: Megaphone,
          title: "Vehicle on Hire",
          desc: "49 / 35 / 27 / 20 / 12 / 8 / 4 seater vehicles are available on hire",
        },
        {
          icon: Hotel,
          title: "Hotel Reservations",
          desc: "Accommodation of any category at any destination in India and abroad can be arranged.",
        },
        {
          icon: Building2,
          title: "Corporate",
          desc: "We provide reliable corporate travel solutions ensuring safety, punctuality and comfort for employees.",
        },
        {
          icon: Building,
          title: "Local Travels",
          desc: "We extend our services to educational institutions, schools, colleges, and local travel needs.",
        },
      ];

      const corporateCategories =[
        {
          id: "agra",
          title: "Agra",
          description: "",
          image: "/images/agra.jpg",
          href: "",
        },
        {
          id: "uttrakhand",
          title: "Uttrakhand",
          description: "",
          image: "/images/uttrakhand.jpg",
          href: "",
        },
        {
          id: "mathura",
          title: "mathura",
          description: "",
          image: "/images/mathura.jpg",
          href: "",
        },
        {
          id: "kashmir",
          title: "Kashmir",
          description: "",
          image: "/images/kashmir.jpg",
          href: "",
        },
        {
          id: "Rajasthan",
          title: "Rajasthan",
          description: "",
          image: "/images/Rajasthan.jpg",
          href: "",
        },
        {
          id: "Goa",
          title: "Goa",
          description: "",
          image: "/images/Goa.jpg",
          href: "",
        },
        {
          id: "himachal",
          title: "Himachal Pradesh",
          description: "",
          image: "/images/himachal.png",
          href: "",
        },
        {
          id: "LEH",
          title: "LEH",
          description: "",
          image: "/images/LEH.jpg",
          href: "",
        },
      ];
    
    return (
        <div className="w-full">
        {/* Hero Section with Search */}
        <HeroSection
          backgroundImage="/images/slide8.jpg"
          headline="People don’t take trips,
          trips take people...."
          subtitle="Find and book unforgettable activities around the world"
        />
       <section className="bg-[#f7f9f9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-gray-700">
          OUR SERVICES
        </h2>

        <div className="flex items-center justify-center gap-4 mt-4 mb-16">
          <span className="h-px w-24 bg-gray-300" />
          <span className="text-gray-300 text-xl">♡</span>
          <span className="h-px w-24 bg-gray-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="flex gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full border border-emerald-900 flex items-center justify-center text-emerald-900">
                    <Icon size={26} />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <CategoryCards
     title="Our India Packages"
     subtitle="Trusted by leading organizations"
     categories={corporateCategories}
    />
        </div>
    )
}