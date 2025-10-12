// app/products/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProductCard from "../components/productcard";

const products = [
  {
    image: "/products/400_Sateen_Gold_Duvet_Set_Product-_1.jpg",
    title: "Sateen Gold Duvet Set",
    description: "Elegant sateen duvet set for luxurious comfort.",
  },
  {
    image: "/products/Back-to-school-Bundle.jpg",
    title: "Back to School Bundle",
    description: "Perfect starter bundle for dorms and new beginnings.",
  },
  {
    image: "/products/BOUNDRY_ROBE_BUNDLE_PINK_GREY1.jpg",
    title: "Boundry Robe Bundle Pink Grey",
    description: "Cozy robe set in soft pink and grey hues.",
  },
  {
    image: "/products/Brixton Shower mat.jpg",
    title: "Brixton Shower Mat",
    description: "Durable shower mat with quick-dry texture.",
  },
  {
    image: "/products/Classic Percale Duvet Set.jpg",
    title: "Classic Percale Duvet Set",
    description: "Crisp, cool, and lightweight duvet for daily use.",
  },
  {
    image: "/products/Cosy_Brixton_rones_6eb3b01f-111a-48da-a868-60a4b26e1cc9.webp",
    title: "Cosy Brixton Robe Set",
    description: "Plush robe and accessories for ultimate comfort.",
  },
  {
    image: "/products/cuddle wrap and mitt set.jpg",
    title: "Cuddle Wrap and Mitt Set",
    description: "Gentle baby wrap and mittens in premium cotton.",
  },
  {
    image: "/products/Deep Pile Rug.jpg",
    title: "Deep Pile Rug",
    description: "Soft, deep-pile rug that feels great underfoot.",
  },
  {
    image: "/products/DitsyGingham_Plum_DuvetSet_Product.webp",
    title: "Ditsy Gingham Plum Duvet Set",
    description: "Patterned duvet set adding charm to your room.",
  },
  {
    image: "/products/Eltham_Cushion.jpg",
    title: "Eltham Cushion",
    description: "Modern cushion design with rich fabric texture.",
  },
  {
    image: "/products/Feather_Down_Duvet.webp",
    title: "Feather & Down Duvet",
    description: "Premium down filling for exceptional warmth.",
  },
  {
    image: "/products/Flannel_Marl_Grey_Duvet_Set_Product_1.webp",
    title: "Flannel Marl Grey Duvet Set",
    description: "Warm and cozy flannel duvet for cold nights.",
  },
  {
    image: "/products/Flannel_Stripe_Grey_Duvet_Set_1.webp",
    title: "Flannel Stripe Grey Duvet Set",
    description: "Classic striped design with soft flannel feel.",
  },
  {
    image: "/products/Hooded Bath Towel.jpg",
    title: "Hooded Bath Towel",
    description: "Soft hooded towel to keep your baby warm.",
  },
  {
    image: "/products/Jaipur_Throw_Garnet.jpg",
    title: "Jaipur Throw Garnet",
    description: "Vibrant throw blanket inspired by Jaipur art.",
  },
  {
    image: "/products/Reversible Pedestal Mat.jpg",
    title: "Reversible Pedestal Mat",
    description: "Two-in-one pedestal mat for versatility.",
  },
  {
    image: "/products/towel bundles.jpg",
    title: "Towel Bundles",
    description: "Complete towel bundle for every bathroom need.",
  },
  {
    image: "/products/Trellis Bamboo Cotton Towels.jpg",
    title: "Trellis Bamboo Cotton Towels",
    description: "Eco-friendly towels with bamboo-cotton blend.",
  },
  {
    image: "/products/VICTORIABLUEBEDPSREAD_1.webp",
    title: "Victoria Blue Bedspread",
    description: "Elegant blue bedspread with timeless design.",
  },
  {
    image: "/products/Waffle Robe Lounger Gift Set.jpg",
    title: "Waffle Robe Lounger Gift Set",
    description: "Stylish lounge robe set for relaxing at home.",
  },
  {
    image: "/products/Waffle Robe.jpg",
    title: "Waffle Robe",
    description: "Lightweight robe with soft waffle texture.",
  },
  {
    image: "/products/Warmket_Essential-Hollowfibre.webp",
    title: "Warmtek Essential Hollowfibre Pillow Pair",
    description: "Plush pillow pair with hypoallergenic filling.",
  },
    {
    image: "/products/200_Percale_Blue_Flat_Sheet_Product-_1.webp",
    title: "200 Thread Count Percale Sheet",
    description: "Crisp, cool and breathable cotton for a smooth sleep experience."
  },
  {
    image: "/products/Arabella_Pillow-Cameo.webp",
    title: "Arabella Pillow - Cameo",
    description: "Elegant pillow with a delicate floral pattern for a charming look."
  },
  {
    image: "/products/Austin-Roses_Lifestyle_Side.webp",
    title: "Austin Roses Bedding",
    description: "Floral-themed bedding set that brings a touch of nature indoors."
  },
  {
    image: "/products/BalmoralNavyDuvetSet.webp",
    title: "Balmoral Navy Duvet Set",
    description: "Classic navy bedding for a timeless and sophisticated bedroom aesthetic."
  },
  {
    image: "/products/ELTHAM_BUNDLE.webp",
    title: "Eltham Bundle",
    description: "Complete bedding bundle in a sleek, modern design."
  },
  {
    image: "/products/FITTEDSHEET_FOLDED_ORGANIC_RETREAT_Clay.webp",
    title: "Fitted Sheet - Organic Retreat (Clay)",
    description: "Soft and breathable organic sheet in a calming clay color."
  },
  {
    image: "/products/Gingham_Blue_DuvetSet_Product.webp",
    title: "Gingham Blue Duvet Set",
    description: "Classic gingham patterned bedding in a calming blue tone."
  },
  {
    image: "/products/Gingham_Blue_Lifestyle_End_2.jpg",
    title: "Gingham Blue Lifestyle Bedding",
    description: "Stylish and cozy blue gingham bedding for modern comfort."
  },
  {
    image: "/products/GinghamRuffle_Red_Lifestyle_End_2.webp",
    title: "Gingham Ruffle Red Bedding",
    description: "Charming red ruffled gingham bedding that adds warmth and personality."
  },
  {
    image: "/products/HAREWOOD_CHALK_BLUE_PILLOWSHAM_1.webp",
    title: "Harewood Pillow Sham - Chalk Blue",
    description: "Beautifully textured pillow sham in a serene chalk blue."
  },
  {
    image: "/products/HAREWOODCHALKBLUETHROW_1.webp",
    title: "Harewood Throw - Chalk Blue",
    description: "Cozy and stylish throw to accent your living space or bedroom."
  },
  {
    image: "/products/Hatton_Pillow-Cameo.webp",
    title: "Hatton Pillow - Cameo",
    description: "Stylish floral pillow that adds elegance to any room."
  },
  {
    image: "/products/JAIPUR_BUNDLE.webp",
    title: "Jaipur Bedding Bundle",
    description: "Exotic, richly colored bedding set inspired by traditional patterns."
  },
  {
    image: "/products/Jaipur_Peacock_Lifestyle-504945.webp",
    title: "Jaipur Peacock Bedding",
    description: "Vibrant peacock design for a bold and luxurious bedroom style."
  },
  {
    image: "/products/King_Pillowcase_Pairs_Organic_Retreat_Clay.webp",
    title: "King Pillowcases - Organic Retreat (Clay)",
    description: "Smooth and sustainable pillowcases in earthy clay tone."
  },
  {
    image: "/products/LAUNDEREDCOTTONCHALKBLUEBEDSPREAD_1.webp",
    title: "Laundered Cotton Bedspread - Chalk Blue",
    description: "Lightweight, laundered cotton bedspread in a soft blue tone."
  },
  {
    image: "/products/Lisbon_Throw_Grey_Product-_1.webp",
    title: "Lisbon Throw - Grey",
    description: "Soft and textured grey throw for a cozy touch."
  },
  {
    image: "/products/Luxury-Microfibre_Duvet_Product-_1.webp",
    title: "Luxury Microfibre Duvet",
    description: "Ultra-soft and insulating duvet for year-round comfort."
  },
  {
    image: "/products/Madeira_Forest_Product_1.webp",
    title: "Madeira Throw - Forest",
    description: "Earthy green throw with a soft texture and elegant design."
  },
  {
    image: "/products/Metropolitan_White_Lifestyle.webp",
    title: "Metropolitan White Bedding",
    description: "Crisp and clean white bedding for a modern minimalist look."
  },
  {
    image: "/products/Porto-Throw.webp",
    title: "Porto Throw",
    description: "Casual and stylish throw, perfect for layering."
  },
  {
    image: "/products/Premium sateen pillowcases.webp",
    title: "Premium Sateen Pillowcases",
    description: "Luxuriously smooth pillowcases with a subtle sheen."
  },
  {
    image: "/products/Premium_Sateen_Racing_Green_Duvet_Set.webp",
    title: "Premium Sateen Duvet Set - Racing Green",
    description: "Rich green sateen bedding for a bold and luxurious statement."
  },
  {
    image: "/products/Scallop_Matcha_Duvet_Set_Product_1.webp",
    title: "Scallop Duvet Set - Matcha",
    description: "Delicate scallop edge and calming green hue for serene bedrooms."
  },
  {
    image: "/products/SCALLOP_SHOP_THE_LOOK.webp",
    title: "Scallop Bedding - Lifestyle Look",
    description: "Complete look with scalloped details for cozy sophistication."
  },
  {
    image: "/products/Superior-Soft-Touch_Duvet.webp",
    title: "Superior Soft Touch Duvet",
    description: "Exceptionally soft duvet with a plush, cloud-like feel."
  },
  {
    image: "/products/VICTORIABLUEBEDPSREAD_1.webp",
    title: "Victoria Bedspread - Blue",
    description: "Regal blue bedspread for timeless bedroom elegance."
  }
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
    <Footer/>
            </>
  );
}
