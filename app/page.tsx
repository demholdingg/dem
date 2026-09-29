import Hero from "@/components/Hero";
import About from "@/components/About";
import Subsidiaries from "@/components/Subsidiaries";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import OurPartners from "@/components/OurPartners";
import Iso from "@/components/Iso";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Subsidiaries />
      <Services />
      <OurPartners />
      <Iso />
      <Projects />
      {/* <CTA /> */}
    </>
  );
}
