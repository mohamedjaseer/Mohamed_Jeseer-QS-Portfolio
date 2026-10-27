import { ArrowUp } from "lucide-react";
import { siteData } from "../config/siteData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-(--border) bg-(--surface)">
      {/* Main footer content */}
      <div className="mx-auto max-w-5xl px-6 py-14 text-center">
        {/* Name */}
        <p className="text-2xl font-extrabold tracking-tight text-(--text)">
          Mohamed{" "}
          <span className="text-(--primary)">Jeseer</span>
        </p>

        {/* Tagline */}
        <p className="mt-3 text-sm text-muted">
          Junior Quantity Surveyor — Civil / MEP | Cost Estimation & Contract Administration
        </p>

        {/* Social icons */}
        <div className="mt-8 flex items-center justify-center gap-6">
          {siteData.socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="text-muted transition-colors duration-200 hover:text-(--primary)"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-(--border) px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} M.S Mohamed Jeseer. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-xl border border-(--border) bg-(--bg) px-4 py-2 text-xs font-semibold text-(--text) transition-colors duration-200 hover:border-(--primary) hover:text-(--primary)"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Floating scroll-to-top circle (bottom-right) */}
      
    </footer>
  );
}
