import React, { useState } from 'react';
import { ResearchHypothesis, GrandChallenge, PerspectiveMode, UserProfile } from '../types/research';
import { HypothesisCard } from './HypothesisCard';
import { Plus, Search, Filter, Sparkles, BookOpen, Layers } from 'lucide-react';

interface HypothesisViewProps {
  hypotheses: ResearchHypothesis[];
  challenges: GrandChallenge[];
  selectedChallengeId?: string;
  perspectiveMode: PerspectiveMode;
  currentUser: UserProfile;
  onToggleUpvote: (id: string) => void;
  onAddComment: (
    hypothesisId: string,
    content: string,
    type: 'mechanism_critique' | 'community_reality_check' | 'field_data_note'
  ) => void;
  onOpenSubmitModal: () => void;
  onLaunchMeet?: (hypothesis: ResearchHypothesis) => void;
}

export const HypothesisView: React.FC<HypothesisViewProps> = ({
  hypotheses,
  challenges,
  selectedChallengeId,
  perspectiveMode,
  currentUser,
  onToggleUpvote,
  onAddComment,
  onOpenSubmitModal,
  onLaunchMeet,
}) => {
  const [filterChallenge, setFilterChallenge] = useState<string>(selectedChallengeId || 'all');
  const [filterStage, setFilterStage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredHypotheses = hypotheses.filter((h) => {
    if (filterChallenge !== 'all' && h.challengeId !== filterChallenge) return false;
    if (filterStage !== 'all' && h.stage !== filterStage) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = h.title.toLowerCase().includes(q);
      const inSpark = h.citizenSpark.observation.toLowerCase().includes(q) || h.citizenSpark.intuitiveQuestion.toLowerCase().includes(q);
      const inMech = h.scientificRigorous.theoreticalMechanism.toLowerCase().includes(q);
      if (!inTitle && !inSpark && !inMech) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono uppercase tracking-wider">
            <span>The Translational Pipeline</span>
            <span aria-hidden="true">·</span>
            <span>Where Citizen Sparks Become Testable Protocols</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Hypothesis Incubator
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every breakthrough begins with an intuitive question from lived experience or a mechanistic deduction in the lab.
            Explore ongoing co-developed hypotheses or contribute your own insight.
          </p>
        </div>

        <button
          onClick={onOpenSubmitModal}
          className="self-start md:self-auto px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Propose Solution Spark</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          {/* Challenge Selector */}
          <select
            value={filterChallenge}
            onChange={(e) => setFilterChallenge(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer"
          >
            <option value="all">All Grand Challenges</option>
            {challenges.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>

          {/* Stage Selector */}
          <select
            value={filterStage}
            onChange={(e) => setFilterStage(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500 cursor-pointer"
          >
            <option value="all">All Developmental Stages</option>
            <option value="spark">Citizen Spark (Ideation)</option>
            <option value="formulation">Formulation & Modeling</option>
            <option value="in_bench_testing">In Bench Testing</option>
            <option value="field_validated">Field Validated</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mechanisms, chemical keys, or symptoms..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Results Count & Pipeline Stat */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Showing <strong className="text-white font-mono">{filteredHypotheses.length}</strong> active collaborative hypotheses</span>
        <span className="hidden sm:inline">All hypotheses are protected under Open Science Creative Commons CC-BY 4.0</span>
      </div>

      {/* Hypothesis Cards Grid */}
      <div className="space-y-6">
        {filteredHypotheses.length > 0 ? (
          filteredHypotheses.map((hypo) => (
            <HypothesisCard
              key={hypo.id}
              hypothesis={hypo}
              perspectiveMode={perspectiveMode}
              currentUser={currentUser}
              onToggleUpvote={onToggleUpvote}
              onAddComment={onAddComment}
              onLaunchMeet={onLaunchMeet}
            />
          ))
        ) : (
          <div className="p-12 text-center rounded-xl border border-dashed border-slate-800 bg-slate-900/40">
            <p className="text-sm text-slate-400 mb-3">
              No hypotheses match your current filter parameters.
            </p>
            <button
              onClick={() => {
                setFilterChallenge('all');
                setFilterStage('all');
                setSearchQuery('');
              }}
              className="text-xs text-cyan-400 hover:underline"
            >
              Reset filters to show all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
