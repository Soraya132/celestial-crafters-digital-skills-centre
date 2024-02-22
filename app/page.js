import Challengs from "@/components/Challengs";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Insights from "@/components/Insight";
import OurAsk from "@/components/OurAsk";
import Solution from "@/components/Solution";
import About from "@/sections/About";

import GetStarted from "@/sections/GetStarted";

export default function Home() {
  return (
   <main  className="overflow-hidden">

   <Hero/>
   <About/>
   <Challengs/>
   <Solution/>
   <GetStarted/>
   <Feedback/>
   <OurAsk/>
   <Insights/>
     
   
   </main>
  );
}
