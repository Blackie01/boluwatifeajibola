import SelectedResearch from "@/components/SelectedResearch";
import Publications from "@/components/Publications";
import AwardsAndAffiliations from "@/components/AwardsAndAffiliations";
import Testimonials from "@/components/Testimonials";
import StatsMarquee from "@/components/StatsMarquee";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import AboutSnippet from "@/components/AboutSnippet";
import WorkGrid from "@/components/WorkGrid";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0C0C0C] overflow-x-clip">
      <HeroSection />
      <LogoStrip />
      <AboutSnippet />
      <WorkGrid />
      <SelectedResearch />
      <Publications />
      <AwardsAndAffiliations />
      <Testimonials />
      <StatsMarquee />
    </div>
  );
}
