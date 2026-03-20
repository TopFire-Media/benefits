import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Comparison from "@/components/Comparison";
import Workflow from "@/components/Workflow";
import Concerns from "@/components/Concerns";
import Numbers from "@/components/Numbers";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#06060c" }}>
      <Navigation />
      <Hero />
      <div className="section-divider" />
      <Problem />
      <div className="section-divider" />
      <Solution />
      <div className="section-divider" />
      <Comparison />
      <div className="section-divider" />
      <Workflow />
      <div className="section-divider" />
      <Concerns />
      <div className="section-divider" />
      <Numbers />
      <div className="section-divider" />
      <CTA />
    </main>
  );
}
