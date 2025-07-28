import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Calendar } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor in Artificial Intelligence and Machine Learning",
      institution: "NALANDA COLLEGE OF ENGINEERING",
      year: "2024-2028",
      highlights: ["Web Development", "Data Structures", "Software Engineering"]
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Tech Startup / Freelance",
      period: "2024-Present",
      highlights: ["MERN Stack Development", "AI Integration", "Blockchain Exploration"]
    }
  ];

  return (
    <section id="resume" className="py-16 md:py-20 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text-primary mb-4">
          Resume & <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-portfolio-text-secondary text-base md:text-lg mb-6 md:mb-8 px-4">
          Download my complete resume or view a quick snapshot of my background
        </p>
        
        <Button 
          size="lg"
          className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-portfolio-card font-semibold px-6 md:px-8 py-2 md:py-3 glow-effect w-full sm:w-auto"
          onClick={() => window.open('https://drive.google.com/file/d/1Ku0JVvz4AVJJ53EO70jqEVCE4g_axK1p/view?usp=drivesdk', '_blank')}
        >
          <Download className="w-5 h-5 mr-2" />
          Resume
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-2 md:p-3 bg-portfolio-accent/10 rounded-lg">
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-portfolio-accent" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-portfolio-text-primary">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="glass-card border-portfolio-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-portfolio-text-primary">
                    {edu.degree}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-portfolio-text-secondary">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-portfolio-accent font-medium mb-3">
                    {edu.institution}
                  </p>
                  <div className="space-y-1">
                    {edu.highlights.map((highlight, i) => (
                      <p key={i} className="text-sm text-portfolio-text-secondary">
                        • {highlight}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-2 md:p-3 bg-portfolio-accent/10 rounded-lg">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-portfolio-accent" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-portfolio-text-primary">Experience</h3>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="glass-card border-portfolio-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-portfolio-text-primary">
                    {exp.role}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-portfolio-text-secondary">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-portfolio-accent font-medium mb-3">
                    {exp.company}
                  </p>
                  <div className="space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <p key={i} className="text-sm text-portfolio-text-secondary">
                        • {highlight}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;