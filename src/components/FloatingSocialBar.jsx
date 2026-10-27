import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    name: "WhatsApp",
    url: "https://wa.me/94754506100",
    icon: FaWhatsapp,
    colorClass: "bg-[#25D366] text-white hover:bg-[#20ba5a] hover:shadow-[#25D366]/20",
    ariaLabel: "Chat with me on WhatsApp",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mohamedjeseer",
    icon: FaLinkedinIn,
    colorClass: "bg-[#0A66C2] text-white hover:bg-[#0956a3] hover:shadow-[#0A66C2]/20",
    ariaLabel: "Connect with me on LinkedIn",
  },
  {
    name: "Email",
    url: "mailto:jaseermohamed86@gmail.com",
    icon: MdEmail,
    colorClass: "bg-[#EA4335] text-white hover:bg-[#d33426] hover:shadow-[#EA4335]/20",
    ariaLabel: "Send me an email",
  },
];

export default function FloatingSocialBar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside of the widget
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.7 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18,
      },
    },
    exit: {
      opacity: 0,
      y: 15,
      scale: 0.7,
      transition: { duration: 0.15 },
    },
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-[80px] right-[18px] z-[45] flex flex-col items-center gap-3 select-none"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center gap-3 mb-1"
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={`group relative flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] dark:focus-visible:ring-offset-slate-900 ${social.colorClass}`}
                aria-label={social.ariaLabel}
                title={social.name}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
                
                {/* Glassmorphic label / tooltip */}
                <span className="absolute right-12 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-800/50 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-md backdrop-blur-md">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main trigger button */}
      <motion.button
        type="button"
        onClick={handleToggle}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-[var(--primary)] text-white shadow-xl hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] dark:focus-visible:ring-offset-slate-900 cursor-pointer"
        aria-label={isOpen ? "Close social contact menu" : "Open social contact menu"}
        aria-expanded={isOpen}
        title="Contact Me"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
}
