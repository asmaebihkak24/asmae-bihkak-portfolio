'use client';

import { useState } from 'react';
import { OTHER_PROJECTS } from '@/data/portfolioData';
import { Project } from '@/data/types';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function OtherProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-16 md:py-24 relative bg-[#F8F5EF] border-t border-[#242126]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-[#9B86A8] tracking-widest uppercase block mb-2">
              03.1 // ADDITIONAL REPOSITORIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B1B1B]">
              Other Technical Projects
            </h3>
          </div>
          <p className="text-[#6E6964] text-xs sm:text-sm font-mono uppercase">
            {OTHER_PROJECTS.length} REPOSITORIES SHIPPED
          </p>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="warm-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <FolderGit2 className="w-4 h-4 text-[#9B86A8]" />
                    <span className="font-mono text-[10px] text-[#6E6964] font-bold uppercase">
                      {project.number}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#6E6964] uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-serif font-bold text-[#1B1B1B] mb-2 group-hover:text-[#9B86A8] transition-colors">
                  {project.title}
                </h4>

                {/* Short Description */}
                <p className="text-[#6E6964] text-xs leading-relaxed mb-5 font-sans">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#F2EEE7] border border-[#242126]/10 font-mono text-[10px] font-bold text-[#1B1B1B] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-3 border-t border-[#242126]/10 font-mono text-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[#6E6964] hover:text-[#1B1B1B] transition-colors text-[11px] uppercase tracking-wider"
                  >
                    Details
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[#9B86A8] hover:text-[#1B1B1B] font-bold text-[11px] uppercase tracking-wider"
                  >
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
