'use client';

import { BACKEND_JOURNEY } from '@/data/portfolioData';
import { Server, Database, Container, Shield, Bot, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

const STEP_ICONS = [
  <Server key="1" className="w-5 h-5 text-[#9B86A8]" />,
  <Database key="2" className="w-5 h-5 text-[#9B86A8]" />,
  <Container key="3" className="w-5 h-5 text-[#9B86A8]" />,
  <Shield key="4" className="w-5 h-5 text-[#9B86A8]" />,
  <Bot key="5" className="w-5 h-5 text-[#9B86A8]" />,
  <Cpu key="6" className="w-5 h-5 text-[#9B86A8]" />
];

export default function BackendJourney() {
  return (
    <section id="backend-ai" className="py-20 md:py-28 relative bg-[#F2EEE7] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
            04 // SYSTEM PROGRESSION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B1B1B]">
            Backend & AI Engineering
          </h2>
          <p className="text-[#6E6964] text-sm sm:text-base mt-2 max-w-2xl font-sans">
            From backend foundations to AI-powered systems.
          </p>
        </div>

        {/* 6 Step Progression Grid connected by delicate lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {BACKEND_JOURNEY.map((item, idx) => {
            return (
              <div
                key={item.step}
                className={`warm-card rounded-2xl p-6 relative flex flex-col justify-between group ${
                  item.isAdvanced ? 'border-[#9B86A8]/50 bg-[#FBF9F5]' : ''
                }`}
              >
                <div>
                  {/* Step Meta Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#242126]/10 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-[#9B86A8] px-2 py-0.5 rounded bg-[#DDD4E3]/40">
                        {item.step}
                      </span>
                      {item.isAdvanced && (
                        <span className="font-mono text-[9px] font-bold text-[#9B86A8] bg-[#DDD4E3]/60 px-2 py-0.5 rounded-full flex items-center space-x-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>ADVANCED</span>
                        </span>
                      )}
                    </div>
                    <div className="p-2 rounded-xl bg-[#F8F5EF] border border-[#242126]/5">
                      {STEP_ICONS[idx]}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl font-bold text-[#1B1B1B] mb-1 group-hover:text-[#9B86A8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#9B86A8] mb-4">
                    {item.subtitle}
                  </p>

                  {/* Focus Points */}
                  <div className="space-y-2 mb-6">
                    {item.focus.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs text-[#6E6964] font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9B86A8] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Tags */}
                <div className="pt-3 border-t border-[#242126]/10 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {item.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#F2EEE7] border border-[#242126]/10 text-[#1B1B1B] font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
