import React from 'react';
import { UserProfile, PerspectiveMode } from '../types/research';
import { FlaskConical, Users, Plus, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  currentUser: UserProfile;
  onOpenRoleSwitcher: () => void;
  onOpenSubmitModal: () => void;
  perspectiveMode: PerspectiveMode;
  onPerspectiveChange: (mode: PerspectiveMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  currentUser,
  onOpenRoleSwitcher,
  onOpenSubmitModal,
  perspectiveMode,
  onPerspectiveChange,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => onTabChange('challenges')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Convergence
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => onTabChange('challenges')}
              className={`transition-colors whitespace-nowrap ${
                currentTab === 'challenges'
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Grand Challenges
            </button>
            <button
              onClick={() => onTabChange('hypotheses')}
              className={`transition-colors whitespace-nowrap ${
                currentTab === 'hypotheses'
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Hypothesis Incubator
            </button>
            <button
              onClick={() => onTabChange('protocols')}
              className={`transition-colors whitespace-nowrap ${
                currentTab === 'protocols'
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Dual-Track Protocols
            </button>
            <button
              onClick={() => onTabChange('data')}
              className={`transition-colors whitespace-nowrap ${
                currentTab === 'data'
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Open Registry
            </button>
            <button
              onClick={() => onTabChange('lexicon')}
              className={`transition-colors whitespace-nowrap ${
                currentTab === 'lexicon'
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Bilingual Lexicon
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Active Persona / Role Switcher */}
            <button
              onClick={onOpenRoleSwitcher}
              title="Switch user perspective or identity"
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-white transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] flex items-center justify-center font-semibold">
                {currentUser.avatarInitials}
              </div>
              <span className="hidden sm:inline-block max-w-[120px] truncate font-medium">
                {currentUser.name}
              </span>
              <span className="text-slate-500 hidden lg:inline">·</span>
              <span className="text-slate-400 hidden lg:inline text-[11px] truncate max-w-[110px]">
                {currentUser.role === 'professional_scientist' || currentUser.role === 'clinical_physician'
                  ? 'Professional'
                  : 'Citizen/Advocate'}
              </span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenSubmitModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm hover:shadow-cyan-400/20 transition-all whitespace-nowrap cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Propose Spark</span>
            </button>
          </div>
        </div>

        {/* Perspective Lens Sub-Bar: Clean functional segmented controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-t border-slate-900/80 gap-2">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-medium text-slate-300">Observation Lens:</span>
            <span>Switch how complex data is presented across the workspace</span>
          </div>

          <div className="flex items-center gap-1 p-0.5 bg-slate-900 border border-slate-800 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => onPerspectiveChange('dual')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                perspectiveMode === 'dual'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Dual Split View
            </button>
            <button
              onClick={() => onPerspectiveChange('citizen')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                perspectiveMode === 'citizen'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Citizen Perspective
            </button>
            <button
              onClick={() => onPerspectiveChange('science')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                perspectiveMode === 'science'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Scientific Rigor
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
