import Image from "next/image";
import SearchBar from "./SearchBar";

interface HeroSectionProps {
  backgroundImage?: string;
  headline?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = "/images/slide1.jpg",
  headline = "Discover Amazing Experiences",
  subtitle = "Find and book unforgettable activities around the world",
}) => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
