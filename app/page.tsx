import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { FeaturesBento } from "@/components/sections/features-bento";
import { AgentsGrid } from "@/components/sections/agents-grid";
import { Installation } from "@/components/sections/installation";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <FeaturesBento />
      <AgentsGrid />
      <Installation />
      <Footer />
    </main>
  );
}
