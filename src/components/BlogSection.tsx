import { BookOpen, ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Deploying a Self-Hosted Monitoring Stack at Home",
    summary:
      "How I set up Prometheus, Grafana, and Loki on a Raspberry Pi cluster to monitor my home infrastructure.",
    date: "2025-01-15",
    readTime: "8 min read",
  },
  {
    title: "Zero-Downtime Deployments with ArgoCD",
    summary:
      "A practical guide to implementing GitOps workflows with ArgoCD and Kubernetes.",
    date: "2024-12-28",
    readTime: "12 min read",
  },
  {
    title: "Terraform Best Practices I Learned the Hard Way",
    summary:
      "Lessons from managing infrastructure as code across multiple environments and teams.",
    date: "2024-12-10",
    readTime: "10 min read",
  },
  {
    title: "Running Kubernetes at Home: Is It Worth It?",
    summary:
      "An honest look at the pros and cons of self-hosting a K8s cluster for learning.",
    date: "2024-11-20",
    readTime: "6 min read",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="relative">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Notes From the <span className="gradient-text">Homelab</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I like to document interesting problems and how I solved them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <a
              key={post.title}
              href="#"
              className="card-glow p-6 group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  <BookOpen size={20} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{post.summary}</p>

                  <span className="inline-flex items-center gap-1 text-sm text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
