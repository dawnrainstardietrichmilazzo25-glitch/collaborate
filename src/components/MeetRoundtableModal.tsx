import React, { useState } from 'react';
import { GrandChallenge, ResearchHypothesis } from '../types/research';
import { createGoogleMeetSpace, ResearchMeetingSession } from '../services/meetService';
import { X, Video, Users, Link2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { User } from 'firebase/auth';

interface MeetRoundtableModalProps {
  isOpen: boolean;
  onClose: () => void;
  challenges: GrandChallenge[];
  hypotheses: ResearchHypothesis[];
  initialChallengeId?: string;
  initialHypothesisId?: string;
  googleUser: User | null;
  accessToken: string | null;
  onSessionCreated: (session: ResearchMeetingSession) => void;
}

export const MeetRoundtableModal: React.FC<MeetRoundtableModalProps> = ({
  isOpen,
  onClose,
  challenges,
  hypotheses,
  initialChallengeId,
  initialHypothesisId,
  googleUser,
  accessToken,
  onSessionCreated,
}) => {
  const [title, setTitle] = useState('');
  const [challengeId, setChallengeId] = useState(initialChallengeId || challenges[0]?.id || '');
  const [hypothesisId, setHypothesisId] = useState(initialHypothesisId || 'none');
  const [description, setDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCreateSpace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !accessToken || !googleUser) return;

    setIsCreating(true);
    setError(null);

    try {
      // Direct call to Google Meet API
      const meetSpace = await createGoogleMeetSpace(accessToken);

      const targetChallenge = challenges.find((c) => c.id === challengeId);
      const newSession: ResearchMeetingSession = {
        id: `meet-sess-${Date.now()}`,
        title: title.trim(),
        topic: targetChallenge?.title || 'Open Science Roundtable',
        challengeId,
        hypothesisId: hypothesisId !== 'none' ? hypothesisId : undefined,
        hostName: googleUser.displayName || 'Convergence Researcher',
        hostEmail: googleUser.email || '',
        meetSpace,
        createdAt: new Date().toISOString(),
        status: 'active',
        description: description.trim() || 'Collaborative sync between lab researchers and citizen monitors.',
        attendeesCount: 1,
      };

      onSessionCreated(newSession);
      onClose();
    } catch (err: any) {
      console.error('Failed to create Google Meet space:', err);
      setError(err?.message || 'Failed to create Google Meet space. Please check permissions.');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono uppercase tracking-wider">
              <span>Google Meet Live Collab</span>
              <span aria-hidden="true">·</span>
              <span>Research Roundtable</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Create Google Meet Room
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 text-xs text-rose-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleCreateSpace} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Roundtable Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. PFAS Serum Clearance Trial Planning Sync"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Associated Grand Challenge *
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
              Link to Specific Hypothesis (Optional)
            </label>
            <select
              value={hypothesisId}
              onChange={(e) => setHypothesisId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="none">General Challenge Discussion</option>
              {hypotheses
                .filter((h) => h.challengeId === challengeId)
                .map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.title}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Discussion Agenda / Objectives
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Key discussion topics, data points to review, or experimental protocol checkpoints..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
            />
          </div>

          {/* Explicit User Confirmation Note */}
          <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-900/30 text-[11px] text-slate-300 space-y-1">
            <span className="font-semibold text-cyan-300 block">
              Google Meet Space Creation Confirmation:
            </span>
            <p>
              Submitting this form will call the Google Meet API with permission from your account to generate a new meeting room URL with open guest access for Convergence collaborators.
            </p>
          </div>

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
              disabled={isCreating || !title.trim()}
              className="px-5 py-2 font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Video className="w-4 h-4" />
              <span>{isCreating ? 'Provisioning Meet Room...' : 'Launch Google Meet Space'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
