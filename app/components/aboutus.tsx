import { Gem } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col md:grid md:grid-cols-2 gap-8 px-6 md:px-12 py-16 items-center">
      {/* Image */}

      {/* Text */}
      <div className="mt-6 md:mt-0">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">About Us</h3>
        <p className="text-gray-700 text-sm sm:text-base">
          BED & BATH LINEN introduces itself as the leading manufacturers & suppliers of an extensive range of linen items that are designed to spruce up your environments. We are a well-established Textile Merchandising Firm and are looking into the requirements of Bed, Bath, F&B; Linen and Uniform Sarees of all leading Hotels, Hospitals, Clubs, Restaurants, Guest Houses & Export Companies all over India & abroad.
        </p>
        <p className="text-gray-700 text-sm sm:text-base">We are a company which has perfected the art of transforming our client’s visual imagery into reality. We have changed the dynamics of this business by making our end users quest for happiness, a celebration of life. Our products are on par with international standards of quality and match the best in the world. Our Unique Selling Point is the uniqueness of design and a breathtaking finish which bears our signature style. Whether you prefer rich textures, or simple lines you’ll always find something with us to complement your environment. Exquisite designs and attractive embroidery mark our products and separate them from the common, average stuff found elsewhere.</p>
      </div>
      <div className="relative">
        <img
          src="/Bed-Linen-2.jpg"
          alt="Bed with Linen"
          className="rounded-2xl shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
        />
        <div className="absolute bottom-4 right-4 bg-white p-3 sm:p-4 rounded-xl shadow-md max-w-[80%] sm:max-w-[250px] text-sm">
          <div className="flex flex-col justify-center items-center">
          <Gem className="w-7 h-7 sm:w-6 sm:h-6 mb-2 text-sky-300 justify-center" />
          <p className="text-center">
            <span className="font-bold text-lg text-center text-amber-400">We strongly value</span>  <br/>The Quality of
            our products and are Committed to exceeding expectations with every
            detail.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
