"use client"

import CategoryCards from "@/home/CategoryCards";
import WhyBookWithUs, { ReasonWithUs } from "@/home/WhyBookWithUs";
import StatsSection from "@/home/StatsSection";
import ImageSlider from "@/home/ImageSlider";
import SearchBar from "@/home/SearchBar";
import TrustStrip from "@/home/TrustStrip";
import Booking from "@/common/BookingPage";
import ServicesSection from "@/home/ServicesSection";

export default function Home() {

  return (
    <div className="w-full">
      <section className="relative">
        <div className="opacity-100 object-cover">
        <ImageSlider
          images={[
            "/images/tracking.jpg",
            "/images/jammu.jpg",
            "/images/water.jpg",
            "/images/swimming-pool.jpg",
          ]}
        />
        </div>
        <div className="absolute top-1/2 left-32">
        <SearchBar/>
        </div>
      </section>
      <TrustStrip/>
      <Booking/>
      <ServicesSection/>
      <CategoryCards  />
      <WhyBookWithUs />
      <StatsSection />
      <ReasonWithUs/>
    </div>
  );
}
