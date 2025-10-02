import { CheckCircle, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 mx-auto text-blue-400 mb-4" />,
    title: "Good Material",
    desc: "Our products are made from the finest materials, ensuring durability, comfort, and sustainability."
  },
  {
    icon: <Users className="w-8 h-8 mx-auto text-blue-400 mb-4" />,
    title: "Professional Expert",
    desc: "Our team of seasoned professionals brings decades of industry experience."
  },
  {
    icon: <Headphones className="w-8 h-8 mx-auto text-blue-400 mb-4" />,
    title: "Premium Support",
    desc: "10AM-6PM IST Weekdays\n10AM-5PM IST Saturday"
  },
];

export default function FeatureBoxes() {
  return (
    <section id="choose" >
      <h1 className=" pt-9  bg-gray-50 text-center text-2xl sm:text-4xl" >Why Choose Us ?</h1>
      <h1 className="text-amber-400 bg-gray-50 text-center text-2xl sm:text-4xl" >Unparalleled Craftsmanship, <br/> Unmatched Comfort, Always</h1>
      <p className="text-center text-stone-600 bg-gray-50">Our dedication to excellence ensures that each product is crafted with the utmost care and precision, providing unparalleled comfort and luxury.</p>
      <div className="px-6 md:px-12 py-16 bg-gray-50 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">

      {features.map((f, i) => (
          <div key={i} className="p-6 rounded-xl shadow-md bg-white">
          {f.icon}
          <h4 className="text-lg sm:text-xl font-semibold mb-2">{f.title}</h4>
          <p className="whitespace-pre-line text-gray-600 text-sm sm:text-base">{f.desc}</p>
        </div>
      ))}
      </div>
    </section>
  );
}
