import React, { useState } from 'react';
import { ResearchMeetingSession } from '../services/meetService';
import { GrandChallenge, ResearchHypothesis } from '../types/research';
import { GoogleSignInButton } from './GoogleSignInButton';
import { User } from 'firebase/auth';
import { Video, Plus, Users, Copy, Check, ExternalLink, Calendar, ShieldCheck, LogOut } from 'lucide-react';

interface MeetViewProps {
  sessions: ResearchMeetingSession[];
  challenges: GrandChallenge[];
  hypotheses: ResearchHypothesis[];
  googleUser: User | null;
  accessToken: string | null;
  isLoggingIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onOpenCreateModal: () => void;
}

export const MeetView: React.FC<MeetViewProps> = ({
  sessions,
  challenges,
  hypotheses,
  googleUser,
  accessToken,
  isLoggingIn,
  onLogin,
  onLogout,
  onOpenCreateModal,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (sessionId: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(sessionId);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono uppercase tracking-wider">
            <span>Synchronous Collaboration</span>
            <span aria-hidden="true">·</span>
            <span>Google Meet Teleconferencing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Research Roundtables & Virtual Lab Syncs
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Bridging science and lived experience requires real human conversations. 
            Host and join live Google Meet video sessions directly tied to ongoing grand challenges, 
            lab protocol walkthroughs, and citizen data reviews.
          </p>
        </div>

        {googleUser ? (
          <button
            onClick={onOpenCreateModal}
            className="self-start md:self-auto px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Launch Meet Room</span>
          </button>
        ) : null}
      </div>

      {/* Google Authentication Status Card */}
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
        {googleUser ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-bold text-sm">
                {googleUser.displayName?.charAt(0) || googleUser.email?.charAt(0) || 'G'}
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">
                    {googleUser.displayName || 'Google User'}
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Meet Authorized</span>
                  </span>
                </div>
                <div className="text-slate-400">{googleUser.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCreateModal}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Create New Meet Space</span>
              </button>
              <button
                onClick={onLogout}
                className="px-3 py-2 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 border border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
                title="Sign out of Google"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" />
                <span>Connect with Google to Host Video Roundtables</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Signing in with your Google account enables Convergence to generate verified Google Meet spaces 
                with permission from your account, letting researchers and community contributors collaborate face-to-face.
              </p>
            </div>

            <div className="shrink-0">
              <GoogleSignInButton
                onClick={onLogin}
                isLoading={isLoggingIn}
                text="Sign in with Google to Host"
              />
            </div>
          </div>
        )}
      </div>

      {/* Active & Scheduled Video Sessions List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold text-slate-300 uppercase tracking-wider font-mono">
            Active Research Teleconferences ({sessions.length})
          </span>
          <span>Open guest access via Google Meet</span>
        </div>

        {sessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="p-6 rounded-xl border border-slate-800 bg-slate-900/70 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-cyan-400 font-medium truncate max-w-[200px]">
                      {session.topic}
                    </span>
                    <span className="font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Ready to Join</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {session.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {session.description}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-xs space-y-1 font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Meeting Code:</span>
                      <span className="text-cyan-300 font-semibold">{session.meetSpace.meetingCode}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 truncate">
                      <span>Host: {session.hostName}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                  <a
                    href={session.meetSpace.meetingUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Join Google Meet</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>

                  <button
                    onClick={() => handleCopyLink(session.id, session.meetSpace.meetingUri)}
                    title="Copy Google Meet Link"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedId === session.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-xl border border-dashed border-slate-800 bg-slate-900/40 space-y-3">
            <Video className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-sm text-slate-400">
              No active Google Meet rooms right now. Launch one above to host a collaborative roundtable!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
