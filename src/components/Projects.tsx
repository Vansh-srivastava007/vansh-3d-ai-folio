import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Construction, GitBranch, ExternalLink } from "lucide-react";

const Projects = () => {
  // Placeholder project cards
  const placeholderProjects = [
    {
      title: "SaaS Application",
      description: "Cloud-based software solution with MERN stack",
      tags: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Blockchain DApp",
      description: "Exploring decentralized applications with Solidity",
      tags: ["Solidity", "Web3", "React"],
    },
    {
      title: "E-commerce App",
      description: "Full-stack e-commerce platform with MERN stack",
      tags: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-portfolio-text-primary mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
          No projects yet—coming soon! I'm currently working on some exciting projects 
          that will showcase my skills in MERN stack, AI automation, and blockchain development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderProjects.map((project, index) => (
          <Card key={index} className="glass-card border-portfolio-border hover:border-portfolio-accent/50 transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <GitBranch className="w-6 h-6 text-portfolio-accent" />
                <Badge variant="outline" className="border-orange-500/30 text-orange-400 bg-orange-500/10">
                  <Construction className="w-3 h-3 mr-1" />
                  Under Construction
                </Badge>
              </div>
              <CardTitle className="text-portfolio-text-primary group-hover:text-portfolio-accent transition-colors">
                {project.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-portfolio-text-secondary mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant="secondary"
                    className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-portfolio-text-secondary hover:text-portfolio-accent transition-colors text-sm opacity-50 cursor-not-allowed">
                  <GitBranch className="w-4 h-4" />
                  Code (Soon)
                </button>
                <button className="flex items-center gap-2 text-portfolio-text-secondary hover:text-portfolio-accent transition-colors text-sm opacity-50 cursor-not-allowed">
                  <ExternalLink className="w-4 h-4" />
                  Demo (Soon)
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Coming Soon Message */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
          <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-pulse"></div>
          <span className="text-portfolio-text-secondary">
            More projects launching soon...
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;