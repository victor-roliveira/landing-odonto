import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Benefits />
        <HowItWorks />
        <FAQ />
        <CTA />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
