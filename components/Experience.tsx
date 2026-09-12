'use client';

import { EXPERIENCES } from '@/data/portfolioData';
import { CheckCircle2, Zap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#F2EEE7] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
            02 // INDUSTRY & LAB EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B1B1B]">
            Work Experience
          </h2>
          <p className="text-[#6E6964] text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on engineering roles building predictive ML models, high-performance vector retrieval backends, and healthcare applications.
          </p>
        </div>

        {/* Structured Timeline Layout */}
        <div className="space-y-8 relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-px bg-[#242126]/10" />

          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative pl-0 lg:pl-20 group"
            >
              {/* Timeline Marker Node */}
              <div className="hidden lg:flex absolute left-5 top-7 -translate-x-1/2 w-7 h-7 rounded-full bg-[#F8F5EF] border border-[#9B86A8] items-center justify-center group-hover:bg-[#9B86A8] transition-colors z-10">
                <div className="w-2 h-2 rounded-full bg-[#9B86A8] group-hover:bg-[#F8F5EF]" />
              </div>

              {/* Experience Card Surface */}
              <div className="warm-card rounded-2xl p-6 sm:p-8">
                
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-[#242126]/10 mb-5 gap-3">
                  <div>
                    <div className="flex items-center space-x-2.5">
                      <span className="font-mono text-xs font-bold text-[#9B86A8]">
                        0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1B1B1B] uppercase tracking-wide">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-sm font-sans font-semibold text-[#1B1B1B]">{exp.role}</span>
                      <span className="text-[#8C8680]">·</span>
                      <span className="text-xs font-mono text-[#9B86A8] bg-[#DDD4E3]/40 border border-[#9B86A8]/20 px-2.5 py-0.5 rounded">
                        PROJECT: {exp.projectName}
                      </span>
                    </div>
                    {exp.pfaSubtitle && (
                      <p className="font-serif italic text-xs sm:text-sm text-[#9B86A8] mt-2 font-medium leading-relaxed">
                        {exp.pfaSubtitle}
                      </p>
                    )}
                  </div>

                  {exp.providerNote && (
                    <div className="self-start md:self-auto font-mono text-xs text-[#9B86A8] bg-[#DDD4E3]/50 border border-[#9B86A8]/30 px-3 py-1 rounded-full flex items-center space-x-1.5 font-semibold">
                      <Zap className="w-3.5 h-3.5 text-[#9B86A8]" />
                      <span>{exp.providerNote}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#6E6964] text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                {/* Key Deliverables */}
                <div className="mb-6">
                  <h4 className="font-mono text-xs font-semibold text-[#6E6964] uppercase tracking-wider mb-3">
                    KEY TECHNICAL DELIVERABLES:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-[#1B1B1B]">
                        <CheckCircle2 className="w-4 h-4 text-[#9B86A8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Tags */}
                <div>
                  <h4 className="font-mono text-xs font-semibold text-[#6E6964] uppercase tracking-wider mb-3">
                    TECHNOLOGIES USED:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#F2EEE7] border border-[#242126]/10 font-mono text-[11px] font-semibold text-[#1B1B1B] uppercase tracking-wider hover:border-[#9B86A8] hover:text-[#9B86A8] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
