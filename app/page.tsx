import About from "@/components/About";
import Expressions from "@/components/Expressions";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen dark:bg-black overflow-hidden">
      <Hero/>
      {/* <About/> */}
      <Video/>
      <Expressions/>
    </div>
  )
}
