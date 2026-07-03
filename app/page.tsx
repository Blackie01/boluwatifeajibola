import Expressions from "@/components/Expressions";
import SelectedResearch from "@/components/SelectedResearch";
import Publications from "@/components/Publications";
import AwardsAndAffiliations from "@/components/AwardsAndAffiliations";
import Testimonials from "@/components/Testimonials";
import StatsMarquee from "@/components/StatsMarquee";
import Affiliations from "@/components/Affiliations";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import Video from "@/components/Video";
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
      {/* <Affiliations /> */}
      {/* <Video />
      <Expressions />
      <SelectedResearch />
      <Publications />
      <Testimonials />
      <Affiliations />
      <Gallery /> */}
    </div>
  );
}
