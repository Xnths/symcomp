import { AboutUs } from "@/components/home/about-us";
import { Footer } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { Projects } from "@/components/home/projects";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <main className="bg-white h-full w-full">
      <HomeHeader />
      <div className="mt-[100px] h-full w-full">
        <HeroSection />
        <Projects />
        <AboutUs />
        <Footer />
      </div>
    </main>
  );
}
