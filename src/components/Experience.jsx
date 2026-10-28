import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Section from "./layout/Section";
import Timeline from "./Timeline";
import { siteData } from "../config/siteData";

export default function Experience() {
  const tabs = siteData.experience.tabs;
  const [active, setActive] = useState(tabs[0]?.key || "experience");

  const activeData = useMemo(() => {
    const found = tabs.find((t) => t.key === active);
    return found?.items || [];
  }, [active, tabs]);

  return (
    <Section
      id="experience"
      eyebrow={siteData.experience.eyebrow}
      title={siteData.experience.title}
      subtitle={siteData.experience.subtitle}
    >
      {/* Toggle */}
      <div className="mb-10 flex justify-center">
        <div className="toggle-shell surface flex-wrap">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={
                  isActive
                    ? "toggle-btn toggle-active"
                    : "toggle-btn toggle-idle"
                }
                aria-pressed={isActive}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Timeline items={activeData} />
      </motion.div>

      {/* Certifications section */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mt-16"
      >
        <div className="mx-auto max-w-3xl text-center mb-8">
          <div className="mb-3 inline-flex items-center rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-xs font-semibold tracking-widest text-(--primary)">
            {siteData.certifications.eyebrow}
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {siteData.certifications.title}
          </h3>
        </div>

        <div className="mx-auto max-w-2xl space-y-5">
          {siteData.certifications.items.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="surface surface-hover rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="info-icon shrink-0">
                  <Award className="h-6 w-6 text-(--primary)" />
                </span>
                <div className="min-w-0">
                  <h4 className="text-base font-bold tracking-tight">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{cert.org}</p>
                  {cert.certNumber && (
                    <p className="mt-1 text-xs font-medium text-(--primary)">
                      {cert.certNumber}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
