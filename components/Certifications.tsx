'use client';

import { CERTIFICATIONS, ACTIVITIES } from '@/data/portfolioData';
import { Award, Users, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-20 md:py-28 relative bg-[#F8F5EF] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
                07 // VERIFIED KNOWLEDGE
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#1B1B1B]">
                Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="warm-card rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-bold text-[#9B86A8] px-2 py-0.5 rounded bg-[#DDD4E3]/40 border border-[#9B86A8]/20">
                        {cert.badgeTag}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-[#9B86A8]" />
                    </div>
                    <h3 className="font-sans font-bold text-[#1B1B1B] text-sm mb-1 leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="pt-3 border-t border-[#242126]/10 mt-3 flex items-center justify-between gap-2">
                    <p className="text-xs text-[#6E6964] font-mono">
                      ISSUER: {cert.issuer}
                    </p>
                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 shrink-0 font-mono text-[10px] font-bold text-[#9B86A8] hover:text-[#1B1B1B] transition-colors uppercase tracking-wider"
                      >
                        VIEW CREDENTIAL
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Activities */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
                08 // COMMUNITY & LEADERSHIP
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#1B1B1B]">
                Activities & Initiatives
              </h2>
            </div>

            <div className="space-y-4">
              {ACTIVITIES.map((act, i) => (
                <div
                  key={i}
                  className="warm-card rounded-2xl p-5"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-[#F2EEE7] border border-[#242126]/5 text-[#9B86A8] shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#1B1B1B] text-base mb-1">
                        {act.title}
                      </h3>
                      <p className="text-xs text-[#9B86A8] font-mono mb-1 font-semibold">{act.role}</p>
                      <p className="text-xs text-[#6E6964]">{act.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
