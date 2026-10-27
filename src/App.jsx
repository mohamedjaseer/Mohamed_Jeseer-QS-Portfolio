import Header from "./components/Header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import FloatingSocialBar from "./components/FloatingSocialBar";
import { siteData } from "./config/siteData";
import { useTheme } from "./hooks/useTheme";

import JeseerProfile from "./assets/JeseerProfile.jpg";
import Footer from "./components/Footer";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const profileSrc = JeseerProfile;

  return (
    <div className="min-h-screen">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pt-16 md:pt-20">
        <Hero profileSrc={profileSrc} />

        <Expertise />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer/>
      </main>

      <BackToTop />
      <FloatingSocialBar />
    </div>
  );
}
