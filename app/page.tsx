import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import SalesJourney from "@/components/SalesJourney";
import SalesMotion from "@/components/SalesMotion";
import WhyChoose from "@/components/WhyChoose";
import ClientImpact from "@/components/ClientImpact";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SalesJourney />
      <FeaturesSection />
      <SalesMotion />
      <WhyChoose />
      <ClientImpact />
      <ContactCTA />
      <Footer />
    </>
  );
}

