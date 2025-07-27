import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="glass-card rounded-full px-3 py-6 border border-portfolio-border/30">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-portfolio-accent"
                    : "text-portfolio-text-secondary hover:text-portfolio-accent"
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                {/* Dot indicator */}
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-portfolio-accent border-portfolio-accent scale-110"
                      : "border-portfolio-text-secondary group-hover:border-portfolio-accent group-hover:bg-portfolio-accent/20"
                  }`}
                />
                
                {/* Label on hover */}
                <span className="absolute right-full mr-4 px-3 py-1 bg-portfolio-card text-portfolio-text-primary text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-portfolio-border/30">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;