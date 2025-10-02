import Navbar from "./components/navbar";
import About from "./components/aboutus";
import Hero from "./components/hero";
import Help from "./components/help";
import FeatureBoxes from "./components/featureboxes";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Help />
      <FeatureBoxes />
      <Footer/>
    </main>
  );
}
