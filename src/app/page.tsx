import { AboutUs } from "@/components/home/about-us";
import { Footer } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { Projects } from "@/components/home/projects";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <main className="bg-white h-screen">
      <div className="grid grid-rows-[auto,1fr] h-screen">
        <HomeHeader />
        <div className="h-full w-full overflow-auto">
          <HeroSection />
          <Projects />
          <AboutUs />
          <Footer />
        </div>
      </div>
    </main>
  );
}
