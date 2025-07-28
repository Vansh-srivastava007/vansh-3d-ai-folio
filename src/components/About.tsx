import { Badge } from "@/components/ui/badge";
const About = () => {
  const skills = [
  // Front-End
  "HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS",
  // Back-End  
  "Node.js", "Express.js", "GraphQL", "JWT", "OAuth2",
  // Databases
  "MongoDB",
  // DevOps & Hosting
  "Git & GitHub", "Docker",
  // AI & Automation
  "Python", "OpenAI", "LangChain", "n8n", "Zapier",
  // Blockchain & Web3
  "Solidity", "Ethers.js", "Web3.js", "Polygon", "Ethereum"];
  return <section id="about" className="py-16 md:py-20 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text-primary mb-6 md:mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-portfolio-text-secondary text-base md:text-lg leading-relaxed">
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
        <div className="glass-card rounded-xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-portfolio-text-primary mb-4 md:mb-6">
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {skills.map(skill => <Badge key={skill} variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20 hover:bg-portfolio-accent/20 transition-colors p-1.5 md:p-2 text-center justify-center text-xs">
                {skill}
              </Badge>)}
          </div>

          {/* Additional Stats */}
          <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-portfolio-border">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-portfolio-accent">2+</div>
              <div className="text-xs md:text-sm text-portfolio-text-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              
              <div className="text-xs md:text-sm text-portfolio-text-secondary">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;