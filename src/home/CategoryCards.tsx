import Link from "next/link";
import Image from "next/image";

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  href: string;
}

interface CategoryCardsProps {
  title?: string;
  subtitle?: string;
  categories?: Category[];
}

const defaultCategories: Category[] = [
  {
    id: "tours",
    title: "Airport & Railway",
    description: "",
    image: "/images/railway-airport.jpg",
    href: "/services/AirportRailway",
  },
  {
    id: "attractions",
    title: "Corporate Clients",
    description: "",
    image: "/images/corporate-services.jpg",
    href: "/services/CorporateClients",
  },
  {
    id: "experiences",
    title: "Out Of Station",
    description: "",
    image: "/images/out-of-station.jpg",
    href: "/services/OutOfStation",
  },
  {
    id: "day-trips",
    title: "Local Delhi/NCR",
    description: "",
    image: "/images/large_delhi-tourism.webp",
    href: "/services/LocalDelhi/NCR",
  },
];

const CategoryCards: React.FC<CategoryCardsProps> = ({
  title = "Our Corporate Clients",
  subtitle = "Discover amazing activities tailored to your interests",
  categories = defaultCategories,
}) => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* Discover amazing activities tailored to your interests */}
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
