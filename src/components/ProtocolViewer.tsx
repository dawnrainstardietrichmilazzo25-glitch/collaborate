import React, { useState, useEffect } from 'react';
import { DualProtocol, GrandChallenge } from '../types/research';
import { ShieldAlert, CheckCircle2, Clock, Play, Pause, RotateCcw, AlertTriangle, FlaskConical, Home, Wrench, Microscope } from 'lucide-react';

interface ProtocolViewerProps {
  protocols: DualProtocol[];
  challenges: GrandChallenge[];
  initialChallengeId?: string;
}

export const ProtocolViewer: React.FC<ProtocolViewerProps> = ({
  protocols,
  challenges,
  initialChallengeId,
}) => {
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>(
    protocols[0]?.id || ''
  );
  const [activeTrack, setActiveTrack] = useState<'both' | 'citizen' | 'wet_lab'>('both');
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  
  // Interactive Lab Timer
  const [timerSeconds, setTimerSeconds] = useState<number>(1800); // 30 min default
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const activeProtocol = protocols.find((p) => p.id === selectedProtocolId) || protocols[0];
  const challenge = challenges.find((c) => c.id === activeProtocol?.challengeId);

  const toggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey],
    }));
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  if (!activeProtocol) {
    return <div className="p-8 text-center text-slate-400">No protocol available.</div>;
  }

  const totalStepsCount = activeProtocol.wetLabTrack.steps.length + activeProtocol.citizenFieldTrack.steps.length;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = totalStepsCount > 0 ? Math.round((completedCount / totalStepsCount) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono uppercase tracking-wider mb-2">
          <span>Dual-Track Open Methodologies</span>
          <span aria-hidden="true">·</span>
          <span>Harmonized Field and Bench Procedures</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Co-Designed Testing Protocols
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mt-1">
          For scientific results to be universally trusted and rapidly scaled, research cannot remain trapped in multimillion-dollar cleanrooms. 
          Every protocol on Convergence has a parallel track: an ultra-precise Institutional Wet Lab standard, and a safe, accessible Citizen Field methodology.
        </p>
      </div>

      {/* Protocol Selector & Controls Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-xs text-slate-400 font-medium">Select Protocol:</label>
          <select
            value={selectedProtocolId}
            onChange={(e) => setSelectedProtocolId(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500 font-medium"
          >
            {protocols.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title} ({p.estimatedDuration})
              </option>
            ))}
          </select>
        </div>

        {/* Track Selector & Step Progress */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Overall Protocol Checklist:</span>
            <span className="font-mono text-cyan-400 font-semibold">{completedCount} of {totalStepsCount} done</span>
          </div>

          <div className="flex items-center gap-1 p-0.5 bg-slate-950 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveTrack('both')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTrack === 'both'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Side-by-Side Dual Track
            </button>
            <button
              onClick={() => setActiveTrack('citizen')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTrack === 'citizen'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Citizen Field Track
            </button>
            <button
              onClick={() => setActiveTrack('wet_lab')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                activeTrack === 'wet_lab'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Wet Lab Track
            </button>
          </div>
        </div>
      </div>

      {/* Protocol Banner & Safety Warning */}
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Target Grand Challenge: <strong className="text-white">{challenge?.title}</strong></span>
            <span aria-hidden="true">·</span>
            <span>Est. Run Duration: <strong className="text-cyan-400 font-mono">{activeProtocol.estimatedDuration}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono px-2 py-0.5 rounded border ${
              activeProtocol.safetyLevel === 'certified_wet_lab'
                ? 'bg-rose-950/40 text-rose-300 border-rose-800/40'
                : 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40'
            }`}>
              {activeProtocol.safetyLevel === 'certified_wet_lab' ? '▲ High-Containment Certified Lab' : '● Open Citizen / Maker Safe'}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-amber-950/20 border border-amber-900/30 text-xs text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-amber-300">Safety & Biosafety Protocol Guardrails:</span>
            <p className="text-slate-300 leading-relaxed">{activeProtocol.safetyWarning}</p>
          </div>
        </div>

        {/* Embedded Interactive Incubation / Run Timer */}
        <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Active Assay / Incubation Timer</div>
              <div className="text-2xl font-mono font-bold tabular-nums text-white">
                {formatTimer(timerSeconds)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTimerRunning ? 'Pause Timer' : 'Start Timer'}</span>
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds(1800);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dual Protocol Tracks Side-by-Side Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Track A: Citizen / Field Track */}
        {(activeTrack === 'both' || activeTrack === 'citizen') && (
          <div className={`space-y-6 ${activeTrack === 'citizen' ? 'lg:col-span-2' : ''}`}>
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 space-y-4">
              <div className="flex items-center justify-between border-b border-amber-900/20 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
                  <Home className="w-4 h-4" />
                  <span>Citizen Field & Makerspace Track</span>
                </div>
                <span className="text-[11px] text-amber-400/80 font-mono">Accessible Tools</span>
              </div>

              {/* Accessible Reagents & Tools */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium mb-1">Required Household / Maker Equipment:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {activeProtocol.citizenFieldTrack.accessibleTools.map((tool, idx) => (
                      <li key={idx}><span className="text-white font-medium">{tool}</span></li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium mb-1">Safe Reagents & Starters:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {activeProtocol.citizenFieldTrack.householdReagents.map((reagent, idx) => (
                      <li key={idx}><span className="text-white font-medium">{reagent}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Steps Checklist */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Citizen Execution Sequence
              </div>
              {activeProtocol.citizenFieldTrack.steps.map((step) => {
                const key = `citizen-${step.stepNumber}`;
                const isChecked = !!completedSteps[key];
                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => toggleStep(key)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-amber-950/20 border-amber-800/40 opacity-75'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${isChecked ? 'text-amber-400' : 'text-slate-600'}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-2 text-xs flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white">Step 0{step.stepNumber}</span>
                          <span className="text-[10px] text-amber-400 font-mono">Tap to verify</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed font-medium">
                          {step.action}
                        </p>
                        <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/80 text-[11px] space-y-1">
                          <div className="text-amber-300/90 font-medium">💡 Field Tip: {step.tips}</div>
                          <div className="text-slate-400">🔍 Visual Benchmark: {step.whatToLookFor}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Track B: Institutional Wet Lab Track */}
        {(activeTrack === 'both' || activeTrack === 'wet_lab') && (
          <div className={`space-y-6 ${activeTrack === 'wet_lab' ? 'lg:col-span-2' : ''}`}>
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/30 space-y-4">
              <div className="flex items-center justify-between border-b border-cyan-900/20 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-300 font-mono">
                  <Microscope className="w-4 h-4" />
                  <span>Institutional Wet Lab Track</span>
                </div>
                <span className="text-[11px] text-cyan-400/80 font-mono">GLP Analytical Standard</span>
              </div>

              {/* Analytical Instrumentation & Certified Reagents */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium mb-1 font-mono">Spectrometric & Physical Equipment:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 font-sans">
                    {activeProtocol.wetLabTrack.equipment.map((tool, idx) => (
                      <li key={idx}><span className="text-white font-medium">{tool}</span></li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium mb-1 font-mono">Analytical Standards & Certified Buffers:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 font-sans">
                    {activeProtocol.wetLabTrack.reagents.map((reagent, idx) => (
                      <li key={idx}><span className="text-white font-medium">{reagent}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Steps Checklist */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Wet Lab Analytical Sequence
              </div>
              {activeProtocol.wetLabTrack.steps.map((step) => {
                const key = `wetlab-${step.stepNumber}`;
                const isChecked = !!completedSteps[key];
                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => toggleStep(key)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-cyan-950/20 border-cyan-800/40 opacity-75'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${isChecked ? 'text-cyan-400' : 'text-slate-600'}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-2 text-xs flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white font-mono">Step 0{step.stepNumber}</span>
                          <span className="text-[10px] text-cyan-400 font-mono">Tap to verify</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed font-medium">
                          {step.action}
                        </p>
                        <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/80 text-[11px] space-y-1">
                          <div className="text-cyan-300/90 font-mono">⚙ Parameters: {step.parameters}</div>
                          <div className="text-rose-300/90 font-mono">▲ Critical Control Point: {step.criticalControlPoint}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
