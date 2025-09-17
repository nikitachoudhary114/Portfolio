import Experience from "@/components/Expereince";
import ExtraCurricular from "@/components/ExtraCurriculr";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import TimelineLine from "@/components/TimelineLine";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <IntroSection />
      <TechStack />
      <Experience />
      <Projects />
      <ExtraCurricular />
      <Footer />
    </div>
  );
}
