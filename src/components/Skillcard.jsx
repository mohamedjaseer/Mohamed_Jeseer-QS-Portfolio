import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiPython, SiMongodb, SiTailwindcss,
  SiJavascript, SiTypescript, SiGit, SiDocker, SiFigma,
  SiVite, SiFirebase, SiVercel, SiPostgresql, SiSpring,
  SiDotnet, SiPhp, SiKotlin, SiPostman, SiExpress, SiNextdotjs,
} from "react-icons/si";

export const skillIcons = {
  Java:               SiSpring,
  "C#":               SiDotnet,
  PHP:                SiPhp,
  JavaScript:         SiJavascript,
  TypeScript:         SiTypescript,
  Python:             SiPython,
  React:              SiReact,
  "Node.js":          SiNodedotjs,
  Express:            SiNodedotjs,
  "Next.js":          SiNextdotjs,
  MongoDB:            SiMongodb,
  PostgreSQL:         SiPostgresql,
  Firebase:           SiFirebase,
  "Tailwind CSS":     SiTailwindcss,
  Git:                SiGit,
  Docker:             SiDocker,
  Figma:              SiFigma,
  Vite:               SiVite,
  Vercel:             SiVercel,
  Kotlin:             SiKotlin,
  Postman:            SiPostman,
};

export const skillColors = {
  Java:           "#007396",
  "C#":           "#239120",
  PHP:            "#777BB4",
  Python:         "#3776AB",
  React:          "#61DAFB",
  TypeScript:     "#3178C6",
  "Node.js":      "#339933",
  Express:        "#888888",
  "Next.js":      "#000000",
  MongoDB:        "#47A248",
  PostgreSQL:     "#336791",
  Firebase:       "#FFCA28",
  "Tailwind CSS": "#06B6D4",
  Git:            "#F05032",
  Docker:         "#2496ED",
  Figma:          "#F24E1E",
  Vite:           "#646CFF",
  Vercel:         "#000000",
  Kotlin:         "#0095D5",
  Postman:        "#FF6C37",
  JavaScript:     "#F7DF1E",
};

export default function SkillCard({ name, index = 0 }) {
  const Icon = skillIcons[name];
  const color = skillColors[name] ?? "#6366f1";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-(--border) bg-(--bg) p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-(--primary)/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex flex-col items-center gap-3">
          {/* Icon box */}
          <div
            className="rounded-xl p-3 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${color}18` }}
          >
            {Icon ? (
              <Icon className="h-8 w-8" style={{ color }} />
            ) : (
              <div className="h-8 w-8 rounded-lg bg-(--primary)/20" />
            )}
          </div>

          {/* Name */}
          <span className="text-center text-sm font-semibold text-(--text) transition-colors duration-300 group-hover:text-(--primary)">
            {name}
          </span>
        </div>

        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-(--primary)/0 transition-all duration-300 group-hover:border-(--primary)/20" />
      </div>
    </motion.div>
  );
}