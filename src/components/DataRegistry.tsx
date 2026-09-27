import React, { useState } from 'react';
import { CrowdsourcedDataPoint, GrandChallenge } from '../types/research';
import { Database, Plus, Search, Filter, ShieldCheck, AlertCircle, BarChart3, MapPin, CheckCircle2 } from 'lucide-react';

interface DataRegistryProps {
  dataPoints: CrowdsourcedDataPoint[];
  challenges: GrandChallenge[];
  onOpenAddModal: () => void;
}

export const DataRegistry: React.FC<DataRegistryProps> = ({
  dataPoints,
  challenges,
  onOpenAddModal,
}) => {
  const [filterChallenge, setFilterChallenge] = useState<string>('all');
  const [filterVerified, setFilterVerified] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredData = dataPoints.filter((dp) => {
    if (filterChallenge !== 'all' && dp.challengeId !== filterChallenge) return false;
    if (filterVerified === 'verified' && !dp.isVerified) return false;
    if (filterVerified === 'unverified' && dp.isVerified) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        dp.sampleId.toLowerCase().includes(q) ||
        dp.location.toLowerCase().includes(q) ||
        dp.parameterName.toLowerCase().includes(q) ||
        dp.collectedBy.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Calculate highest numeric value for visual scaling
  const maxValue = Math.max(...filteredData.map((d) => d.numericValue), 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono uppercase tracking-wider">
            <span>Decentralized Empirical Ledger</span>
            <span aria-hidden="true">·</span>
            <span>Open Access Data Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Crowdsourced Sample & Biomarker Registry
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Real data from real people and partner university labs. Impacted citizens submit water readings 
            and blood test timelines, while researchers validate samples and log spectroscopic yields.
          </p>
        </div>

        <button
          onClick={onOpenAddModal}
          className="self-start md:self-auto px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Contribute Sample Observation</span>
        </button>
      </div>

      {/* Visual Data Distribution Strip */}
      <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span>Active Comparative Sample Values</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {filteredData.length} Data Entries Displayed
          </span>
        </div>

        {/* Visual Bar Spectrum */}
        <div className="space-y-3 pt-2">
          {filteredData.slice(0, 5).map((dp) => {
            const barWidthPercent = Math.min(Math.max((dp.numericValue / maxValue) * 100, 5), 100);
            return (
              <div key={dp.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 truncate max-w-[280px] sm:max-w-md">
                    <span className="font-mono text-cyan-300 font-semibold">{dp.sampleId}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-300 truncate">{dp.parameterName}</span>
                    <span className="text-slate-500 text-[11px] hidden sm:inline">({dp.location})</span>
                  </div>
                  <div className="font-mono tabular-nums text-white font-semibold">
                    {dp.numericValue} <span className="text-slate-400 text-[11px] font-normal">{dp.unit}</span>
                  </div>
                </div>

                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${barWidthPercent}%` }}
                    className={`h-full rounded-full transition-all duration-500 ${
                      dp.isVerified ? 'bg-cyan-400' : 'bg-amber-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={filterChallenge}
            onChange={(e) => setFilterChallenge(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Challenges</option>
            {challenges.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>

          <select
            value={filterVerified}
            onChange={(e) => setFilterVerified(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Verification Tiers</option>
            <option value="verified">Verified Lab Standard</option>
            <option value="unverified">Community Field Submissions</option>
          </select>
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sample ID, location, or collector..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/60">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 font-mono uppercase text-[11px]">
              <tr>
                <th className="py-3 px-4">Sample ID & Date</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Collector & Role</th>
                <th className="py-3 px-4">Observed Metric</th>
                <th className="py-3 px-4 text-right">Value</th>
                <th className="py-3 px-4">Methodology & Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredData.map((dp) => (
                <tr key={dp.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono">
                    <span className="text-cyan-300 font-semibold">{dp.sampleId}</span>
                    <span className="block text-[11px] text-slate-500">{dp.date}</span>
                  </td>

                  <td className="py-3.5 px-4 text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                      <span>{dp.location}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="font-medium text-white">{dp.collectedBy}</div>
                    <div className="text-[11px] text-slate-400">{dp.collectorRole}</div>
                  </td>

                  <td className="py-3.5 px-4 text-slate-200 font-medium">
                    {dp.parameterName}
                  </td>

                  <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                    <span className="text-base font-bold text-white">{dp.numericValue}</span>{' '}
                    <span className="text-slate-400 text-[11px]">{dp.unit}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      {dp.isVerified ? (
                        <span className="text-emerald-400 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Lab Verified</span>
                        </span>
                      ) : (
                        <span className="text-amber-400 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Community Submitted</span>
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 max-w-xs leading-normal">
                      {dp.verificationNotes}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
