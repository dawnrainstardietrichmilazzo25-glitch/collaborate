import React, { useState } from 'react';
import { LexiconTerm } from '../types/research';
import { BookOpen, Search, Sparkles, Volume2, ArrowRightLeft, Lightbulb, Microscope } from 'lucide-react';

interface BilingualLexiconProps {
  terms: LexiconTerm[];
}

export const BilingualLexicon: React.FC<BilingualLexiconProps> = ({ terms }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');

  const filteredTerms = terms.filter((term) => {
    if (selectedDomain !== 'all' && term.domain !== selectedDomain) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        term.scientificTerm.toLowerCase().includes(q) ||
        term.plainEnglishTranslation.toLowerCase().includes(q) ||
        term.realWorldAnalogy.toLowerCase().includes(q) ||
        term.whyItMattersToCitizens.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const domains = Array.from(new Set(terms.map((t) => t.domain)));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono uppercase tracking-wider mb-2">
          <span>The Translational Bridge</span>
          <span aria-hidden="true">·</span>
          <span>Dismantling Ivory Tower Jargon Barriers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Bilingual Science Lexicon
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mt-1">
          True collaboration fails when one side speaks in equations and the other speaks in lived symptoms. 
          The Bilingual Lexicon bridges rigorous academic definitions with concrete real-world analogies, 
          explaining both why it matters to everyday lives and how scientists measure it in the lab.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400 font-medium">Domain:</label>
          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Scientific Domains</option>
            {domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="relative min-w-[280px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search scientific term, plain English, or analogy..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Lexicon Term Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTerms.map((term) => (
          <div
            key={term.id}
            className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-700/80 transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Header: Domain */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{term.domain}</span>
                <span className="font-mono text-cyan-400/80 text-[11px]">Bilingual Concept</span>
              </div>

              {/* Terms: Scientific vs Plain English */}
              <div className="space-y-1">
                <div className="text-lg font-bold text-white tracking-tight flex items-baseline gap-2">
                  <span>{term.scientificTerm}</span>
                </div>
                {term.phoneticSpelling && (
                  <div className="text-xs font-mono text-cyan-300/80 italic">
                    Pronunciation: /{term.phoneticSpelling}/
                  </div>
                )}
              </div>

              {/* Plain English Translation Anchor */}
              <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-900/30">
                <span className="text-[11px] text-cyan-400 font-mono block uppercase">
                  Everyday Plain-Language Translation:
                </span>
                <span className="text-sm font-semibold text-white">
                  "{term.plainEnglishTranslation}"
                </span>
              </div>

              {/* Real World Analogy */}
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-amber-300">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Real-World Physical Analogy:</span>
                </div>
                <p className="text-slate-300 leading-relaxed italic bg-slate-950/60 p-3 rounded border border-slate-800/80">
                  {term.realWorldAnalogy}
                </p>
              </div>

              {/* Dual Takeaway Boxes */}
              <div className="grid grid-cols-1 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800/70">
                  <span className="text-amber-400 font-medium block mb-0.5">
                    Why It Matters to Communities & Patients:
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {term.whyItMattersToCitizens}
                  </p>
                </div>

                <div className="p-2.5 rounded bg-slate-950 border border-slate-800/70">
                  <span className="text-cyan-400 font-mono font-medium block mb-0.5">
                    How Researchers Measure It in the Lab:
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {term.howScientistsMeasureIt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
