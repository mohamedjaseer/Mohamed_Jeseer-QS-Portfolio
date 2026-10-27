import { motion } from "framer-motion";

export default function ProjectCard({ project, index = 0 }) {
  const { title, description } = project;

  return (
    <motion.article
      className="project-card surface surface-hover"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: 0.04 * index }}
    >
      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl"
        style={{ background: "var(--primary)" }}
      />

      <div className="min-w-0 flex-1">
        <h3 className="text-base font-extrabold tracking-tight text-(--text) sm:text-lg">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </motion.article>
  );
}
