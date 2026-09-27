import React, { useState } from 'react';
import { GrandChallenge, UserProfile, ResearchHypothesis } from '../types/research';
import { X, Sparkles, Atom, Eye, Users, AlertCircle } from 'lucide-react';

interface SubmitSparkModalProps {
  isOpen: boolean;
  onClose: () => void;
  challenges: GrandChallenge[];
  currentUser: UserProfile;
  onSubmit: (newHypothesis: Partial<ResearchHypothesis>) => void;
}

export const SubmitSparkModal: React.FC<SubmitSparkModalProps> = ({
  isOpen,
  onClose,
  challenges,
  currentUser,
  onSubmit,
}) => {
  const [challengeId, setChallengeId] = useState(challenges[0]?.id || '');
  const [title, setTitle] = useState('');
  const [stage, setStage] = useState<'spark' | 'formulation' | 'in_bench_testing'>('spark');
  
  // Citizen Spark Fields
  const [observation, setObservation] = useState('');
  const [intuitiveQuestion, setIntuitiveQuestion] = useState('');
  const [practicalImpact, setPracticalImpact] = useState('');

  // Scientific Rigor Fields
  const [theoreticalMechanism, setTheoreticalMechanism] = useState('');
  const [chemicalOrPhysicalPrinciples, setChemicalOrPhysicalPrinciples] = useState('');
  const [analyticalMethods, setAnalyticalMethods] = useState('');
  const [collaboratorsNeededStr, setCollaboratorsNeededStr] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !observation.trim()) return;

    const collaboratorsArray = collaboratorsNeededStr
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    onSubmit({
      challengeId,
      title: title.trim(),
      stage,
      stageLabel: stage === 'spark' ? 'Citizen Spark' : stage === 'formulation' ? 'Formulation & Modeling' : 'In Bench Testing',
      author: {
        name: currentUser.name,
        role: currentUser.role,
        roleLabel: currentUser.roleLabel,
        avatarInitials: currentUser.avatarInitials,
        isProfessional: currentUser.role === 'professional_scientist' || currentUser.role === 'clinical_physician',
      },
      coAuthorsCount: 1,
      createdAt: new Date().toISOString().split('T')[0],
      citizenSpark: {
        observation: observation.trim(),
        intuitiveQuestion: intuitiveQuestion.trim() || 'How can this natural phenomenon be translated into an accessible solution?',
        practicalImpact: practicalImpact.trim() || 'Empowering communities with open, low-cost intervention pathways.',
      },
      scientificRigorous: {
        theoreticalMechanism: theoreticalMechanism.trim() || 'Empirical field observation pending thermodynamic characterization.',
        chemicalOrPhysicalPrinciples: chemicalOrPhysicalPrinciples.trim() || 'Surface adsorption kinetics and intermolecular partitioning.',
        analyticalMethods: analyticalMethods.trim() || 'Split-sample verification via standard mass spectrometry or colorimetric assay.',
        primaryCitations: [],
      },
      collaboratorsNeeded: collaboratorsArray.length > 0 ? collaboratorsArray : ['Analytical chemist', 'Community field coordinator'],
      feasibilityVotes: {
        scientificRigorousScore: 75,
        communityRelevanceScore: 90,
        upvotes: 1,
      },
      userHasUpvoted: true,
      comments: [],
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono uppercase tracking-wider">
              <span>Co-Design Proposal</span>
              <span aria-hidden="true">·</span>
              <span>Open Science Protocol</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Propose a Research Spark or Mechanism
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-xs">
          {/* Submitter Persona Banner */}
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-300">
            <span>
              Submitting as: <strong className="text-white">{currentUser.name}</strong> ({currentUser.roleLabel})
            </span>
            <span className="text-[11px] font-mono text-cyan-400">Collaborative Peer Space</span>
          </div>

          {/* Target Grand Challenge & Stage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Target Grand Challenge *
              </label>
              <select
                value={challengeId}
                onChange={(e) => setChallengeId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                {challenges.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Initial Developmental Phase
              </label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="spark">Citizen Spark (Field Observation / Question)</option>
                <option value="formulation">Formulation & Theoretical Model</option>
                <option value="in_bench_testing">Ready for In-Bench Testing</option>
              </select>
            </div>
          </div>

          {/* Research Title */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Title of Proposal or Mechanism *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Natural Plant Saponin Micelles for Serum Organofluorine Binding"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Lens A: The Citizen Spark */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 space-y-3">
            <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-xs">
              <Eye className="w-4 h-4" />
              <span>Section 1: The Citizen Spark & Lived Experience</span>
            </div>

            <div>
              <label className="block text-slate-300 mb-1">
                What did you observe or experience? *
              </label>
              <textarea
                required
                rows={2}
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder="Describe your everyday observation, water testing anomaly, patient timeline, or maker experiment..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 mb-1">
                  The Intuitive Question:
                </label>
                <input
                  type="text"
                  value={intuitiveQuestion}
                  onChange={(e) => setIntuitiveQuestion(e.target.value)}
                  placeholder="e.g. Could common pectin bind PFAS in the gut?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">
                  Practical Human Impact:
                </label>
                <input
                  type="text"
                  value={practicalImpact}
                  onChange={(e) => setPracticalImpact(e.target.value)}
                  placeholder="e.g. Affordable home filter or $1 oral sachet"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Lens B: Scientific Mechanics & Testing */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/40 space-y-3">
            <div className="flex items-center gap-1.5 text-cyan-300 font-semibold text-xs font-mono">
              <Atom className="w-4 h-4" />
              <span>Section 2: Scientific Formulation & Mechanism</span>
            </div>

            <div>
              <label className="block text-slate-300 mb-1">
                Hypothesized Mechanism / Chemical Principles (Optional if citizen spark):
              </label>
              <textarea
                rows={2}
                value={theoreticalMechanism}
                onChange={(e) => setTheoreticalMechanism(e.target.value)}
                placeholder="Molecular interactions, enthalpy/entropy drivers, receptor kinetics, or biological pathways..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-1">
                Proposed Testing / Analytical Verification Method:
              </label>
              <input
                type="text"
                value={analyticalMethods}
                onChange={(e) => setAnalyticalMethods(e.target.value)}
                placeholder="e.g. LC-MS/MS, ICP-OES, or Open-Source Colorimetric Spectrometry"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Collaborators Needed */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Collaborator Roles You Are Looking For (comma-separated):
            </label>
            <input
              type="text"
              value={collaboratorsNeededStr}
              onChange={(e) => setCollaboratorsNeededStr(e.target.value)}
              placeholder="e.g. Analytical biochemist with mass spec, Community water testers, IRB advisor"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              Publish to Incubator
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
