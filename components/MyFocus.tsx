'use client';

import { FOCUS_COLUMNS } from '@/data/portfolioData';
import { Database, Brain, Cpu, Server } from 'lucide-react';

const FOCUS_ICONS: Record<string, React.ReactNode> = {
  "01": <Database className="w-5 h-5 text-[#9B86A8]" />,
  "02": <Brain className="w-5 h-5 text-[#9B86A8]" />,
  "03": <Cpu className="w-5 h-5 text-[#9B86A8]" />,
  "04": <Server className="w-5 h-5 text-[#9B86A8]" />,
};

export default function MyFocus() {
  return (
    <section className="py-16 md:py-24 relative bg-[#F2EEE7] border-y border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Label & Statement */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-3">
            MY FOCUS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1B1B1B] leading-tight">
            "I build intelligent systems that connect data, machine learning and real-world applications."
          </h2>
        </div>

        {/* 4 Column Focus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_COLUMNS.map((col) => (
            <div
              key={col.number}
              className="warm-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#242126]/10">
                  <span className="font-mono text-xs font-bold text-[#9B86A8]">
                    {col.number}
                  </span>
                  <div className="p-2 rounded-xl bg-[#F8F5EF] border border-[#242126]/5">
                    {FOCUS_ICONS[col.number]}
                  </div>
                </div>

                {/* Column Title */}
                <h3 className="font-sans font-bold text-sm sm:text-base text-[#1B1B1B] uppercase tracking-wider mb-4 group-hover:text-[#9B86A8] transition-colors">
                  {col.title}
                </h3>

                {/* Items List */}
                <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#6E6964]">
                  {col.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A9A8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
