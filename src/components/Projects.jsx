import { motion } from "framer-motion";
import Section from "./layout/Section";
import ProjectCard from "./ProjectCard";
import { siteData } from "../config/siteData";

export default function Projects() {
  const items = siteData.projects.items;

  return (
    <Section
      id="projects"
      eyebrow={siteData.projects.eyebrow}
      title={siteData.projects.title}
      subtitle={siteData.projects.subtitle}
    >
      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.3 }}
      >
        {items.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </motion.div>
    </Section>
  );
}
