import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import FloatingSocialBar from "./components/FloatingSocialBar";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

import JeseerProfile from "./assets/JeseerProfile.jpg";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const profileSrc = JeseerProfile;

  return (
    <div className="min-h-screen">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pt-16 md:pt-20">
        <Hero profileSrc={profileSrc} />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Strengths />
        <Contact />
        <Footer />
      </main>

      <BackToTop />
      <FloatingSocialBar />
    </div>
  );
}
