import Challengs from "@/components/sections/Challengs";
import ImpactinSlum from "@/components/sections/ImpactinSlum";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import DigitalSkillsCenter from "@/components/sections/DigitalSkillsCenter";
import OurAsk from "@/components/sections/OurAsk";
import OurImpact from "@/components/sections/OurImpact";
import Solution from "@/components/sections/Solution";
import About from "@/components/sections/About";

import MarketResearch from "@/components/sections/MarketResearch";
import BecomeDonor from "@/components/sections/BecomeDonor";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Challengs />
      <Solution />
      <MarketResearch />
      <BecomeDonor />
      <ImpactinSlum />
      <OurAsk />
      <DigitalSkillsCenter />
      <OurImpact />
      <Contact />
    </main>
  );
}
