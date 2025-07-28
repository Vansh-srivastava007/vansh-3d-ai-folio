import { Button } from "@/components/ui/button";
import vanshHeadshot from "@/assets/vansh-headshot.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-portfolio-card to-portfolio-bg opacity-90"></div>
      
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div 
          dangerouslySetInnerHTML={{
            __html: '<spline-viewer url="https://prod.spline.design/GYwhGk0jMtJYbBwK/scene.splinecode" style="width: 100%; height: 100%; min-height: 300px;" loading="lazy"></spline-viewer>'
          }}
          className="w-full h-full sm:scale-100 scale-110 sm:translate-y-0 translate-y-4"
        />
        {/* Watermark overlay - Enhanced coverage */}
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-gradient-to-tl from-portfolio-bg via-portfolio-bg/95 to-portfolio-bg/60 backdrop-blur-lg z-10"></div>
        <div className="absolute bottom-1 right-1 w-36 h-12 bg-portfolio-bg/90 backdrop-blur-md z-10 rounded-md"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Profile Image - Mobile Responsive */}
        <div className="mb-6 md:mb-8">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden glass-card glow-effect">
            <img 
              src="/lovable-uploads/b92b2639-1fd0-4891-a2c3-d37578439a0a.png" 
              alt="Vansh Srivastava"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name - Mobile Responsive */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight">
          <span className="text-gradient">VANSH</span>
          <br />
          <span className="text-portfolio-text-primary">SRIVASTAVA</span>
        </h1>

        {/* Tagline - Mobile Responsive */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-portfolio-text-secondary mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          MERN Stack Developer | Building with AI Automation | Exploring Blockchain Development
        </p>

        {/* CTA Buttons - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <Button 
            size="lg" 
            className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-portfolio-card font-semibold px-6 md:px-8 py-2 md:py-3 glow-effect w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-card px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;