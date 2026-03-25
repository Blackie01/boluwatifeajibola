import About from "@/components/About";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen dark:bg-black">
      <Hero/>
      {/* <About/> */}
      <Video/>
    </div>
  )
}
