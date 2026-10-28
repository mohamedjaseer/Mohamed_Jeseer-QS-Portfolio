import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Download,
  FileText,
  Linkedin,
  Target,
} from "lucide-react";
import Section from "./layout/Section";
import ContactForm from "./ContactForm";
import { siteData } from "../config/siteData";
import cvPdf from "../assets/Mohamed-Jeseer-CV.pdf";

function InfoCard({ Icon, label, value, href }) {
  const content = (
    <div className="surface surface-hover rounded-2xl p-5">
      <div className="flex items-start gap-3">
        <span className="info-icon">
          <Icon className="h-5 w-5 text-(--primary)" />
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
      eyebrow={siteData.contact.eyebrow}
      title={siteData.contact.title}
      subtitle={siteData.contact.subtitle}
    >
      {/* CV Section */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mb-12"
      >
        <div className="surface rounded-2xl p-6 sm:p-8 mx-auto max-w-3xl">
          <div className="flex items-start gap-4 mb-4">
            <span className="info-icon shrink-0">
              <Target className="h-6 w-6 text-(--primary)" />
            </span>
            <div>
              <h3 className="text-lg font-extrabold tracking-tight">
                Career Objective
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {siteData.contact.careerObjective}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Download CV button */}
            <a
              href={cvPdf}
              download="Mohamed-Jeseer-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5"
              title="Download M.S Mohamed Jeseer's CV (PDF)"
            >
              <Download className="h-4 w-4" />
              Download My CV
            </a>

            <div className="inline-flex items-center gap-2 text-xs text-muted bg-(--surface) border border-(--border) rounded-xl px-4 py-3">
              <FileText className="h-4 w-4 text-(--primary)" />
              <span>Mohamed-Jeseer-CV.pdf (Official CV)</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Grid */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="space-y-5"
        >
          <InfoCard
            Icon={MapPin}
            label="LOCATION"
            value={siteData.location}
          />
          <InfoCard
            Icon={Mail}
            label="EMAIL"
            value={siteData.email}
            href={`mailto:${siteData.email}`}
          />
          {siteData.phone && (
            <InfoCard
              Icon={Phone}
              label="PHONE"
              value={siteData.phone}
              href={`tel:${siteData.phone.replace(/\s+/g, "")}`}
            />
          )}
          <InfoCard
            Icon={Linkedin}
            label="LINKEDIN"
            value="linkedin.com/in/mohamedjeseer"
            href={siteData.linkedin}
          />

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
