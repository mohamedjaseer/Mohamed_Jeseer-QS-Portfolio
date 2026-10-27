import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { siteData } from '../config/siteData';
import Container from './layout/Container';
import myLogo from "../assets/my.png";

export default function Header({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [visible, setVisible]             = useState(true);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile]           = useState(false);

  const lastScrollY = useRef(0);
  const ticking     = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;

        if (currentY <= 60) {
          setVisible(true);
        } else if (currentY > lastScrollY.current + 4) {
          setVisible(false);
          setMobileOpen(false);
        } else if (currentY < lastScrollY.current - 4) {
          setVisible(true);
        }

        lastScrollY.current = currentY;
        setIsScrolled(currentY > 20);

        // Scroll spy
        const sections = siteData.nav.map((n) => n.href.replace('#', ''));
        for (const id of [...sections].reverse()) {
          const el = document.getElementById(id);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= 120) {
            setActiveSection(id);
            break;
          }
        }

        ticking.current = false;
      });
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /**
   * FIX: Close the mobile menu first, then scroll after a short delay
   * so the AnimatePresence exit animation doesn't interfere with scrollIntoView.
   */
  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (mobileOpen) {
      setMobileOpen(false);
      // Wait for the exit animation (250 ms) before scrolling
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 260);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      className={[
        'fixed left-0 right-0 top-0 z-50 transition-colors duration-300',
        isScrolled
          ? 'border-b border-(--border) bg-(--bg)/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent',
      ].join(' ')}
      animate={{ y: visible ? 0 : '-110%' }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav>
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-3"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              aria-label="Go to Home"
            >
              <div className="h-10 w-10 overflow-hidden rounded-full shadow-(--shadow)">
                <img
                  src={myLogo}
                  alt="Jeseer logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-base font-semibold tracking-tight transition-colors group-hover:text-(--primary)">
                {siteData.name}
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <motion.div
              className="hidden items-center gap-1 md:flex"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {siteData.nav.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={[
                      'nav-link',
                      isActive
                        ? 'text-(--primary)'
                        : 'text-muted hover:text-(--text)',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span className="nav-underline" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
            </motion.div>

            {/* Right side */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="icon-btn"
                aria-label="Toggle dark mode"
                title="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.95 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex"
                    >
                      <Sun className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.95 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex"
                    >
                      <Moon className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile menu button — always rendered on mobile via CSS */}
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="icon-btn md:hidden!"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </motion.div>

          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-b border-(--border) bg-(--bg) md:hidden"
          >
            <Container className="py-3">
              <div className="space-y-1">
                {siteData.nav.map((item) => {
                  const id = item.href.replace('#', '');
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={[
                        'block rounded-xl px-4 py-3 text-sm font-semibold transition-colors',
                        isActive
                          ? 'bg-(--primary) text-white'
                          : 'hover:bg-(--surface)',
                      ].join(' ')}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}