import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Calendar } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor in Artificial Intelligence and Machine Learning",
      institution: "Your University Name",
      year: "2020-2024",
      highlights: ["Web Development", "Data Structures", "Software Engineering"]
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Tech Startup / Freelance",
      period: "2022-Present",
      highlights: ["MERN Stack Development", "AI Integration", "Blockchain Exploration"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Previous Company",
      period: "2021-2022", 
      highlights: ["React Development", "UI/UX Implementation", "Team Collaboration"]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-portfolio-text-primary mb-4">
          Resume & <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-portfolio-text-secondary text-lg mb-8">
          Download my complete resume or view a quick snapshot of my background
        </p>
        
        <Button 
          size="lg"
          className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-portfolio-card font-semibold px-8 py-3 glow-effect"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume (PDF)
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-portfolio-accent/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-portfolio-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-portfolio-text-primary">Education</h3>
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
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-portfolio-accent/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-portfolio-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-portfolio-text-primary">Experience</h3>
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