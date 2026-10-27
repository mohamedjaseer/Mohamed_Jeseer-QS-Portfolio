import Container from "./Container";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
  children,
}) {
  return (
    <section id={id} className={`scroll-mt-header py-16 sm:py-20 ${className}`}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && (
              <div className="mb-3 inline-flex items-center rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-xs font-semibold tracking-widest text-(--primary)">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}