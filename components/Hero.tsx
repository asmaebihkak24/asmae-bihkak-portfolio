'use client';

import { useState } from 'react';
import { ArrowRight, Mail, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Organic Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#DDD4E3]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C9A9A8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F2EEE7] border border-[#242126]/10 text-[#9B86A8] font-mono text-xs font-semibold tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#9B86A8]" />
              <span>DATA SCIENCE & AI ENGINEERING</span>
            </div>

            {/* Main Editorial Headline with Serif Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1B1B1B] tracking-tight leading-[1.15] mb-6">
              Building intelligent solutions with{' '}
              <span className="text-[#9B86A8] italic">Data</span>,{' '}
              <span className="text-[#9B86A8]">Machine Learning & AI.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6E6964] leading-relaxed font-sans mb-8 max-w-2xl">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-6">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full font-sans font-medium text-xs tracking-wider uppercase bg-[#242126] text-[#F8F5EF] hover:bg-[#9B86A8] transition-all duration-300 shadow-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full font-sans font-medium text-xs tracking-wider uppercase border border-[#242126]/20 text-[#1B1B1B] hover:border-[#9B86A8] hover:text-[#9B86A8] hover:bg-[#F2EEE7] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Secondary Action & Academic Line */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#6E6964]">
              <a
                href="#cv"
                onClick={(e) => scrollToSection(e, '#cv')}
                className="inline-flex items-center space-x-1.5 text-[#9B86A8] hover:text-[#1B1B1B] transition-colors underline font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
              <span>·</span>
              <span>ENSA Fès · Data Science & AI Engineering</span>
            </div>

          </div>

          {/* Right Column: Editorial Profile Photo Placeholder Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              
              {/* Organic Soft Mauve Shape Behind Image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#DDD4E3] via-[#C9A9A8]/40 to-[#9B86A8]/30 rounded-[2.5rem] rotate-3 scale-95 transition-transform group-hover:rotate-1 duration-500 blur-sm" />
              
              {/* Decorative Subtle Line Stroke */}
              <div className="absolute -top-6 -right-6 w-12 h-12 text-[#9B86A8]/60 pointer-events-none">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>

              {/* Photo Frame Container */}
              <div className="relative rounded-[2rem] bg-[#FBF9F5] border border-[#242126]/10 p-3 shadow-xl -rotate-2 group-hover:rotate-0 transition-all duration-500 overflow-hidden">
                <div className="relative w-full aspect-[4/5] rounded-[1.5rem] bg-[#F2EEE7] border border-[#242126]/5 overflow-hidden">
                  {!imgError ? (
                    <img
                      src={PERSONAL_INFO.profileImagePath}
                      alt="Asmae Bihkak"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top rounded-[1.5rem]"
                    />
                  ) : (
                    /* Tasteful Editorial Placeholder */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#FBF9F5] to-[#F2EEE7] rounded-[1.2rem] border border-dashed border-[#9B86A8]/40 text-[#6E6964]">
                      <div className="w-16 h-16 rounded-full bg-[#DDD4E3]/50 flex items-center justify-center mb-4 text-[#9B86A8]">
                        <span className="font-serif text-2xl font-bold">AB</span>
                      </div>
                      <h4 className="font-serif font-bold text-[#1B1B1B] text-base mb-1">
                        Asmae Bihkak
                      </h4>
                      <p className="font-mono text-[10px] uppercase text-[#9B86A8] tracking-widest mb-3">
                        DATA SCIENCE & AI
                      </p>
                      <span className="font-mono text-[9px] text-[#8C8680] bg-[#F8F5EF] px-2.5 py-1 rounded-full border border-[#242126]/10">
                        public/images/profile.jpg
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Subtle Decorative Accent Dots */}
              <div className="absolute -bottom-4 -left-4 flex space-x-1.5 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-[#9B86A8]" />
                <div className="w-2 h-2 rounded-full bg-[#C9A9A8]" />
                <div className="w-2 h-2 rounded-full bg-[#DDD4E3]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
