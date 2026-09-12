'use client';

import { PERSONAL_INFO } from '@/data/portfolioData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#F8F5EF] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
            01 // BACKGROUND & METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B1B1B]">
            About Me
          </h2>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-[#6E6964] text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-[#1B1B1B]">
              {PERSONAL_INFO.aboutText}
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              My engineering education at <strong className="text-[#1B1B1B]">ENSA Fès</strong> has provided me with a deep foundation in algorithmic optimization, statistical learning, relational data modeling, and software craftsmanship. Rather than viewing machine learning models in isolation, I focus on building robust backend infrastructure and API integrations that enable models to perform reliably in real-world environments.
            </p>
          </div>

          {/* Academic Identity Card */}
          <div className="lg:col-span-5 warm-card rounded-2xl p-6 relative overflow-hidden">
            <div className="font-mono text-xs text-[#9B86A8] uppercase tracking-wider mb-2 font-semibold">
              ACADEMIC IDENTITY
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1B1B1B] mb-1">ENSA Fès</h3>
            <p className="text-[#6E6964] text-sm mb-4">École Nationale des Sciences Appliquées de Fès</p>
            
            <div className="space-y-2 pt-4 border-t border-[#242126]/10 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-[#242126]/5">
                <span className="text-[#6E6964]">DEGREE:</span>
                <span className="text-[#1B1B1B] font-semibold">State Engineer (Ingénieur d'État)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#242126]/5">
                <span className="text-[#6E6964]">SPECIALIZATION:</span>
                <span className="text-[#9B86A8] font-semibold">Data Science & AI</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#6E6964]">STATUS:</span>
                <span className="text-[#1B1B1B] font-semibold">Final-Year Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Methodology Pipeline */}
        <div>
          <h3 className="font-mono text-xs font-semibold text-[#6E6964] uppercase tracking-widest mb-6">
            ENGINEERING PROCESS METHODOLOGY
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERSONAL_INFO.processSteps.map((item, index) => (
              <div
                key={item.step}
                className="warm-card rounded-xl p-5 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#9B86A8] px-2 py-0.5 rounded bg-[#DDD4E3]/40 border border-[#9B86A8]/20">
                    {item.step}
                  </span>
                  <span className="font-mono text-[10px] text-[#6E6964] uppercase tracking-wider">
                    STAGE {index + 1}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1B1B1B] group-hover:text-[#9B86A8] transition-colors mb-1.5">
                  {item.name}
                </h4>
                <p className="text-xs text-[#6E6964] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
