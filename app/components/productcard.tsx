// components/ProductCard.tsx
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price?: string; // optional, in case you don’t want to show pricing now
}

export default function ProductCard({ image, title, description, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-1">{description}</p>

        {price && (
          <p className="text-indigo-600 font-bold mt-3">{price}</p>
        )}

        {/* <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
          View Details
        </button> */}
      </div>
    </div>
  );
}
