import Hero from "./components/Hero";
import FeatureShowcase from "./components/sections/FeatureShowcase";
import TrumpismExamples from "./components/sections/TrumpismExamples";
import InstallationGuide from "./components/sections/InstallationGuide";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-4">
        <FeatureShowcase />
        <TrumpismExamples />
        <InstallationGuide />
      </main>
      <Footer />
    </>
  );
}