import Hero from "./components/Hero";
import FeatureShowcase from "./components/sections/FeatureShowcase";
import TrumpismExamples from "./components/sections/TrumpismExamples";
import InstallationGuide from "./components/sections/InstallationGuide";
import Footer from "./components/Footer";
import SectionDivider from "./components/shared/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        {/* Wave divider: Cream hero → Blue feature showcase */}
        <SectionDivider color="blue" bgColor="cream" />

        <FeatureShowcase />

        {/* Wave divider: Blue feature showcase → Cream trumpism examples */}
        <SectionDivider color="cream" bgColor="blue" />

        <TrumpismExamples />

        {/* Wave divider: Cream trumpism → Red installation */}
        <SectionDivider color="red" bgColor="cream" />

        <InstallationGuide />

        {/* Wave divider: Red installation → Blue footer */}
        <SectionDivider color="blue" bgColor="red" />
      </main>
      <Footer />
    </>
  );
}