'use client';

import { CV_CARDS } from '@/data/portfolioData';
import { Eye, Download, FileText, ArrowUpRight } from 'lucide-react';

export default function CVSection() {
  return (
    <section id="cv" className="py-20 md:py-28 relative bg-[#F2EEE7] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
            06 // CURRICULUM VITAE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B1B1B]">
            CV
          </h2>
          <p className="text-[#6E6964] text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Explore my background, experience and projects.
          </p>
        </div>

        {/* Dual CV Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CV_CARDS.map((card) => (
            <div
              key={card.id}
              className="warm-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between pb-4 border-b border-[#242126]/10 mb-5">
                  <span className="font-mono text-xs font-bold text-[#9B86A8] px-3 py-1 rounded-full bg-[#DDD4E3]/40 border border-[#9B86A8]/20">
                    {card.lang} VERSION
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#F8F5EF] border border-[#242126]/5 text-[#9B86A8]">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-2xl font-bold text-[#1B1B1B] mb-2 group-hover:text-[#9B86A8] transition-colors">
                  {card.title}
                </h3>
                <p className="font-sans text-[#6E6964] text-sm leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              {/* Action Buttons: View & Download */}
              <div className="pt-5 border-t border-[#242126]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono text-xs">
                <a
                  href={card.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#242126] text-[#F8F5EF] hover:bg-[#9B86A8] font-bold transition-all duration-200"
                >
                  <Eye className="w-4 h-4" />
                  <span>{card.lang === 'FR' ? 'Voir le CV' : 'View CV'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={card.downloadUrl}
                  download={card.downloadFileName || true}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#F8F5EF] border border-[#242126]/15 text-[#1B1B1B] hover:border-[#9B86A8] hover:text-[#9B86A8] font-bold transition-all duration-200"
                >
                  <Download className="w-4 h-4 text-[#9B86A8]" />
                  <span>{card.lang === 'FR' ? 'Télécharger le PDF' : 'Download PDF'}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
