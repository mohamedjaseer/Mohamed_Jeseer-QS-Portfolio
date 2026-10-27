import { motion } from "framer-motion";

export default function ExpertiseCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      className="group rounded-2xl bg-(--surface) p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: 0.06 * index }}
    >
      {/* Icon */}
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary)/10 text-(--primary) group-hover:bg-(--primary) group-hover:text-white transition-colors">
        <Icon className="h-7 w-7" />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold tracking-tight text-(--text)">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {description}
      </p>
    </motion.div>
  );
}