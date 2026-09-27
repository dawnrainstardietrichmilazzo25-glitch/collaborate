import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff, Wifi, CloudOff, Check } from 'lucide-react';

interface OfflineIndicatorProps {
  queuedItemsCount?: number;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ queuedItemsCount = 0 }) => {
  const isOnline = useOnlineStatus();

  if (isOnline && queuedItemsCount === 0) {
    return null;
  }

  if (!isOnline) {
    return (
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-950/90 border border-amber-600/50 px-3.5 py-2 text-xs font-medium text-amber-200 shadow-2xl backdrop-blur-md animate-in fade-in">
        <WifiOff className="w-4 h-4 text-amber-400 animate-pulse" />
        <div className="space-y-0.5">
          <div className="font-semibold text-white">Offline Field Mode Active</div>
          <div className="text-[11px] text-amber-300/80">
            {queuedItemsCount > 0
              ? `${queuedItemsCount} observations queued locally. Auto-syncs on reconnect.`
              : 'Cached protocols, lexicon & incubator fully accessible offline.'}
          </div>
        </div>
      </div>
    );
  }

  // Online with items syncing
  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-slate-900 border border-cyan-500/40 px-3.5 py-2 text-xs font-medium text-cyan-300 shadow-2xl backdrop-blur-md animate-in fade-in">
      <Wifi className="w-4 h-4 text-cyan-400" />
      <span>Connected · Syncing {queuedItemsCount} field logs...</span>
    </div>
  );
};
