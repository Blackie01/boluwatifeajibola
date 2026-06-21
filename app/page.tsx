import Expressions from "@/components/Expressions";
import SelectedResearch from "@/components/SelectedResearch";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";
import Affiliations from "@/components/Affiliations";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Video from "@/components/Video";
import LightUpText from "@/components/LightUpText";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0C0C0C] overflow-x-clip">
      <HeroSection />
      <LightUpText
        styles="min-h-[100vh]"
        text="Hello, I am Boluwatife Ajibola. Defined by the four pillars of Research, Impact, Creativity, and Activism, my work traces the journey of ideas from polling sites to the performing arts. Whether I am consulting on digital humanitarian strategies or performing spoken word, my mission is to harmonize civic action with creative practice to spark meaningful social change."
      />
      <Video />
      <Expressions />
      <SelectedResearch />
      <Publications />
      <Testimonials />
      <Affiliations />
      <Gallery />
      <Footer />
    </div>
  );
}
