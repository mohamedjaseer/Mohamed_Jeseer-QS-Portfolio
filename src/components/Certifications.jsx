import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Section from "./layout/Section";
import { siteData } from "../config/siteData";

export default function Certifications() {
  const { certifications } = siteData;

  return (
    <Section
      id="certifications"
      eyebrow={certifications.eyebrow}
      title={certifications.title}
      subtitle={certifications.subtitle}
    >
      <div className="mx-auto max-w-2xl space-y-5">
        {certifications.items.map((cert, i) => (
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
                <h3 className="text-base font-bold tracking-tight">
                  {cert.title}
                </h3>
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
    </Section>
  );
}
