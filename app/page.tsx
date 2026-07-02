import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}