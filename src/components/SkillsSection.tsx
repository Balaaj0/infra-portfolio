import { Cloud, Container, GitBranch, Network, Activity, Code2 } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud",
    skills: ["Azure", "AWS (basic)", "GCP (basic)"],
  },
  {
    icon: Code2,
    title: "Infrastructure as Code",
    skills: ["Terraform", "Bicep", "Ansible"],
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "Helm"],
  },
  {
    icon: GitBranch,
    title: "Automation & CI/CD",
    skills: ["GitHub Actions", "Azure DevOps", "GitLab CI"],
  },
  {
    icon: Network,
    title: "Networking & Security",
    skills: ["DNS", "Reverse Proxies", "Load Balancing", "VPNs", "Firewalls"],
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Loki"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tools and technologies I use to build and maintain reliable infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-glow p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <category.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
