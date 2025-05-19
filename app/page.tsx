import Hero from "./components/Hero";
import FeatureShowcase from "./components/sections/FeatureShowcase";
import TrumpismExamples from "./components/sections/TrumpismExamples";
import InstallationGuide from "./components/sections/InstallationGuide";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4">
        <Hero />
        <FeatureShowcase />
        <TrumpismExamples />
        <InstallationGuide />
      </main>
      <Footer />
    </>
  );
}