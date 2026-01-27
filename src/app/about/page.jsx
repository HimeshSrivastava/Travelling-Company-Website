"use client";

import Image from "next/image";
import ImageSlider from "@/src/components/home/ImageSlider";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO SLIDER (FULL WIDTH, NO PADDING) */}
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

      {/* TITLE SECTION */}
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

      {/* CONTENT SECTION 1 */}
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

      {/* CONTENT SECTION 2 – FOUNDER */}
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
    </div>
  );
}
