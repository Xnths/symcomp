import Carousel from "./components/carousel";
import ProjectSection from "./components/project-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <h1>Symcomp</h1>
      <Carousel />
      <ProjectSection />
    </main>
  );
}