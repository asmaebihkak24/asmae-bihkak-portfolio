'use client';

import { useState } from 'react';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { Project } from '@/data/types';
import { ArrowUpRight, ChevronRight, Layers, Sparkles } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeStage, setActiveStage] = useState<number>(1);

  const mainProject = FEATURED_PROJECTS[0];
  const project2 = FEATURED_PROJECTS[1];
  const project3 = FEATURED_PROJECTS[2];

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#F8F5EF] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
            03 // SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B1B1B]">
            Featured Projects
          </h2>
          <p className="text-[#6E6964] text-sm sm:text-base mt-2 max-w-2xl">
            A selection of projects where data, AI and engineering come together.
          </p>
        </div>

        {/* Editorial Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* PROJECT 01 — LARGE FEATURED ITEM */}
          <div className="lg:col-span-12 xl:col-span-8 warm-card rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
            
            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#9B86A8] px-3 py-1 rounded-full bg-[#DDD4E3]/40 border border-[#9B86A8]/20">
                  PROJECT {mainProject.number} · FEATURED
                </span>
                <span className="font-mono text-[11px] text-[#6E6964] uppercase font-medium">
                  {mainProject.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B1B1B] mb-3 group-hover:text-[#9B86A8] transition-colors">
                {mainProject.title}
              </h3>
              <p className="text-[#6E6964] text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {mainProject.shortDescription}
              </p>

              {/* Abstract Ivory/Lavender Architecture Pipeline */}
              <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#F2EEE7] border border-[#242126]/10 font-mono">
                <div className="flex items-center justify-between mb-3 border-b border-[#242126]/10 pb-2">
                  <span className="text-[11px] font-bold text-[#9B86A8] uppercase tracking-wider flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ABSTRACT PIPELINE FLOW</span>
                  </span>
                  <span className="text-[10px] text-[#6E6964]">
                    STAGE {activeStage} OF 5
                  </span>
                </div>

                {/* Pipeline Flow Badges */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                  {mainProject.pipelineStages?.map((stage, sIdx) => {
                    const isSelected = activeStage === sIdx + 1;
                    return (
                      <div key={stage.id} className="flex items-center">
                        <button
                          onClick={() => setActiveStage(sIdx + 1)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all border whitespace-nowrap ${
                            isSelected
                              ? 'bg-[#9B86A8] text-[#F8F5EF] border-[#9B86A8] shadow-sm'
                              : 'bg-[#FBF9F5] text-[#6E6964] border-[#242126]/10 hover:text-[#1B1B1B]'
                          }`}
                        >
                          {stage.title}
                        </button>
                        {sIdx < (mainProject.pipelineStages?.length || 0) - 1 && (
                          <ChevronRight className="w-3.5 h-3.5 text-[#8C8680] mx-0.5 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Active Stage Detail */}
                {mainProject.pipelineStages && (
                  <div className="mt-3 p-3 rounded-xl bg-[#FBF9F5] border border-[#242126]/5 text-xs">
                    <div className="flex items-center justify-between text-[#1B1B1B] font-bold mb-1">
                      <span className="text-[#9B86A8]">{mainProject.pipelineStages[activeStage - 1].title}</span>
                      <span className="text-[10px] text-[#6E6964] bg-[#F2EEE7] px-2 py-0.5 rounded">
                        {mainProject.pipelineStages[activeStage - 1].badge}
                      </span>
                    </div>
                    <p className="text-[#6E6964] text-[11px]">
                      {mainProject.pipelineStages[activeStage - 1].description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Tech Tags & Action Button */}
            <div className="pt-4 border-t border-[#242126]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {mainProject.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#F2EEE7] border border-[#242126]/10 font-mono text-[11px] font-bold text-[#1B1B1B] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(mainProject)}
                className="inline-flex items-center space-x-1.5 text-xs font-sans font-bold text-[#9B86A8] hover:text-[#1B1B1B] transition-colors group-hover:translate-x-1 duration-200 uppercase tracking-wider"
              >
                <span>View case study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN STACKED CARDS */}
          <div className="lg:col-span-12 xl:col-span-4 flex flex-col gap-6">
            
            {/* PROJECT 02: EV Battery Charging Optimization */}
            <div className="warm-card rounded-3xl p-6 relative flex flex-col justify-between group flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#9B86A8] px-2.5 py-0.5 rounded-full bg-[#DDD4E3]/40 border border-[#9B86A8]/20">
                    PROJECT {project2.number}
                  </span>
                  <span className="font-mono text-[10px] text-[#6E6964] uppercase">
                    ML · Deep Learning
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1B1B1B] mb-2 group-hover:text-[#9B86A8] transition-colors">
                  {project2.title}
                </h3>
                <p className="text-[#6E6964] text-xs leading-relaxed mb-4 font-sans">
                  {project2.shortDescription}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project2.technologies.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#F2EEE7] border border-[#242126]/10 font-mono text-[10px] font-bold text-[#1B1B1B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project2)}
                  className="inline-flex items-center space-x-1 text-xs font-sans font-bold text-[#9B86A8] hover:text-[#1B1B1B] transition-colors uppercase tracking-wider"
                >
                  <span>View case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* PROJECT 03: Diabetes Prediction */}
            <div className="warm-card rounded-3xl p-6 relative flex flex-col justify-between group flex-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#9B86A8] px-2.5 py-0.5 rounded-full bg-[#DDD4E3]/40 border border-[#9B86A8]/20">
                    PROJECT {project3.number}
                  </span>
                  <span className="font-mono text-[10px] text-[#6E6964] uppercase">
                    ML · Healthcare
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#1B1B1B] mb-2 group-hover:text-[#9B86A8] transition-colors">
                  {project3.title}
                </h3>
                <p className="text-[#6E6964] text-xs leading-relaxed mb-4 font-sans">
                  {project3.shortDescription}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project3.technologies.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#F2EEE7] border border-[#242126]/10 font-mono text-[10px] font-bold text-[#1B1B1B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project3)}
                  className="inline-flex items-center space-x-1 text-xs font-sans font-bold text-[#9B86A8] hover:text-[#1B1B1B] transition-colors uppercase tracking-wider"
                >
                  <span>View case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
