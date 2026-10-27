import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Section from "./layout/Section";
import ContactForm from "./ContactForm";
import { siteData } from "../config/siteData";

function InfoCard({ Icon, label, value, href }) {
  const content = (
    <div className="surface surface-hover rounded-2xl p-5">
      <div className="flex items-start gap-3">
        <span className="info-icon">
          <Icon className="h-5 w-5 text-var(--primary)" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold tracking-widest text-muted">{label}</p>
          <p className="mt-1 truncate text-sm font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} className="block" aria-label={`${label}: ${value}`}>
      {content}
    </a>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Work Together"
      subtitle="Interested in hiring or have a project opportunity? Feel free to reach out."
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="space-y-5"
        >
          <InfoCard Icon={MapPin} label="LOCATION" value={siteData.location} />
          <InfoCard Icon={Mail} label="EMAIL" value={siteData.email} href={`mailto:${siteData.email}`} />
          {siteData.phone && (
            <InfoCard Icon={Phone} label="PHONE" value={siteData.phone} href={`tel:${siteData.phone.replace(/\s+/g, '')}`} />
          )}

          <div className="surface rounded-2xl p-6">
            <h3 className="text-lg font-extrabold tracking-tight">Connect</h3>
            <p className="mt-2 text-sm text-muted">
              You can also find me on these platforms.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {siteData.socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="social-btn"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}