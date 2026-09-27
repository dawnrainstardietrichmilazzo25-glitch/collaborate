import React, { useState, useEffect, useRef } from 'react';
import { ChatChannel, ChatMessage } from '../types/chat';
import { UserProfile } from '../types/research';
import {
  Hash,
  Send,
  Sparkles,
  Bot,
  Users,
  ShieldAlert,
  Lightbulb,
  Atom,
  HelpCircle,
  Eye,
  WifiOff,
  Flame,
  ArrowRight,
  Maximize2,
  RefreshCw,
} from 'lucide-react';

interface ChatRoomProps {
  channels: ChatChannel[];
  messages: ChatMessage[];
  currentUser: UserProfile;
  isOnline: boolean;
  onSendMessage: (
    channelId: string,
    content: string,
    category?: ChatMessage['category'],
    triggerAI?: boolean
  ) => void;
  onAddReaction: (messageId: string, emoji: string) => void;
  onRequestAIAdminHelp: (
    channelId: string,
    prompt: string,
    specificAction?: string
  ) => Promise<void>;
  isAILoading: boolean;
}

export const ChatRoom: React.FC<ChatRoomProps> = ({
  channels,
  messages,
  currentUser,
  isOnline,
  onSendMessage,
  onAddReaction,
  onRequestAIAdminHelp,
  isAILoading,
}) => {
  const [activeChannelId, setActiveChannelId] = useState<string>(channels[0]?.id || '');
  const [inputText, setInputText] = useState('');
  const [askAIActive, setAskAIActive] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationPrompt, setConsultationPrompt] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeChannel = channels.find((c) => c.id === activeChannelId) || channels[0];
  const channelMessages = messages.filter((m) => m.channelId === activeChannelId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [channelMessages.length, isAILoading]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const shouldTriggerAI =
      askAIActive ||
      inputText.toLowerCase().includes('@ai') ||
      inputText.toLowerCase().includes('@admin') ||
      inputText.toLowerCase().includes('dr. synapse');

    const category =
      currentUser.role === 'professional_scientist' || currentUser.role === 'clinical_physician'
        ? 'mechanism'
        : 'citizen_observation';

    onSendMessage(activeChannelId, inputText.trim(), category, shouldTriggerAI);
    setInputText('');
    setAskAIActive(false);
  };

  const handleQuickPrompt = async (promptTitle: string) => {
    let fullPrompt = '';
    if (promptTitle === 'translate') {
      fullPrompt = 'Please translate the latest discussion in this channel into plain-English real-world analogies for non-professionals and patients.';
    } else if (promptTitle === 'thermodynamics') {
      fullPrompt = 'Please evaluate the thermodynamic feasibility, kinetics, and chemical binding mechanism of the proposed solution being discussed.';
    } else if (promptTitle === 'safety') {
      fullPrompt = 'Please review the chemical safety, biosafety containment, and personal protective equipment (PPE) requirements for executing this in makerspaces or clinics.';
    } else if (promptTitle === 'hypothesis') {
      fullPrompt = 'Synthesize the lived observation and mechanistic discussion here into a structured scientific hypothesis with control variables.';
    }

    await onRequestAIAdminHelp(activeChannelId, fullPrompt, promptTitle);
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-140px)] min-h-[620px] rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
      {/* Left Column: Channels List */}
      <aside className="w-full lg:w-72 bg-slate-900/90 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col shrink-0">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
            <span className="font-bold text-white text-sm">Global Research Channels</span>
          </div>
          <span className="text-[11px] font-mono text-cyan-400">
            {isOnline ? 'Online' : 'Offline Cache'}
          </span>
        </div>

        {/* AI Admin Banner */}
        <div className="p-3 mx-3 my-2.5 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/40 space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Dr. Synapse AI Admin</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/90 px-1.5 py-0.5 rounded border border-cyan-800/60">
              Active
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-normal">
            Moderates discussions, translates jargon into plain English, and checks thermodynamic feasibility.
          </p>
          <button
            onClick={() => setConsultationOpen(true)}
            className="w-full mt-1 py-1 px-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            <span>Consult AI Admin Directly</span>
          </button>
        </div>

        {/* Channels Navigation */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <div className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Scientific Tracks
          </div>
          {channels.map((chan) => {
            const isActive = chan.id === activeChannelId;
            return (
              <button
                key={chan.id}
                onClick={() => setActiveChannelId(chan.id)}
                className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 text-cyan-300 font-semibold border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Hash className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span className="truncate">{chan.name}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 shrink-0">
                  {chan.activeResearchersCount} peers
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Persona Footer */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 truncate">
            <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-cyan-300 font-mono text-[10px] flex items-center justify-center font-bold shrink-0">
              {currentUser.avatarInitials}
            </div>
            <div className="truncate">
              <span className="font-semibold text-white truncate block">{currentUser.name}</span>
              <span className="text-[10px] text-slate-400 truncate block">{currentUser.roleLabel}</span>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
        </div>
      </aside>

      {/* Main Chat Workspace */}
      <section className="flex-1 flex flex-col bg-slate-950/95 overflow-hidden">
        {/* Channel Header */}
        <div className="px-6 py-3.5 border-b border-slate-800 bg-slate-900/40 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Hash className="w-4 h-4 text-cyan-400" />
              <span>{activeChannel.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-xl truncate">
              {activeChannel.topic}
            </p>
          </div>

          {/* Quick AI Trigger Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => handleQuickPrompt('translate')}
              disabled={isAILoading}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-amber-950/30 hover:bg-amber-900/40 text-amber-300 border border-amber-800/50 flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50"
              title="Translate scientific jargon to plain English"
            >
              <Eye className="w-3 h-3" />
              <span>Translate Jargon</span>
            </button>
            <button
              onClick={() => handleQuickPrompt('thermodynamics')}
              disabled={isAILoading}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 border border-cyan-800/50 flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50"
              title="Evaluate thermodynamic and kinetic feasibility"
            >
              <Atom className="w-3 h-3" />
              <span>Verify Mechanism</span>
            </button>
            <button
              onClick={() => handleQuickPrompt('safety')}
              disabled={isAILoading}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-rose-950/30 hover:bg-rose-900/40 text-rose-300 border border-rose-800/50 flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50"
              title="Check safety and contamination hazards"
            >
              <ShieldAlert className="w-3 h-3" />
              <span>Safety Check</span>
            </button>
          </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {channelMessages.map((msg) => {
            const isSelf = msg.senderId === currentUser.id;
            const isAI = msg.isAIAdmin;

            return (
              <div
                key={msg.id}
                className={`p-4 rounded-xl border transition-all ${
                  isAI
                    ? 'bg-gradient-to-r from-cyan-950/30 via-slate-900/90 to-purple-950/20 border-cyan-500/50 shadow-lg'
                    : isSelf
                    ? 'bg-slate-900/90 border-cyan-500/20 ml-4 sm:ml-12'
                    : 'bg-slate-900/50 border-slate-800/80 mr-4 sm:mr-12'
                }`}
              >
                {/* Message Header */}
                <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full font-mono text-[10px] flex items-center justify-center font-bold ${
                        isAI
                          ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-400/50'
                          : 'bg-slate-800 text-cyan-300 border border-slate-700'
                      }`}
                    >
                      {msg.senderAvatar}
                    </div>
                    <span className={`font-semibold ${isAI ? 'text-cyan-300' : 'text-white'}`}>
                      {msg.senderName}
                    </span>
                    <span className="text-slate-400 text-[11px]">({msg.senderRole})</span>
                    {isAI && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                        Admin Moderator
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    {msg.isOfflineQueued && (
                      <span className="text-amber-400 flex items-center gap-1 font-mono">
                        <WifiOff className="w-3 h-3" />
                        <span>Queued Offline</span>
                      </span>
                    )}
                    <span>{msg.timestamp}</span>
                  </div>
                </div>

                {/* Message Content */}
                <div className="text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {msg.content}
                </div>

                {/* Reactions */}
                <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2 border-t border-slate-800/50">
                  {msg.reactions?.map((reaction, idx) => (
                    <button
                      key={idx}
                      onClick={() => onAddReaction(msg.id, reaction.emoji)}
                      className={`px-2 py-0.5 rounded-full text-[11px] border transition-colors flex items-center gap-1 cursor-pointer ${
                        reaction.userReacted
                          ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{reaction.emoji}</span>
                      <span className="font-mono tabular-nums">{reaction.count}</span>
                    </button>
                  ))}

                  {/* Add reaction shortcuts */}
                  <button
                    onClick={() => onAddReaction(msg.id, '🔬')}
                    className="px-1.5 py-0.5 rounded hover:bg-slate-800 text-slate-500 hover:text-slate-300 text-[11px] transition-colors"
                    title="React with Science"
                  >
                    +🔬
                  </button>
                  <button
                    onClick={() => onAddReaction(msg.id, '💡')}
                    className="px-1.5 py-0.5 rounded hover:bg-slate-800 text-slate-500 hover:text-slate-300 text-[11px] transition-colors"
                    title="React with Spark"
                  >
                    +💡
                  </button>
                </div>
              </div>
            );
          })}

          {/* AI Thinking indicator */}
          {isAILoading && (
            <div className="p-4 rounded-xl border border-cyan-500/40 bg-cyan-950/20 flex items-center gap-3 text-xs text-cyan-300 animate-pulse">
              <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
              <span>Dr. Synapse AI is evaluating chemical principles, safety checks, and plain-English analogies...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-4 border-t border-slate-800 bg-slate-900/60 space-y-2">
          {/* Ask AI toggle & quick info */}
          <div className="flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => setAskAIActive(!askAIActive)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                askAIActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>
                {askAIActive ? 'AI Admin Reply Requested' : 'Tag @ai to request AI Admin synthesis'}
              </span>
            </button>

            <span className="text-[11px] text-slate-500 hidden sm:inline">
              {!isOnline ? 'Offline: messages will auto-sync when online' : 'Shift+Enter for newline'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              placeholder={`Message #${activeChannel.name} or type @ai to ask for thermodynamic review or plain-English translation...`}
              rows={2}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
            />

            <button
              type="submit"
              disabled={!inputText.trim()}
              className="self-end px-4 py-3 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-30 disabled:hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </form>
      </section>

      {/* AI Admin Direct Consultation Modal */}
      {consultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Bot className="w-5 h-5 text-cyan-400" />
                <span>Dr. Synapse AI — Research & Protocol Consultation</span>
              </div>
              <button
                onClick={() => setConsultationOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Dr. Synapse AI helps translate everyday community symptoms or water anomalies into rigorous chemical mechanisms, 
              evaluates thermodynamics, and writes dual-track protocols for citizens and labs.
            </p>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-200">
                What question or idea would you like Dr. Synapse AI to review?
              </label>
              <textarea
                value={consultationPrompt}
                onChange={(e) => setConsultationPrompt(e.target.value)}
                placeholder="e.g. Can natural starch from potatoes or cyclodextrin remove PFAS from well water? How do we test it safely at home vs in a lab?"
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setConsultationOpen(false)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  if (!consultationPrompt.trim()) return;
                  const prompt = consultationPrompt;
                  setConsultationPrompt('');
                  setConsultationOpen(false);
                  await onRequestAIAdminHelp(activeChannelId, prompt);
                }}
                disabled={!consultationPrompt.trim() || isAILoading}
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit to Channel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
