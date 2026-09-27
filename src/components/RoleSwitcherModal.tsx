import React from 'react';
import { UserProfile, UserRoleType } from '../types/research';
import { X, Check, ShieldCheck, UserCheck, Beaker, HeartHandshake, Compass } from 'lucide-react';

interface RoleSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  profiles: UserProfile[];
  currentUserId: string;
  onSelectUser: (user: UserProfile) => void;
}

export const RoleSwitcherModal: React.FC<RoleSwitcherModalProps> = ({
  isOpen,
  onClose,
  profiles,
  currentUserId,
  onSelectUser,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
              Identity & Lens Perspective
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Switch Active Contributor Persona
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          On Convergence, professionals (biochemists, toxicologists, metallurgists) and non-professionals 
          (patients, community water monitors, open hardware hackers) have equal publishing status. 
          Select a persona below to experience the platform from their perspective:
        </p>

        <div className="space-y-3">
          {profiles.map((profile) => {
            const isSelected = profile.id === currentUserId;
            return (
              <div
                key={profile.id}
                onClick={() => {
                  onSelectUser(profile);
                  onClose();
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                  isSelected
                    ? 'bg-cyan-950/30 border-cyan-500/60 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-cyan-300 font-mono text-sm flex items-center justify-center font-bold shrink-0">
                    {profile.avatarInitials}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{profile.name}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-cyan-400 font-medium">{profile.roleLabel}</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      {profile.affiliationOrBackground}
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed pt-1">
                      {profile.bio}
                    </p>
                    <div className="text-[10px] text-slate-500 font-mono pt-1">
                      {profile.contributionsCount} verified contributions on record
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <div className="p-1 rounded-full bg-cyan-400 text-slate-950 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
