import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Vansh-srivastava007",
      handle: "Vansh-srivastava007"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vansh-srivastava-devloper007",
      handle: "vansh-srivastava-devloper007"
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 opacity-25 flex items-center justify-center">
        <div 
          dangerouslySetInnerHTML={{
            __html: '<spline-viewer url="https://prod.spline.design/9FcelD7PciXTdj8K/scene.splinecode" style="width: 100%; height: 100%; min-height: 400px; transform: translateY(-15px);" loading="lazy"></spline-viewer>'
          }}
          className="w-full h-full"
        />
        {/* Watermark overlay - Enhanced coverage */}
        <div className="absolute bottom-0 right-0 w-44 h-20 bg-gradient-to-tl from-portfolio-bg via-portfolio-bg/95 to-portfolio-bg/70 backdrop-blur-lg z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-16 bg-gradient-to-t from-portfolio-bg via-portfolio-bg/90 to-transparent z-10"></div>
        <div className="absolute bottom-1 right-1 w-40 h-14 bg-portfolio-bg/95 backdrop-blur-xl z-10 rounded-lg"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text-primary mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-portfolio-text-secondary text-base md:text-lg max-w-2xl mx-auto px-4">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Drop me a message and let's build something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <Card className="glass-card border-portfolio-border">
          <CardHeader>
            <CardTitle className="text-2xl text-portfolio-text-primary flex items-center gap-3">
              <div className="p-2 bg-portfolio-accent/10 rounded-lg">
                <Mail className="w-5 h-5 text-portfolio-accent" />
              </div>
              Send Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action="https://formsubmit.co/vanshsrivastava12345@gmail.com" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="bg-portfolio-card border-portfolio-border text-portfolio-text-primary focus:border-portfolio-accent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-portfolio-card border-portfolio-border text-portfolio-text-primary focus:border-portfolio-accent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="bg-portfolio-card border-portfolio-border text-portfolio-text-primary focus:border-portfolio-accent resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-portfolio-card font-semibold py-3 glow-effect"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Social Links & Info */}
        <div className="space-y-8">
          <Card className="glass-card border-portfolio-border">
            <CardHeader>
              <CardTitle className="text-xl text-portfolio-text-primary">
                Connect on Social
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-card border-portfolio-border hover:border-portfolio-accent/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-portfolio-accent/10 rounded-lg group-hover:bg-portfolio-accent/20 transition-colors">
                      <social.icon className="w-5 h-5 text-portfolio-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-portfolio-text-primary group-hover:text-portfolio-accent transition-colors">
                        {social.name}
                      </p>
                      <p className="text-sm text-portfolio-text-secondary">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-portfolio-border">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-portfolio-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-portfolio-accent" />
                </div>
                <h3 className="font-semibold text-portfolio-text-primary mb-2">Direct Email</h3>
                <a 
                  href="mailto:vanshsrivastava12345@gmail.com"
                  className="text-portfolio-accent hover:text-portfolio-accent/80 transition-colors underline"
                >
                  vanshsrivastava12345@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;