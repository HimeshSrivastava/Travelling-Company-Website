import { handleBuildComplete } from "next/dist/build/adapter/build-complete";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  duration?: string;
  location?: string;
  href?: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const router = useRouter();
  const {
    title,
    description,
    image,
    price,
    currency = "$",
    rating = 4.5,
    reviewCount = 0,
    duration,
    location,
    href = "#",
  } = experience;

  return (
    <Link
      href={href}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {duration && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Location */}
        {location && (
          <p className="text-sm text-gray-500 mb-1">{location}</p>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Rating & Reviews */}
        {(rating || reviewCount > 0) && (
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-700">
                {rating.toFixed(1)}
              </span>
            </div>
            {reviewCount > 0 && (
              <span className="text-sm text-gray-500">
                ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
              </span>
            )}
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {currency}
              {price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 ml-1">per person</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push(`/booking`);
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
