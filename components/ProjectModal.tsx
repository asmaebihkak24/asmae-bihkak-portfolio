'use client';

import { useEffect } from 'react';
import { Project } from '@/data/types';
import { X, ArrowUpRight, CheckCircle2, Tag, Code2, ListOrdered, Lightbulb } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#1B1B1B]/40 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FBF9F5] border border-[#242126]/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#F2EEE7] text-[#6E6964] hover:text-[#1B1B1B] hover:bg-[#DDD4E3]/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Number Header */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="font-mono text-xs font-bold text-[#9B86A8] px-3 py-0.5 rounded-full bg-[#DDD4E3]/40 border border-[#9B86A8]/20">
            PROJECT {project.number}
          </span>
          <span className="font-mono text-xs text-[#6E6964]">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B1B1B] mb-4 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#6E6964] text-sm sm:text-base leading-relaxed mb-6 font-sans">
          {project.fullDescription || project.shortDescription}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 p-5 rounded-2xl bg-[#F2EEE7] border border-[#242126]/10">
            <h4 className="font-mono text-xs font-bold text-[#9B86A8] uppercase tracking-wider mb-3 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#9B86A8]" />
              <span>TECHNICAL HIGHLIGHTS & ARCHITECTURE</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#1B1B1B]">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-[#9B86A8] font-mono text-xs mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* How It Works */}
        {project.howItWorks && project.howItWorks.length > 0 && (
          <div className="mb-6 p-5 rounded-2xl bg-[#DDD4E3]/20 border border-[#9B86A8]/20">
            <h4 className="font-mono text-xs font-bold text-[#9B86A8] uppercase tracking-wider mb-3 flex items-center space-x-2">
              <ListOrdered className="w-4 h-4 text-[#9B86A8]" />
              <span>HOW IT WORKS</span>
            </h4>
            <ol className="space-y-2 text-xs sm:text-sm text-[#1B1B1B]">
              {project.howItWorks.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <span className="shrink-0 font-mono text-[10px] font-bold text-[#9B86A8] bg-[#DDD4E3]/40 border border-[#9B86A8]/20 rounded px-1.5 py-0.5 mt-0.5">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Key Outcome */}
        {project.keyOutcome && (
          <div className="mb-6 p-5 rounded-2xl bg-[#F2EEE7] border border-[#242126]/10">
            <h4 className="font-mono text-xs font-bold text-[#9B86A8] uppercase tracking-wider mb-2 flex items-center space-x-2">
              <Lightbulb className="w-4 h-4 text-[#9B86A8]" />
              <span>KEY OUTCOME</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#6E6964] leading-relaxed font-sans">
              {project.keyOutcome}
            </p>
          </div>
        )}

        {/* Technology Badges */}
        <div className="mb-8">
          <h4 className="font-mono text-xs font-semibold text-[#6E6964] uppercase tracking-wider mb-3 flex items-center space-x-1.5">
            <Tag className="w-3.5 h-3.5" />
            <span>TECHNOLOGY STACK</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-[#F2EEE7] border border-[#242126]/10 font-mono text-xs font-bold text-[#1B1B1B] uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#242126]/10 flex items-center justify-between">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#242126] text-[#F8F5EF] font-bold text-xs font-mono hover:bg-[#9B86A8] transition-colors"
            >
              <Code2 className="w-4 h-4" />
              <span>VIEW CODE ON GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <span />
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[#6E6964] hover:text-[#1B1B1B] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
