import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MyFocus from '@/components/MyFocus';
import About from '@/components/About';
import Experience from '@/components/Experience';
import FeaturedProjects from '@/components/FeaturedProjects';
import OtherProjects from '@/components/OtherProjects';
import BackendJourney from '@/components/BackendJourney';
import Skills from '@/components/Skills';
import CVSection from '@/components/CVSection';
import Certifications from '@/components/Certifications';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F8F5EF] text-[#1B1B1B]">
      {/* Sticky Editorial Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <MyFocus />
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <BackendJourney />
        <Skills />
        <CVSection />
        <Certifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
