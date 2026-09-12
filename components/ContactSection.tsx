'use client';

import { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#F2EEE7] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl space-y-6">

          <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-1">
            09 // GET IN TOUCH
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1B1B1B] leading-tight">
            Let&apos;s build something <span className="text-[#9B86A8] italic">intelligent.</span>
          </h2>

          <p className="text-[#6E6964] text-base sm:text-lg leading-relaxed font-sans">
            I&apos;m interested in opportunities in <strong className="text-[#1B1B1B]">Data Science</strong>,{' '}
            <strong className="text-[#1B1B1B]">Artificial Intelligence</strong> and{' '}
            <strong className="text-[#9B86A8]">AI Engineering</strong>.
          </p>

          {/* Email Instant Copy Widget */}
          <div className="warm-card rounded-2xl p-4 space-y-3">
            <span className="font-mono text-xs text-[#6E6964] uppercase tracking-wider block font-semibold">
              DIRECT EMAIL CONTACT:
            </span>
            <div className="flex items-center justify-between gap-2 bg-[#F8F5EF] p-3 rounded-xl border border-[#242126]/10">
              <span className="font-mono text-xs sm:text-sm text-[#1B1B1B] font-bold truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#F2EEE7] border border-[#242126]/10 text-[#1B1B1B] hover:text-[#9B86A8] text-xs font-mono font-bold transition-all shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Direct Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#242126] text-[#F8F5EF] font-bold hover:bg-[#9B86A8] transition-colors shadow-sm uppercase tracking-wider"
            >
              <Mail className="w-4 h-4" />
              <span>Email me</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-5 py-3.5 rounded-full bg-[#F8F5EF] border border-[#242126]/15 text-[#1B1B1B] hover:border-[#9B86A8] hover:text-[#9B86A8] font-bold transition-colors uppercase tracking-wider"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-5 py-3.5 rounded-full bg-[#F8F5EF] border border-[#242126]/15 text-[#1B1B1B] hover:border-[#9B86A8] hover:text-[#9B86A8] font-bold transition-colors uppercase tracking-wider"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
