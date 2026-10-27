import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Container from "./layout/Container";
import { siteData } from "../config/siteData";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero({ profileSrc }) {
  const { text } = useTypewriter(siteData.hero.typingWords, {
    typeSpeed: 85,
    deleteSpeed: 45,
    pauseMs: 950,
    startDelayMs: 200,
  });

  const scrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="scroll-mt-header">
      <div className="hero-bg py-14 sm:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Left */}
            <div>
              {/* Availability pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-xs font-semibold text-(--primary)"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-(--primary)" />
                {siteData.hero.availability}
              </motion.div>

              {/* Headline — fixed height on the typed line to prevent layout shift */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
              >
                {/* Line 1: "Hi, I'm Mohamed Jeseer" — static, never shifts */}
                <span className="block">
                  <span className="text-(--text)">{siteData.hero.headlinePrefix}</span>
                  <span className="text-(--primary)">{siteData.hero.headlineName}</span>
                </span>

                {/* Line 2: "a <typed>" — fixed height so it never collapses */}
                <span
                  className="block"
                  style={{ minHeight: "1.2em", lineHeight: "1.2" }}
                >
                  <span className="text-(--text)">{siteData.hero.headlineSuffix}</span>
                  <span className="inline-flex items-baseline">
                    <span className="text-(--primary)">{text}</span>
                    <span className="type-caret" aria-hidden="true" />
                  </span>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-5 max-w-xl text-base text-muted sm:text-lg"
              >
                {siteData.hero.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="btn-primary rounded-xl px-7 py-3 text-sm font-semibold shadow-(--shadow) transition-transform hover:-translate-y-0.5"
                >
                  {siteData.hero.ctaPrimary}
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("#experience")}
                  className="surface surface-hover rounded-xl px-7 py-3 text-sm font-semibold"
                >
                  {siteData.hero.ctaSecondary}
                </button>
              </motion.div>

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="mt-8 flex flex-wrap items-center gap-3"
                aria-label="Social links"
              >
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
              </motion.div>
            </div>

            {/* Right: profile */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-64 sm:w-72 md:w-80 lg:w-96"
            >
              <div className="profile-shell">
                <img
                  src={profileSrc}
                  alt="Mohamed Jeseer"
                  loading="lazy"
                  className="h-auto w-full rounded-[22px] object-cover"
                />
              </div>
            </motion.div>

          </div>

          {/* Scroll down indicator */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => scrollTo("#expertise")}
              className="group flex items-center gap-2 text-sm font-medium text-muted"
              aria-label="Scroll down to next section"
            >
              <span>Scroll Down</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}