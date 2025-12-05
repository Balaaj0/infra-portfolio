import { ArrowDown, Download, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const techTags = [
  "Azure",
  "Docker",
  "Kubernetes",
  "Linux",
  "Terraform",
  "CI/CD",
  "IaC",
  "GitHub Actions",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02]" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Terminal Prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <Terminal size={16} className="text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              ~/balaaj-khan
            </span>
            <span className="text-primary animate-pulse">_</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight">
            Infrastructure Engineer
            <br />
            <span className="gradient-text">focused on reliable,</span>
            <br />
            <span className="gradient-text">automated systems.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up stagger-1 max-w-2xl mx-auto">
            Building and maintaining cloud infrastructure on{" "}
            <span className="text-foreground">Azure</span>. Containerizing with{" "}
            <span className="text-foreground">Docker & Kubernetes</span>.
            Automating everything with{" "}
            <span className="text-foreground">CI/CD & IaC</span>. Running
            experiments in my homelab.
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-slide-up stagger-2">
            {techTags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View Projects
              <ArrowDown size={18} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium hover:bg-secondary hover:border-primary/30 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
