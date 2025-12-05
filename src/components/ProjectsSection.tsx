import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Azure CI/CD Pipeline",
    description:
      "End-to-end CI/CD pipeline for containerized applications using Azure DevOps. Includes automated testing, security scanning, and blue-green deployments to AKS.",
    tags: ["Azure DevOps", "AKS", "Docker", "Terraform"],
    github: "#",
    caseStudy: "#",
  },
  {
    title: "Self-Hosted Monitoring Stack",
    description:
      "Complete observability solution with Prometheus, Grafana, and Loki. Monitors infrastructure metrics, application logs, and provides alerting via PagerDuty.",
    tags: ["Prometheus", "Grafana", "Loki", "Docker Compose"],
    github: "#",
    caseStudy: "#",
  },
  {
    title: "Multi-Tier Web App on Azure",
    description:
      "Containerized web application with PostgreSQL backend deployed on Azure. Infrastructure provisioned entirely with Terraform and secured with Azure AD.",
    tags: ["Terraform", "Azure", "PostgreSQL", "Docker"],
    github: "#",
    caseStudy: "#",
  },
  {
    title: "GitOps with ArgoCD",
    description:
      "Kubernetes deployment automation using ArgoCD and Helm charts. All infrastructure changes flow through Git with automated rollbacks on failure.",
    tags: ["Kubernetes", "ArgoCD", "Helm", "GitHub Actions"],
    github: "#",
    caseStudy: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Infrastructure and automation projects that showcase technical depth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-glow p-6 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.caseStudy}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View case study"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
