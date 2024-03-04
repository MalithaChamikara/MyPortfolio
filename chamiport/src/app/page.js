import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212 mx-auto px-12 py-6">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <Header />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
