import Hero from "@/components/Hero";
import About from "@/sections/About";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      {/*
            <Insights/>
            <Explore/>
             <GetStarted/>
            <Feedback/> */}
    </main>
  );
}
