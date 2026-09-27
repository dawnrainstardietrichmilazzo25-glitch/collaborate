import React from 'react';
import { GrandChallenge, PerspectiveMode } from '../types/research';
import { ArrowRight, AlertTriangle, Atom, Eye, ShieldAlert, Sparkles, BookOpen, Layers } from 'lucide-react';

interface ChallengeViewProps {
  challenges: GrandChallenge[];
  selectedChallenge: GrandChallenge;
  onSelectChallenge: (challenge: GrandChallenge) => void;
  perspectiveMode: PerspectiveMode;
  onNavigateToTab: (tab: string, challengeFilter?: string) => void;
  onOpenSubmitModal: () => void;
}

export const ChallengeView: React.FC<ChallengeViewProps> = ({
  challenges,
  selectedChallenge,
  onSelectChallenge,
  perspectiveMode,
  onNavigateToTab,
  onOpenSubmitModal,
}) => {
  return (
    <div className="space-y-10">
      {/* Editorial Header / Platform Manifesto */}
      <section className="border-b border-slate-800 pb-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono tracking-wider uppercase mb-2">
            <span>Collaborative Translational Research</span>
            <span aria-hidden="true">·</span>
            <span>Bridging Academic Rigor & Grassroots Urgency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Where scientists and lived-experience citizens solve planetary challenges together.
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            Complex crises like systemic PFAS in the bloodstream and destructive rare-earth mining 
            cannot be solved in ivory tower silos alone. Convergence pairs professional biochemical 
            mechanisms with citizen field observations, open hardware, and low-cost testing kits.
          </p>
        </div>

        {/* Challenge Selector Tabs (Clean segmented control) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {challenges.map((c) => {
            const isSelected = c.id === selectedChallenge.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelectChallenge(c)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all text-left flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="truncate max-w-[240px] sm:max-w-none">{c.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Dominant Active Challenge Deep-Dive */}
      <section className="space-y-8">
        {/* Visual Hero Banner with Measured Contrast Scrim */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group">
          <div className="aspect-[21/9] sm:aspect-[24/9] w-full max-h-[380px] overflow-hidden relative">
            <img
              src={selectedChallenge.bannerImage}
              alt={selectedChallenge.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
              onError={(e) => {
                // Fallback styled container if image fails to render
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>

          {/* Banner Floating Metadata & Title */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-xs text-cyan-300 font-medium">
              <span>{selectedChallenge.domain}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedChallenge.activeHypothesesCount} Active Working Hypotheses</span>
              <span aria-hidden="true">·</span>
              <span>{selectedChallenge.verifiedDataPointsCount} Verified Biomarker/Field Samples</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {selectedChallenge.title}
            </h2>
          </div>
        </div>

        {/* Dual-Lens Problem Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Citizen / Lived Experience Lens */}
          {(perspectiveMode === 'dual' || perspectiveMode === 'citizen') && (
            <div className={`p-6 rounded-xl border bg-slate-900/50 backdrop-blur-sm ${
              perspectiveMode === 'citizen' ? 'lg:col-span-2 border-amber-500/30' : 'border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Eye className="w-4 h-4" />
                  <span>The Citizen & Human Perspective</span>
                </div>
                <span className="text-[11px] text-slate-400">Plain English · Practical Impact</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedChallenge.summaryCitizen}
              </p>
            </div>
          )}

          {/* Scientific Rigor Lens */}
          {(perspectiveMode === 'dual' || perspectiveMode === 'science') && (
            <div className={`p-6 rounded-xl border bg-slate-900/50 backdrop-blur-sm ${
              perspectiveMode === 'science' ? 'lg:col-span-2 border-blue-500/30' : 'border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  <Atom className="w-4 h-4" />
                  <span>The Scientific & Molecular Rigor</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Thermodynamics & Kinetics</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {selectedChallenge.summaryScience}
              </p>
            </div>
          )}
        </div>

        {/* Precision Quantitative Urgency Metrics (Tabular Numbers) */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Empirical Benchmark Data
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {selectedChallenge.urgencyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <div className="text-xs text-slate-400 mb-2 truncate" title={metric.label}>
                  {metric.label}
                </div>
                <div className="flex items-baseline gap-1.5 my-1">
                  <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">
                    {metric.value}
                  </span>
                  <span className="text-xs font-mono uppercase text-slate-400">
                    {metric.unit}
                  </span>
                </div>
                <div className="text-[11px] text-cyan-400/90 font-mono pt-1 border-t border-slate-800/80 mt-2 truncate">
                  {metric.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Bottlenecks Under Investigation */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Primary Bottlenecks Under Collaborative Investigation
            </h3>
            <span className="text-xs text-slate-400">
              {selectedChallenge.keyBottlenecks.length} Critical Vectors
            </span>
          </div>

          <div className="space-y-4">
            {selectedChallenge.keyBottlenecks.map((bottleneck, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                  <span className="w-5 h-5 rounded-md bg-slate-800 text-cyan-300 font-mono text-xs flex items-center justify-center">
                    0{i + 1}
                  </span>
                  <span>{bottleneck.title}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/30">
                    <div className="font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>How Non-Professionals & Patients Experience It:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {bottleneck.citizenDescription}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-cyan-950/20 border border-cyan-900/30">
                    <div className="font-semibold text-cyan-300 mb-1 flex items-center gap-1.5 font-mono">
                      <Atom className="w-3.5 h-3.5" />
                      <span>Biochemical & Thermodynamic Barrier:</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-sans">
                      {bottleneck.scientificMechanism}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Quick Launchers */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-900/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-white">
              Ready to contribute to this research track?
            </h4>
            <p className="text-xs text-slate-300">
              Submit an intuitive observation, review ongoing laboratory protocols, or log your community field sample data.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigateToTab('hypotheses', selectedChallenge.id)}
              className="px-4 py-2 text-xs font-semibold text-cyan-300 bg-slate-900 border border-cyan-500/40 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <span>Explore Hypotheses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigateToTab('protocols', selectedChallenge.id)}
              className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              <span>View Testing Protocols</span>
            </button>
            <button
              onClick={onOpenSubmitModal}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <span>Submit Solution Spark</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
