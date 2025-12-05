import { Mail, Linkedin, Github, Send } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@balaajkhan.com",
    href: "mailto:hello@balaajkhan.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/balaajkhan",
    href: "https://www.linkedin.com/in/balaajkhan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/balaajkhan",
    href: "https://github.com/balaajkhan",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-secondary/20">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            If you'd like to talk about infrastructure roles, homelabs, or cloud
            architecture, feel free to reach out.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow p-5 flex flex-col items-center gap-3 group"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <contact.icon size={24} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">
                    {contact.label}
                  </p>
                  <p className="text-xs text-muted-foreground truncate max-w-full">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:hello@balaajkhan.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            <Send size={18} />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
