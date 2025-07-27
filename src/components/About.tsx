import { Badge } from "@/components/ui/badge";
const About = () => {
  const skills = ["Node.js", "Express", "React", "MongoDB", "Three.js", "Spline", "Solidity (basic)"];
  return <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* About Text */}
        <div>
          <h2 className="text-4xl font-bold text-portfolio-text-primary mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="space-y-6 text-portfolio-text-secondary text-lg leading-relaxed">
            <p>
              I'm a passionate MERN stack developer with a deep love for creating seamless, 
              full-stack applications using JavaScript, Node.js, and React. My journey in 
              web development has been driven by curiosity and the constant desire to build 
              solutions that make a real impact.
            </p>
            
            <p>
              Currently, I'm exploring the fascinating world of AI automation, building 
              intelligent workflows that streamline development processes. I'm also diving 
              into blockchain development with Solidity, working on toy projects that help 
              me understand the decentralized future of technology.
            </p>
          </div>
        </div>

        {/* Skills Callout */}
        <div className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map(skill => <Badge key={skill} variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20 hover:bg-portfolio-accent/20 transition-colors p-3 text-center justify-center">
                {skill}
              </Badge>)}
          </div>

          {/* Additional Stats */}
          <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-portfolio-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-portfolio-accent">2+</div>
              <div className="text-sm text-portfolio-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              
              <div className="text-sm text-portfolio-text-secondary">Multiple 
Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;