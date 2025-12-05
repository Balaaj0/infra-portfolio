import { Server, ExternalLink, Shield, Database } from "lucide-react";

const labs = [
  {
    title: "Uptime Monitor",
    description:
      "Real-time service uptime dashboard monitoring my infrastructure endpoints.",
    url: "https://status.balaajkhan.com",
    status: "online",
    tech: "Reverse-proxied via Nginx, secured with TLS",
    icon: Server,
  },
  {
    title: "Grafana Dashboards",
    description:
      "Live visualization of homelab metrics including CPU, memory, and network traffic.",
    url: "https://grafana.balaajkhan.com",
    status: "online",
    tech: "Deployed via Docker Compose, backed by Prometheus",
    icon: Database,
  },
  {
    title: "GitOps Demo",
    description:
      "Sample application demonstrating ArgoCD deployments with automated rollbacks.",
    url: "https://gitops.balaajkhan.com",
    status: "planned",
    tech: "Kubernetes cluster with ArgoCD and GitHub integration",
    icon: Shield,
  },
];

export function LiveLabsSection() {
  return (
    <section id="labs" className="relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Live <span className="gradient-text">Labs</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Self-hosted proof-of-concepts running on my own infrastructure.
            These are live systems I maintain to experiment with new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <div
              key={lab.title}
              className="card-glow p-6 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <lab.icon size={24} />
                </div>
                <span
                  className={`status-badge ${
                    lab.status === "online" ? "status-online" : "status-planned"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      lab.status === "online"
                        ? "bg-emerald-400 animate-pulse"
                        : "bg-amber-400"
                    }`}
                  />
                  {lab.status === "online" ? "Online" : "Coming Soon"}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {lab.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {lab.description}
              </p>

              <div className="mt-auto space-y-3">
                <p className="text-xs text-muted-foreground font-mono border-l-2 border-primary/30 pl-3">
                  {lab.tech}
                </p>

                {lab.status === "online" && (
                  <a
                    href={lab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Visit Lab
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
