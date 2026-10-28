import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  MessageSquare,
  Users,
  Lightbulb,
  Rocket,
  Languages,
} from "lucide-react";
import Section from "./layout/Section";
import { siteData } from "../config/siteData";

const iconMap = {
  brain: Brain,
  clock: Clock,
  messages: MessageSquare,
  users: Users,
  lightbulb: Lightbulb,
  rocket: Rocket,
  languages: Languages,
};

export default function Strengths() {
  const { strengths } = siteData;

  return (
    <Section
      id="strengths"
      eyebrow={strengths.eyebrow}
      title={strengths.title}
      subtitle={strengths.subtitle}
    >
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {strengths.items.map((item) => {
          const Icon = iconMap[item.icon] || Brain;
          return (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="group surface surface-hover rounded-2xl p-5"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--primary)/10 text-(--primary) group-hover:bg-(--primary) group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold tracking-tight text-(--text)">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
