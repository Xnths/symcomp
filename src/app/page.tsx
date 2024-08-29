import { HomeHeader } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <main className="bg-white h-full w-full">
      <HomeHeader />
      <div className="mt-[100px] h-full w-full">
        <HeroSection />
        <Title color="pink">Teste</Title>
      </div>
    </main>
  );
}
