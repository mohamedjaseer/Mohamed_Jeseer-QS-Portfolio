import { motion } from "framer-motion";
import Section from "./layout/Section";
import SkillCard from "./Skillcard";

const allSkills = [
  "AutoCAD",
  "Revit",
  "PlanSwift",
  "Microsoft Excel",
  "Microsoft Word",
  "Microsoft PowerPoint",
  "NRM2",
  "POMI",
  "CESMM3",
  "FIDIC",
  "Quantity Take-Off",
  "BOQ Preparation",
  "Cost Estimation",
  "IPA / IPC Review",
  "Variation Assessment",
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="Skills & Tools"
      subtitle="Software, standards and tools I use in quantity surveying"
    >
      <motion.div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.35 }}
      >
        {allSkills.map((skill, i) => (
          <SkillCard key={skill} name={skill} index={i} />
        ))}
      </motion.div>

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-5 py-2 text-sm font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary) opacity-75" />
          Continuously developing QS and commercial skills
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary) opacity-75" />
        </p>
      </motion.div>
    </Section>
  );
}
