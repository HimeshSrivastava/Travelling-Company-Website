"use client";

import ImageSlider from "@/home/ImageSlider";
import HeroSection from "@/about/HeroSection";
import CompanyFounder from "@/about/CompanyFounder";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative">
        <ImageSlider
          images={[
            "/images/b1.jpg",
            "/images/b2.jpg",
            "/images/b3.jpg",
            "/images/b4.jpg",
            "/images/b5.jpg",
            "/images/b6.jpg",
          ]}
        />
      </section>
      <HeroSection/>
      <CompanyFounder/>
    </div>
  );
}
