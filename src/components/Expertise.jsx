import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./layout/Section";
import { siteData } from "../config/siteData";

import autocadLogo from "../assets/software/Autocad.png";
import revitLogo from "../assets/software/revit.png";
import planswiftLogo from "../assets/software/Planswift.jfif";
import costxLogo from "../assets/software/costx.png";
import bluebeamLogo from "../assets/software/bluebeam.png";
import excelLogo from "../assets/software/excel.png";
import wordLogo from "../assets/software/word.jfif";
import powerpointLogo from "../assets/software/PowerPoint.jfif";
import officeLogo from "../assets/software/office.jfif";
import pdfLogo from "../assets/software/pdf-measurement.jfif";

const softwareLogos = {
  autocad: autocadLogo,
  revit: revitLogo,
  planswift: planswiftLogo,
  costx: costxLogo,
  bluebeam: bluebeamLogo,
  excel: excelLogo,
  word: wordLogo,
  powerpoint: powerpointLogo,
  office: officeLogo,
  pdf: pdfLogo,
};

function SoftwareCard({ sw, index }) {
  const [imageFailed, setImageFailed] = useState(false);
  const logoSrc = softwareLogos[sw.imageKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      className="group relative flex flex-col items-center text-center rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/50 hover:shadow-xl hover:shadow-(--primary)/10"
    >
      {/* Subtle hover gradient glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-b from-(--primary)/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Software logo badge */}
      <div className="relative mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center overflow-hidden rounded-2xl bg-slate-900/40 p-2.5 border border-slate-700/30 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-(--primary)/40">
        {!imageFailed && logoSrc ? (
          <img
            src={logoSrc}
            alt={`${sw.name} logo`}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain filter drop-shadow-sm transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-(--primary)/15 text-(--primary) font-black text-sm">
            {sw.abbr || sw.name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {/* Software name */}
      <h4 className="relative text-base font-bold tracking-tight text-(--text) transition-colors duration-200 group-hover:text-(--primary)">
        {sw.name}
      </h4>

      {/* Quantity Surveying specific description */}
      <p className="relative mt-2 text-xs sm:text-sm text-muted leading-relaxed">
        {sw.description}
      </p>
    </motion.div>
  );
}

export default function Expertise() {
  const { expertise } = siteData;

  return (
    <Section
      id="skills"
      eyebrow={expertise.eyebrow}
      title={expertise.title}
      subtitle={expertise.subtitle}
    >
      {/* Skill Category Cards */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {expertise.categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="group rounded-2xl bg-(--surface) border border-(--border) p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary)/10 text-(--primary) group-hover:bg-(--primary) group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-(--text)">
                  {cat.title}
                </h3>
              </div>

              {/* Skills as badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag-pill text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Note if present */}
              {cat.note && (
                <p className="mt-4 text-xs text-muted italic leading-relaxed">
                  {cat.note}
                </p>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Technical Software Showcase Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-(--text)">
            Technical Software
          </h3>
          <p className="mt-2 text-sm text-muted max-w-2xl mx-auto">
            Specialized Quantity Surveying, digital take-off, BIM, estimating, and commercial documentation tools.
          </p>
        </div>

        {/* Responsive grid: 4 columns on desktop, 2 on tablet, 1 or 2 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertise.software.map((sw, i) => (
            <SoftwareCard key={sw.name} sw={sw} index={i} />
          ))}
        </div>
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
