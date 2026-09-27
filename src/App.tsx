/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  INITIAL_USER_PROFILES,
  INITIAL_GRAND_CHALLENGES,
  INITIAL_HYPOTHESES,
  INITIAL_PROTOCOLS,
  INITIAL_DATA_POINTS,
  INITIAL_LEXICON,
} from './data/mockData';
import {
  UserProfile,
  GrandChallenge,
  ResearchHypothesis,
  DualProtocol,
  CrowdsourcedDataPoint,
  PerspectiveMode,
} from './types/research';
import { Header } from './components/Header';
import { ChallengeView } from './components/ChallengeView';
import { HypothesisView } from './components/HypothesisView';
import { ProtocolViewer } from './components/ProtocolViewer';
import { DataRegistry } from './components/DataRegistry';
import { BilingualLexicon } from './components/BilingualLexicon';
import { SubmitSparkModal } from './components/SubmitSparkModal';
import { RoleSwitcherModal } from './components/RoleSwitcherModal';
import { AddDataPointModal } from './components/AddDataPointModal';
import { CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function App() {
  // State Initialization with LocalStorage fallbacks
  const [profiles] = useState<UserProfile[]>(INITIAL_USER_PROFILES);
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('convergence_current_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return INITIAL_USER_PROFILES[0];
  });

  const [challenges] = useState<GrandChallenge[]>(INITIAL_GRAND_CHALLENGES);
  const [selectedChallenge, setSelectedChallenge] = useState<GrandChallenge>(
    INITIAL_GRAND_CHALLENGES[0]
  );

  const [hypotheses, setHypotheses] = useState<ResearchHypothesis[]>(() => {
    const saved = localStorage.getItem('convergence_hypotheses');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return INITIAL_HYPOTHESES;
  });

  const [protocols] = useState<DualProtocol[]>(INITIAL_PROTOCOLS);
  const [dataPoints, setDataPoints] = useState<CrowdsourcedDataPoint[]>(() => {
    const saved = localStorage.getItem('convergence_datapoints');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return INITIAL_DATA_POINTS;
  });

  const [lexicon] = useState(INITIAL_LEXICON);

  // App View & Mode State
  const [currentTab, setCurrentTab] = useState<string>('challenges');
  const [targetChallengeFilter, setTargetChallengeFilter] = useState<string | undefined>();
  const [perspectiveMode, setPerspectiveMode] = useState<PerspectiveMode>('dual');

  // Modals
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isDataModalOpen, setIsDataModalOpen] = useState(false);

  // Toast Feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('convergence_current_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('convergence_hypotheses', JSON.stringify(hypotheses));
  }, [hypotheses]);

  useEffect(() => {
    localStorage.setItem('convergence_datapoints', JSON.stringify(dataPoints));
  }, [dataPoints]);

  // Handlers
  const handleToggleUpvote = (hypoId: string) => {
    setHypotheses((prev) =>
      prev.map((h) => {
        if (h.id === hypoId) {
          const isUpvoted = !!h.userHasUpvoted;
          return {
            ...h,
            userHasUpvoted: !isUpvoted,
            feasibilityVotes: {
              ...h.feasibilityVotes,
              upvotes: isUpvoted
                ? h.feasibilityVotes.upvotes - 1
                : h.feasibilityVotes.upvotes + 1,
            },
          };
        }
        return h;
      })
    );
  };

  const handleAddComment = (
    hypothesisId: string,
    content: string,
    type: 'mechanism_critique' | 'community_reality_check' | 'field_data_note'
  ) => {
    const newComment = {
      id: `c-${Date.now()}`,
      authorName: currentUser.name,
      authorRole: currentUser.roleLabel,
      isProfessional:
        currentUser.role === 'professional_scientist' ||
        currentUser.role === 'clinical_physician',
      timestamp: 'Just now',
      type,
      content,
    };

    setHypotheses((prev) =>
      prev.map((h) => {
        if (h.id === hypothesisId) {
          return {
            ...h,
            comments: [newComment, ...h.comments],
          };
        }
        return h;
      })
    );
    showToast('Contribution logged to peer review thread.');
  };

  const handleCreateHypothesis = (newHypoPartial: Partial<ResearchHypothesis>) => {
    const created: ResearchHypothesis = {
      id: `hypo-${Date.now()}`,
      challengeId: newHypoPartial.challengeId || selectedChallenge.id,
      title: newHypoPartial.title || 'Untitled Research Spark',
      stage: newHypoPartial.stage || 'spark',
      stageLabel: newHypoPartial.stageLabel || 'Citizen Spark',
      author: newHypoPartial.author || {
        name: currentUser.name,
        role: currentUser.role,
        roleLabel: currentUser.roleLabel,
        avatarInitials: currentUser.avatarInitials,
        isProfessional: false,
      },
      coAuthorsCount: 1,
      createdAt: new Date().toISOString().split('T')[0],
      citizenSpark: newHypoPartial.citizenSpark || {
        observation: '',
        intuitiveQuestion: '',
        practicalImpact: '',
      },
      scientificRigorous: newHypoPartial.scientificRigorous || {
        theoreticalMechanism: '',
        chemicalOrPhysicalPrinciples: '',
        analyticalMethods: '',
        primaryCitations: [],
      },
      collaboratorsNeeded: newHypoPartial.collaboratorsNeeded || [],
      feasibilityVotes: {
        scientificRigorousScore: 78,
        communityRelevanceScore: 92,
        upvotes: 1,
      },
      userHasUpvoted: true,
      comments: [],
    };

    setHypotheses([created, ...hypotheses]);
    showToast('Research spark published to Hypothesis Incubator!');
    setCurrentTab('hypotheses');
  };

  const handleAddDataPoint = (newDataPoint: CrowdsourcedDataPoint) => {
    setDataPoints([newDataPoint, ...dataPoints]);
    showToast(`Sample ${newDataPoint.sampleId} recorded in Decentralized Registry.`);
    setCurrentTab('data');
  };

  const handleNavigateToTab = (tab: string, challengeFilter?: string) => {
    setTargetChallengeFilter(challengeFilter);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Universal Top Bar Contract */}
      <Header
        currentTab={currentTab}
        onTabChange={(tab) => {
          setTargetChallengeFilter(undefined);
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentUser={currentUser}
        onOpenRoleSwitcher={() => setIsRoleModalOpen(true)}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        perspectiveMode={perspectiveMode}
        onPerspectiveChange={setPerspectiveMode}
      />

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'challenges' && (
          <ChallengeView
            challenges={challenges}
            selectedChallenge={selectedChallenge}
            onSelectChallenge={setSelectedChallenge}
            perspectiveMode={perspectiveMode}
            onNavigateToTab={handleNavigateToTab}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        )}

        {currentTab === 'hypotheses' && (
          <HypothesisView
            hypotheses={hypotheses}
            challenges={challenges}
            selectedChallengeId={targetChallengeFilter || selectedChallenge.id}
            perspectiveMode={perspectiveMode}
            currentUser={currentUser}
            onToggleUpvote={handleToggleUpvote}
            onAddComment={handleAddComment}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        )}

        {currentTab === 'protocols' && (
          <ProtocolViewer
            protocols={protocols}
            challenges={challenges}
            initialChallengeId={targetChallengeFilter || selectedChallenge.id}
          />
        )}

        {currentTab === 'data' && (
          <DataRegistry
            dataPoints={dataPoints}
            challenges={challenges}
            onOpenAddModal={() => setIsDataModalOpen(true)}
          />
        )}

        {currentTab === 'lexicon' && <BilingualLexicon terms={lexicon} />}
      </main>

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-slate-900 border border-cyan-500/50 text-white shadow-2xl text-xs flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <SubmitSparkModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        challenges={challenges}
        currentUser={currentUser}
        onSubmit={handleCreateHypothesis}
      />

      <RoleSwitcherModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
        profiles={profiles}
        currentUserId={currentUser.id}
        onSelectUser={(user) => {
          setCurrentUser(user);
          showToast(`Switched active perspective to ${user.name}`);
        }}
      />

      <AddDataPointModal
        isOpen={isDataModalOpen}
        onClose={() => setIsDataModalOpen(false)}
        challenges={challenges}
        currentUser={currentUser}
        onSubmit={handleAddDataPoint}
      />

      {/* Clean Minimalist Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 mt-16 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">Convergence</span>
            <span>· Open Science & Grassroots Translational Research Consortium</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Creative Commons CC-BY 4.0 Open Data</span>
            <span aria-hidden="true">·</span>
            <span>Zero Paywall Guarantee</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
