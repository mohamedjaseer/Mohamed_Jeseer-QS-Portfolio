import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

export default function Timeline({ items }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Vertical line — starts at first dot, ends at last dot */}
      <div
        className="absolute left-5 top-5 w-px"
        style={{
          bottom: "1.25rem",
          background: "linear-gradient(to bottom, var(--primary), var(--border) 80%, transparent)",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.article
            key={`${item.title}-${item.period}-${i}`}
            className="relative flex gap-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, delay: 0.07 * i }}
          >
            {/* Dot column — fixed 40px wide, centered on the line */}
            <div className="relative flex w-10 shrink-0 flex-col items-center">
              <div
                className="relative z-10 mt-5 h-3 w-3 rounded-full border-2 border-(--primary) bg-(--bg) shadow-[0_0_0_3px_var(--primary)] shadow-(--primary)/20"
                aria-hidden="true"
              />
            </div>

            {/* Card */}
            <div className="mb-1 flex-1 rounded-2xl border border-(--border) bg-(--bg) p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold tracking-tight text-(--text)">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-(--primary)">
                    {item.org}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-muted">
                    <Calendar className="h-3 w-3" />
                    {item.period}
                  </div>
                  {item.location && (
                    <div className="mt-1 flex items-center justify-end gap-1 text-xs text-muted">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {item.description && (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              )}

              {/* Highlights */}
              {Array.isArray(item.highlights) && item.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary) opacity-70"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}