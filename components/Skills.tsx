'use client';

import { SKILL_CATEGORIES } from '@/data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#F8F5EF] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
            05 // TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B1B1B]">
            Skills & Technologies
          </h2>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((catGroup) => (
            <div
              key={catGroup.category}
              className="warm-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="pb-3 border-b border-[#242126]/10 mb-4">
                  <h3 className="font-mono text-xs font-bold text-[#9B86A8] uppercase tracking-wider">
                    {catGroup.category}
                  </h3>
                </div>

                {/* Skill Editorial Tags */}
                <div className="flex flex-wrap gap-2">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.tag}
                      className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all ${
                        skill.isPrimary
                          ? 'bg-[#F2EEE7] text-[#1B1B1B] border-[#9B86A8]/40 font-bold shadow-xs'
                          : 'bg-[#FBF9F5] text-[#6E6964] border-[#242126]/10 font-medium'
                      }`}
                    >
                      {skill.isPrimary && <span className="w-1.5 h-1.5 rounded-full bg-[#9B86A8]" />}
                      <span>{skill.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Count */}
              <div className="pt-4 mt-6 border-t border-[#242126]/10 text-right">
                <span className="font-mono text-[10px] text-[#6E6964] uppercase">
                  {catGroup.skills.length} MODULES
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
