import { Button } from "@/components/ui/button";
import vanshHeadshot from "@/assets/vansh-headshot.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-portfolio-card to-portfolio-bg opacity-90"></div>
      
      {/* 3D Scene Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 border-2 border-dashed border-portfolio-border rounded-lg flex items-center justify-center">
          <div className="text-center text-portfolio-text-secondary">
            <div className="text-6xl mb-4">🎮</div>
            <p className="text-sm">Spline 3D Scene</p>
            <p className="text-xs mt-1">Embed your iframe here</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden glass-card glow-effect">
            <img 
              src="/lovable-uploads/b92b2639-1fd0-4891-a2c3-d37578439a0a.png" 
              alt="Vansh Srivastava"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">VANSH</span>
          <br />
          <span className="text-portfolio-text-primary">SRIVASTAVA</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-portfolio-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
          MERN Stack Developer | Building with AI Automation | Exploring Blockchain Development
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-portfolio-card font-semibold px-8 py-3 glow-effect"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-card px-8 py-3"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;