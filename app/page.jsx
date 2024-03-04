import AboutUs from "./components/about-us";
import Faq from "./components/faq/faq";
import Carousel from "./components/carousel";
import ProjectSection from "./components/project-section";
import faqData from "./components/faq/FAQ.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen gap-10 bg-gray-50">
      <h1>Symcomp</h1>
      <Carousel />
      <ProjectSection />
      <AboutUs />
      <Faq items={faqData}/>
    </main>
  );
}