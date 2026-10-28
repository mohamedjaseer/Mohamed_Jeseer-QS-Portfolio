import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Section from "./layout/Section";
import { siteData } from "../config/siteData";

export default function About() {
  const { about } = siteData;

  return (
    <Section
      id="about"
      eyebrow={about.eyebrow}
      title={about.title}
      subtitle={about.subtitle}
    >
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Left — Bio paragraphs (3 cols) */}
        <motion.div
          className="lg:col-span-3 space-y-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted sm:text-base">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Right — Highlights (2 cols) */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="surface rounded-2xl p-6">
            <h3 className="text-base font-extrabold tracking-tight mb-4">
              Key Competencies
            </h3>
            <ul className="space-y-3">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-(--primary) mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
