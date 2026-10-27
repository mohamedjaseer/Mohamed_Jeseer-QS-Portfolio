import { useMemo, useState } from "react";
import { motion } from "framer-motion";
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
        <div className="toggle-shell surface">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={isActive ? "toggle-btn toggle-active" : "toggle-btn toggle-idle"}
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
    </Section>
  );
}