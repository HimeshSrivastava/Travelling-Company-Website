"use client";

import { useState, useRef, useEffect } from "react";
import ExperienceCard, { Experience } from "./ExperienceCard";

interface FeaturedExperiencesProps {
  experiences: Experience[];
  title?: string;
  subtitle?: string;
}

const FeaturedExperiences: React.FC<FeaturedExperiencesProps> = ({
  experiences,
  title = "Featured Experiences",
  subtitle = "Handpicked experiences you'll love",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [experiences]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; 
      const scrollTo =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#CFE5E3] py-20">
    <div className="max-w-7xl mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl text-black font-bold text-center mb-16">
        Reasons To Make Us Your Travel Bestie
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reasons.slice(0, 3).map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 flex gap-6 items-center shadow-sm"
            >
              <Icon className="w-12 h-12 text-red-700 shrink-0" />
              <div>
                <h3 className="text-lg text-gray-700 font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-4xl mx-auto">
        {reasons.slice(3).map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-gray-900 flex gap-6 items-center shadow-sm"
            >
              <Icon className="w-12 h-12 text-red-700 shrink-0" />
              <div>
                <h3 className="text-lg text-gray-900 font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default FeaturedExperiences;
