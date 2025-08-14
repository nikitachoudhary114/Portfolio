import Experience from "@/components/Expereince";
import ExtraCurricular from "@/components/ExtraCurriculr";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    
      <IntroSection />
      <Experience />
      <Projects />
      <ExtraCurricular/>
      <Footer/>
    </div>
  );
}
