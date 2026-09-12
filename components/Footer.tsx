'use client';

import { PERSONAL_INFO } from '@/data/portfolioData';
import { Award, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#242126]/10 bg-[#F8F5EF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#242126]/10">
          
          {/* Identity */}
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-[#1B1B1B] tracking-wide text-base uppercase">
              {PERSONAL_INFO.name}
            </h3>
            <p className="font-mono text-xs text-[#9B86A8] uppercase tracking-wider font-semibold">
              {PERSONAL_INFO.titleSub}
            </p>
            <p className="font-sans text-xs text-[#6E6964]">
              {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Official FlyRank Graduate Neutral Badge */}
          <div className="warm-card rounded-2xl p-3.5 flex items-center space-x-3.5">
            <div className="p-2 rounded-xl bg-[#DDD4E3]/50 text-[#9B86A8]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-mono text-xs font-bold text-[#1B1B1B] uppercase tracking-wider">
                  FlyRank Graduate
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="font-mono text-[10px] text-[#6E6964] block mt-0.5">
                {PERSONAL_INFO.flyrankVerificationNote}
              </span>
            </div>
          </div>

          {/* Nav & Social Links */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#6E6964]">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9B86A8] transition-colors uppercase font-medium"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9B86A8] transition-colors uppercase font-medium"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#9B86A8] transition-colors uppercase font-medium"
            >
              Email
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6E6964]">
          <p>© 2026 Asmae Bihkak. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-[#9B86A8] transition-colors flex items-center space-x-1 uppercase font-medium"
          >
            <span>BACK TO TOP ↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
