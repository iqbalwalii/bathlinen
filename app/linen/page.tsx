// app/products/page.tsx
import Navbar from "../components/navbar";
import ProductCard from "../components/productcard";

const products = [
  {
    image: "/prod1.jpg",
    title: "Luxury Linen Sheet Set",
    description: "Soft, breathable, and perfect for all seasons.",
  },
  {
    image: "/prod2.jpg",
    title: "Premium Cotton Towels",
    description: "Ultra-absorbent towels made from 100% cotton.",
  },
  {
    image: "/prod3.jpg",
    title: "Elegant Table Runner",
    description: "Handcrafted with attention to detail.",
  },
  {
    image: "/prod1.jpg",
    title: "Luxury Linen Sheet Set",
    description: "Soft, breathable, and perfect for all seasons.",
  },
  {
    image: "/prod2.jpg",
    title: "Premium Cotton Towels",
    description: "Ultra-absorbent towels made from 100% cotton.",
  },
  {
    image: "/prod3.jpg",
    title: "Elegant Table Runner",
    description: "Handcrafted with attention to detail.",
  },
  {
    image: "/prod1.jpg",
    title: "Luxury Linen Sheet Set",
    description: "Soft, breathable, and perfect for all seasons.",
  },
  {
    image: "/prod2.jpg",
    title: "Premium Cotton Towels",
    description: "Ultra-absorbent towels made from 100% cotton.",
  },
  {
    image: "/prod3.jpg",
    title: "Elegant Table Runner",
    description: "Handcrafted with attention to detail.",
  },
  // add more as needed
];

export default function ProductsPage() {
  return (
    <>
        <Navbar/>
    <section className="px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        Our Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {products.map((product, i) => (
            <ProductCard
            key={i}
            image={product.image}
            title={product.title}
            description={product.description}
            />
        ))}
      </div>
    </section>
            </>
  );
}
