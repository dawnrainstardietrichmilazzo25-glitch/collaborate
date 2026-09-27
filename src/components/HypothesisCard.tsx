import React, { useState } from 'react';
import { ResearchHypothesis, PerspectiveMode, UserProfile } from '../types/research';
import { ThumbsUp, MessageSquare, Sparkles, Atom, Eye, Users, ChevronDown, ChevronUp, Send, CheckCircle2, BookmarkCheck } from 'lucide-react';

interface HypothesisCardProps {
  hypothesis: ResearchHypothesis;
  perspectiveMode: PerspectiveMode;
  currentUser: UserProfile;
  onToggleUpvote: (id: string) => void;
  onAddComment: (
    hypothesisId: string,
    content: string,
    type: 'mechanism_critique' | 'community_reality_check' | 'field_data_note'
  ) => void;
}

export const HypothesisCard: React.FC<HypothesisCardProps> = ({
  hypothesis,
  perspectiveMode,
  currentUser,
  onToggleUpvote,
  onAddComment,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [commentType, setCommentType] = useState<'mechanism_critique' | 'community_reality_check' | 'field_data_note'>(
    currentUser.role === 'professional_scientist' || currentUser.role === 'clinical_physician'
      ? 'mechanism_critique'
      : 'community_reality_check'
  );

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(hypothesis.id, commentText.trim(), commentType);
    setCommentText('');
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'spark':
        return 'text-amber-400';
      case 'formulation':
        return 'text-sky-400';
      case 'in_bench_testing':
        return 'text-cyan-400';
      case 'field_validated':
        return 'text-emerald-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/70 hover:border-slate-700/80 transition-all p-6 space-y-5">
      {/* Card Header: Metadata without static pill badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className={`font-medium ${getStageColor(hypothesis.stage)}`}>
            ● {hypothesis.stageLabel}
          </span>
          <span aria-hidden="true">·</span>
          <span>Initiated by {hypothesis.author.name}</span>
          <span aria-hidden="true">·</span>
          <span>{hypothesis.author.roleLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{hypothesis.coAuthorsCount} Collaborators</span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span>Peer Rigor: <strong className="text-cyan-300 font-semibold">{hypothesis.feasibilityVotes.scientificRigorousScore}%</strong></span>
          <span aria-hidden="true">·</span>
          <span>Community Impact: <strong className="text-amber-300 font-semibold">{hypothesis.feasibilityVotes.communityRelevanceScore}%</strong></span>
        </div>
      </div>

      {/* Main Title */}
      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
        {hypothesis.title}
      </h3>

      {/* Dual Lens Presentation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column: Citizen Intuition / Field Observation */}
        {(perspectiveMode === 'dual' || perspectiveMode === 'citizen') && (
          <div className={`p-4 rounded-lg bg-amber-950/15 border border-amber-900/30 space-y-3 ${
            perspectiveMode === 'citizen' ? 'lg:col-span-2' : ''
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <Eye className="w-3.5 h-3.5" />
                <span>The Citizen Spark & Field Observation</span>
              </div>
              <span className="text-[10px] text-amber-400/70 uppercase font-mono">Lived Experience</span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 block font-medium mb-0.5">Observation:</span>
                <p className="text-slate-200 leading-relaxed">
                  {hypothesis.citizenSpark.observation}
                </p>
              </div>

              <div className="pt-2 border-t border-amber-900/20">
                <span className="text-slate-400 block font-medium mb-0.5">The Intuitive Question:</span>
                <p className="text-amber-200 font-medium italic leading-relaxed">
                  "{hypothesis.citizenSpark.intuitiveQuestion}"
                </p>
              </div>

              <div className="pt-2 border-t border-amber-900/20">
                <span className="text-slate-400 block font-medium mb-0.5">Practical Human Benefit:</span>
                <p className="text-slate-300 leading-relaxed">
                  {hypothesis.citizenSpark.practicalImpact}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: Scientific Rigorous Mechanism */}
        {(perspectiveMode === 'dual' || perspectiveMode === 'science') && (
          <div className={`p-4 rounded-lg bg-cyan-950/15 border border-cyan-900/30 space-y-3 ${
            perspectiveMode === 'science' ? 'lg:col-span-2' : ''
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 font-mono">
                <Atom className="w-3.5 h-3.5" />
                <span>Biochemical & Thermodynamic Mechanism</span>
              </div>
              <span className="text-[10px] text-cyan-400/70 uppercase font-mono">Peer-Review Standard</span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 block font-medium mb-0.5">Theoretical Mechanism:</span>
                <p className="text-slate-200 leading-relaxed font-sans">
                  {hypothesis.scientificRigorous.theoreticalMechanism}
                </p>
              </div>

              <div className="pt-2 border-t border-cyan-900/20">
                <span className="text-slate-400 block font-medium mb-0.5">Physical / Chemical Principles:</span>
                <p className="text-slate-300 leading-relaxed">
                  {hypothesis.scientificRigorous.chemicalOrPhysicalPrinciples}
                </p>
              </div>

              <div className="pt-2 border-t border-cyan-900/20">
                <span className="text-slate-400 block font-medium mb-0.5">Analytical Verification Method:</span>
                <p className="text-cyan-200 font-mono text-[11px] leading-relaxed">
                  {hypothesis.scientificRigorous.analyticalMethods}
                </p>
              </div>

              {hypothesis.scientificRigorous.primaryCitations.length > 0 && (
                <div className="pt-2 border-t border-cyan-900/20 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Literature Citations: </span>
                  {hypothesis.scientificRigorous.primaryCitations.join(' · ')}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Collaborators Needed Section */}
      <div className="pt-1">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
          <Users className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-medium text-slate-300">Collaborator Roles Actively Recruited:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {hypothesis.collaboratorsNeeded.map((need, idx) => (
            <span
              key={idx}
              className="text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60"
            >
              + {need}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggleUpvote(hypothesis.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
              hypothesis.userHasUpvoted
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span className="font-medium font-mono tabular-nums">{hypothesis.feasibilityVotes.upvotes}</span>
            <span className="hidden sm:inline">Endorse</span>
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="font-mono tabular-nums">{hypothesis.comments.length}</span>
            <span>{isExpanded ? 'Hide Discussion' : 'Peer & Community Debates'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 ml-0.5" /> : <ChevronDown className="w-3.5 h-3.5 ml-0.5" />}
          </button>
        </div>

        <div className="text-[11px] text-slate-400">
          Created {hypothesis.createdAt}
        </div>
      </div>

      {/* Expandable Collaborative Discussion Section */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-semibold text-slate-300">
              Co-Review Debates & Reality Checks ({hypothesis.comments.length})
            </span>
            <span>All contributions undergo scientific & community review</span>
          </div>

          {/* Comment Stream */}
          <div className="space-y-3">
            {hypothesis.comments.map((comment) => (
              <div
                key={comment.id}
                className={`p-3.5 rounded-lg border text-xs space-y-1.5 ${
                  comment.type === 'mechanism_critique'
                    ? 'bg-cyan-950/20 border-cyan-900/40'
                    : comment.type === 'community_reality_check'
                    ? 'bg-amber-950/20 border-amber-900/40'
                    : 'bg-slate-800/60 border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{comment.authorName}</span>
                    <span className="text-slate-400">({comment.authorRole})</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className={`text-[11px] font-mono ${
                      comment.type === 'mechanism_critique'
                        ? 'text-cyan-400'
                        : 'text-amber-400'
                    }`}>
                      {comment.type === 'mechanism_critique' ? '🔬 Mechanism Critique' : '👥 Community Reality Check'}
                    </span>
                  </div>
                  <span className="text-slate-500 text-[10px]">{comment.timestamp}</span>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>

          {/* New Comment Submission Form */}
          <form onSubmit={handleSubmitComment} className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Contributing as <strong className="text-white">{currentUser.name}</strong> ({currentUser.roleLabel})
              </span>
              <div className="flex items-center gap-2">
                <label className="text-slate-400">Perspective Type:</label>
                <select
                  value={commentType}
                  onChange={(e) => setCommentType(e.target.value as any)}
                  className="bg-slate-800 border border-slate-700 text-xs rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="mechanism_critique">Scientific Mechanism Critique</option>
                  <option value="community_reality_check">Community Reality Check</option>
                  <option value="field_data_note">Field Observation Note</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share a mechanistic critique, chemical barrier, or community lived experience reality check..."
                rows={2}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
              />
              <button
                type="submit"
                disabled={!commentText.trim()}
                className="self-end px-3 py-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 text-slate-950 font-semibold rounded-lg text-xs flex items-center gap-1 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </article>
  );
};
