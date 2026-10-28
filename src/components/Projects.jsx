import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileText, Wrench, Ruler, BookOpen, Monitor } from "lucide-react";
import Section from "./layout/Section";
import { siteData } from "../config/siteData";

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const d = project.detail;

  return (
    <motion.div
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-80 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 overflow-y-auto"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ scale: 0.92, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-(--border) bg-(--bg) p-6 sm:p-8 shadow-2xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-2 text-muted transition-colors hover:bg-black/5 hover:text-(--text) dark:hover:bg-white/10 z-10"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs font-semibold text-(--primary) mb-3">
            {project.label}
          </span>
          <h2 id="project-modal-title" className="text-xl sm:text-2xl font-extrabold tracking-tight text-(--text)">
            {project.title}
          </h2>
        </div>

        {/* Detail sections */}
        <div className="space-y-6">
          {/* Overview */}
          <DetailBlock icon={FileText} title="Project Overview" text={d.overview} />

          {/* Scope */}
          <DetailBlock icon={Ruler} title="Scope of Work" text={d.scope} />

          {/* Contribution */}
          <DetailBlock icon={Wrench} title="My Specific Contribution" text={d.contribution} />

          {/* Methodology */}
          <DetailBlock icon={BookOpen} title="Measurement Methodology" text={d.methodology} />

          {/* Standards */}
          <div className="flex items-start gap-3">
            <span className="info-icon shrink-0">
              <BookOpen className="h-5 w-5 text-(--primary)" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-(--text)">Applicable Standards</h4>
              <p className="mt-1 text-sm text-muted">{d.standards}</p>
            </div>
          </div>

          {/* Software */}
          <div className="flex items-start gap-3">
            <span className="info-icon shrink-0">
              <Monitor className="h-5 w-5 text-(--primary)" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-(--text)">Software Used</h4>
              <p className="mt-1 text-sm text-muted">{d.software}</p>
            </div>
          </div>

          {/* Sample Table */}
          {d.sampleTable && (
            <div>
              <h4 className="text-sm font-bold text-(--text) mb-3">Sample Quantity Take-Off (Illustrative)</h4>
              <div className="overflow-x-auto rounded-xl border border-(--border)">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-(--surface) text-left">
                      <th className="px-4 py-3 font-bold text-(--text)">Item</th>
                      <th className="px-4 py-3 font-bold text-(--text)">Unit</th>
                      <th className="px-4 py-3 font-bold text-(--text)">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {d.sampleTable.map((row, i) => (
                      <tr key={i} className="border-t border-(--border)">
                        <td className="px-4 py-3 text-muted">{row.item}</td>
                        <td className="px-4 py-3 text-muted font-medium">{row.unit}</td>
                        <td className="px-4 py-3 text-muted text-xs italic">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-muted italic">
                Note: Actual quantities and commercial figures are not disclosed. These are clearly labelled illustrative examples.
              </p>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-sm font-bold text-(--text) mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-(--border)">
          <p className="text-xs text-muted italic">
            Supporting drawings, screenshots, and downloadable sample documents can be uploaded and displayed here when available.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailBlock({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="info-icon shrink-0">
        <Icon className="h-5 w-5 text-(--primary)" />
      </span>
      <div>
        <h4 className="text-sm font-bold text-(--text)">{title}</h4>
        <p className="mt-1 text-sm text-muted leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = siteData;
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredItems =
    activeFilter === "All Projects"
      ? projects.items
      : projects.items.filter((p) => p.filterTags.includes(activeFilter));

  return (
    <Section
      id="projects"
      eyebrow={projects.eyebrow}
      title={projects.title}
      subtitle={projects.subtitle}
    >
      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {projects.filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? "chip chip-active"
                : "chip chip-idle"
            }
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((project, i) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.04 * i }}
              className="relative surface surface-hover rounded-2xl p-6 flex flex-col"
            >
              {/* Corner glow */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl"
                style={{ background: "var(--primary)" }}
              />

              {/* Label badge */}
              <span className="inline-flex self-start items-center rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs font-semibold text-(--primary) mb-3">
                {project.label}
              </span>

              <h3 className="text-base font-extrabold tracking-tight text-(--text) sm:text-lg">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted flex-1">
                {project.description}
              </p>

              {/* Activities */}
              <ul className="mt-4 space-y-2">
                {project.activities.slice(0, 4).map((a) => (
                  <li key={a} className="flex items-start gap-2 text-xs text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary) opacity-70" />
                    {a}
                  </li>
                ))}
                {project.activities.length > 4 && (
                  <li className="text-xs text-(--primary) font-medium">
                    +{project.activities.length - 4} more activities
                  </li>
                )}
              </ul>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-xs">{tag}</span>
                ))}
              </div>

              {/* View Project button */}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="mt-5 btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
