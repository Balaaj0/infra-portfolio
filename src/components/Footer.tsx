import { Cloud } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Balaaj Khan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <Cloud size={14} className="text-primary" />
            Built and deployed with Azure & automation
          </p>
        </div>
      </div>
    </footer>
  );
}
