import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Index;
