import { User, MapPin, Coffee } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-secondary/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="card-glow p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <User size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Balaaj Khan
                </h3>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <MapPin size={14} />
                  Infrastructure Engineer
                </p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an Infrastructure Engineer with a focus on cloud platforms,
                containerization, and automation. My day-to-day involves
                building and maintaining systems that need to be reliable,
                scalable, and easy to operate.
              </p>
              <p>
                Most of my work centers around{" "}
                <span className="text-foreground">Azure</span>, where I design
                infrastructure using{" "}
                <span className="text-foreground">Terraform</span> and{" "}
                <span className="text-foreground">Bicep</span>. I containerize
                applications with{" "}
                <span className="text-foreground">Docker</span> and orchestrate
                them on{" "}
                <span className="text-foreground">Kubernetes</span>. CI/CD
                pipelines are a given—I prefer{" "}
                <span className="text-foreground">GitHub Actions</span> but work
                with Azure DevOps and GitLab CI as well.
              </p>
              <p>
                Outside of work, I run a homelab where I experiment with
                self-hosting, monitoring stacks, and new technologies. It's
                where I break things safely and learn what works at scale. I
                enjoy the process of making systems observable, automated, and
                resilient.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
              <Coffee size={16} className="text-primary" />
              <span>Currently learning: Service mesh architectures & eBPF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
