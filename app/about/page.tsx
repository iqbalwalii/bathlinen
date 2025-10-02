import AboutHero from "../components/abouthero";
import Values from "../components/values";
// import Stats from "../components/stats";
import Timeline from "../components/timeline";
// import Team from "@/components/Team";
import CTA from "../components/cta";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <>
    <Navbar/>
    <main className="font-sans bg-white text-stone-950">
      <AboutHero />
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-10 my-4">
        <Values />
        {/* <Stats /> */}
        <Timeline />
        {/* <Team /> */}
        <CTA />
      </section>
    </main>
    <Footer/>
    </>
  );
}
