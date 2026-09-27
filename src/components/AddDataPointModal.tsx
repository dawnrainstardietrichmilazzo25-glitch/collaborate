import React, { useState } from 'react';
import { GrandChallenge, UserProfile, CrowdsourcedDataPoint } from '../types/research';
import { X, MapPin, Database, CheckCircle2 } from 'lucide-react';

interface AddDataPointModalProps {
  isOpen: boolean;
  onClose: () => void;
  challenges: GrandChallenge[];
  currentUser: UserProfile;
  onSubmit: (newDataPoint: CrowdsourcedDataPoint) => void;
}

export const AddDataPointModal: React.FC<AddDataPointModalProps> = ({
  isOpen,
  onClose,
  challenges,
  currentUser,
  onSubmit,
}) => {
  const [challengeId, setChallengeId] = useState(challenges[0]?.id || '');
  const [location, setLocation] = useState('');
  const [parameterName, setParameterName] = useState('');
  const [numericValue, setNumericValue] = useState('');
  const [unit, setUnit] = useState('ng/mL');
  const [methodology, setMethodology] = useState<CrowdsourcedDataPoint['methodology']>(
    currentUser.role === 'professional_scientist' ? 'university_icp_ms' : 'citizen_test_strip'
  );
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location.trim() || !parameterName.trim() || !numericValue) return;

    const sampleId = `SMP-${Math.floor(100 + Math.random() * 900)}-${challengeId.slice(0, 4).toUpperCase()}`;

    onSubmit({
      id: `dp-${Date.now()}`,
      challengeId,
      sampleId,
      location: location.trim(),
      collectedBy: currentUser.name,
      collectorRole: currentUser.roleLabel,
      date: new Date().toISOString().split('T')[0],
      parameterName: parameterName.trim(),
      numericValue: parseFloat(numericValue),
      unit: unit.trim(),
      methodology,
      isVerified: currentUser.role === 'professional_scientist' || currentUser.role === 'clinical_physician',
      verificationNotes: notes.trim() || `Contributed by ${currentUser.name} using ${methodology}.`,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
              Open Access Ledger
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Log Sample Observation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Target Challenge *
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
            <label className="block text-slate-300 font-medium mb-1">
              Collection Location / Municipal Watershed *
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Wilmington, NC or Cape Fear River Mile 42"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Measured Parameter *
              </label>
              <input
                type="text"
                required
                value={parameterName}
                onChange={(e) => setParameterName(e.target.value)}
                placeholder="e.g. Serum PFOA or REE Leaching Yield"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Value *
                </label>
                <input
                  type="number"
                  step="any"
                  required
                  value={numericValue}
                  onChange={(e) => setNumericValue(e.target.value)}
                  placeholder="24.5"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 font-mono focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Unit
                </label>
                <input
                  type="text"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="ng/mL or %"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 font-mono focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Methodology / Instrumentation
            </label>
            <select
              value={methodology}
              onChange={(e) => setMethodology(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="citizen_test_strip">Citizen Colorimetric Test Strip / Kit</option>
              <option value="diy_colorimeter">DIY 3D-Printed Colorimeter (665 nm)</option>
              <option value="commercial_gc_ms">Certified Commercial GC-MS / LC-MS</option>
              <option value="university_icp_ms">University Spectrometry (ICP-MS/OES)</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Field Observations / Lab Calibration Notes
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Instrument calibration details, kit lot number, or sample history..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
            />
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
              className="px-5 py-2 font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              Log Sample Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
