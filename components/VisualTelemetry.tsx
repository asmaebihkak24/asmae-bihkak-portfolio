'use client';

import { useState } from 'react';
import { Database, Cpu, Zap, ShieldCheck, ArrowRight, Layers, Code2, Server } from 'lucide-react';

const SYSTEM_PIPELINE_STAGES = [
  {
    step: '01',
    id: 'image',
    name: 'IMAGE',
    label: 'RAW ASSET INGESTION',
    tech: 'FastAPI / Upload',
    desc: 'Ingests editorial image files and validates file format headers.'
  },
  {
    step: '02',
    id: 'analysis',
    name: 'ANALYSIS',
    label: 'GROQ VISION LMM',
    tech: 'Groq LMM Vision',
    desc: 'Extracts deep visual context, dominant features, and multi-label tags.'
  },
  {
    step: '03',
    id: 'metadata',
    name: 'METADATA',
    label: 'STRUCTURED PARSING',
    tech: 'Pydantic / JSON Schema',
    desc: 'Serializes LMM responses into validated, strongly-typed JSON schema.'
  },
  {
    step: '04',
    id: 'embeddings',
    name: 'EMBEDDINGS',
    label: 'VECTOR ENCODING',
    tech: 'High-Dim Embeddings',
    desc: 'Transforms validated textual descriptions into dense vector representations.'
  },
  {
    step: '05',
    id: 'matching',
    name: 'MATCHING',
    label: 'PGVECTOR SEARCH',
    tech: 'PostgreSQL / pgvector',
    desc: 'Performs vector distance similarity search over indexed database tables.'
  },
  {
    step: '06',
    id: 'ranking',
    name: 'RANKING',
    label: 'MISMATCH GUARD & SORT',
    tech: 'Relevance Guard',
    desc: 'Filters low-confidence matches and returns sorted recommendations.'
  }
];

export default function VisualTelemetry() {
  const [activeStageId, setActiveStageId] = useState('analysis');

  const currentStage = SYSTEM_PIPELINE_STAGES.find((s) => s.id === activeStageId) || SYSTEM_PIPELINE_STAGES[1];

  return (
    <div className="relative w-full rounded-2xl border border-slate-800 bg-[#080d1a]/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl overflow-hidden group">
      {/* Top Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wider text-slate-300 uppercase">
            AI PIPELINE ARCHITECTURE
          </span>
        </div>
        <div className="flex items-center space-x-2 font-mono text-xs text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">
            GROQ + PGVECTOR
          </span>
        </div>
      </div>

      {/* Pipeline Flow Visualization */}
      <div className="mb-5">
        <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-2.5 block font-semibold">
          PIPELINE STAGES (CLICK TO INSPECT):
        </span>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
          {SYSTEM_PIPELINE_STAGES.map((stage) => {
            const isSelected = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-2 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/60 shadow-[0_0_12px_rgba(0,229,255,0.15)] text-cyan-300'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                <span className="font-mono text-[9px] block text-slate-400 mb-0.5">{stage.step}</span>
                <span className="font-mono text-[10px] font-extrabold uppercase truncate block">{stage.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Technical Inspector */}
      <div className="rounded-xl border border-slate-800/90 bg-slate-950 p-4 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              STAGE {currentStage.step}
            </span>
            <h4 className="font-mono text-xs sm:text-sm font-bold text-slate-100 uppercase">{currentStage.label}</h4>
          </div>
          <span className="font-mono text-[11px] text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            {currentStage.tech}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mt-2">
          {currentStage.desc}
        </p>

        {/* Pipeline Visual Diagram */}
        <div className="mt-3 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-[10px] text-slate-400">
          <div className="flex items-center space-x-1">
            <Layers className="w-3 h-3 text-cyan-400" />
            <span>MODULE: {currentStage.name} ENGINE</span>
          </div>
          <div className="flex items-center space-x-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VALIDATED</span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Note */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between font-mono text-[11px] text-slate-400">
        <div className="flex items-center space-x-1.5">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>FLOW: IMAGE → ANALYSIS → METADATA → EMBEDDINGS → MATCHING → RANKING</span>
        </div>
      </div>
    </div>
  );
}
