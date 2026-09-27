export type PerspectiveMode = 'dual' | 'citizen' | 'science';

export type UserRoleType = 
  | 'professional_scientist'
  | 'citizen_researcher'
  | 'impacted_community'
  | 'applied_engineer'
  | 'clinical_physician';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRoleType;
  roleLabel: string;
  affiliationOrBackground: string;
  avatarInitials: string;
  verifiedStatus: 'peer_reviewed' | 'community_lead' | 'field_collector' | 'clinical_fellow';
  bio: string;
  contributionsCount: number;
}

export interface GrandChallenge {
  id: string;
  slug: string;
  title: string;
  domain: string;
  bannerImage: string;
  summaryCitizen: string;
  summaryScience: string;
  urgencyMetrics: {
    label: string;
    value: string;
    unit: string;
    trend: string;
  }[];
  keyBottlenecks: {
    title: string;
    citizenDescription: string;
    scientificMechanism: string;
  }[];
  activeHypothesesCount: number;
  openFieldProtocolsCount: number;
  verifiedDataPointsCount: number;
}

export interface ResearchHypothesis {
  id: string;
  challengeId: string;
  title: string;
  stage: 'spark' | 'formulation' | 'in_bench_testing' | 'field_validated';
  stageLabel: string;
  author: {
    name: string;
    role: UserRoleType;
    roleLabel: string;
    avatarInitials: string;
    isProfessional: boolean;
  };
  coAuthorsCount: number;
  createdAt: string;
  
  // Dual-Lens Core
  citizenSpark: {
    observation: string;
    intuitiveQuestion: string;
    practicalImpact: string;
  };
  scientificRigorous: {
    theoreticalMechanism: string;
    chemicalOrPhysicalPrinciples: string;
    analyticalMethods: string;
    primaryCitations: string[];
  };

  collaboratorsNeeded: string[];
  feasibilityVotes: {
    scientificRigorousScore: number; // e.g. 84%
    communityRelevanceScore: number; // e.g. 96%
    upvotes: number;
  };
  userHasUpvoted?: boolean;
  
  comments: {
    id: string;
    authorName: string;
    authorRole: string;
    isProfessional: boolean;
    timestamp: string;
    type: 'mechanism_critique' | 'community_reality_check' | 'field_data_note';
    content: string;
  }[];
}

export interface DualProtocol {
  id: string;
  challengeId: string;
  hypothesisId?: string;
  title: string;
  estimatedDuration: string;
  safetyLevel: 'citizen_safe' | 'supervised_field' | 'certified_wet_lab';
  safetyWarning: string;
  
  // Dual track steps
  wetLabTrack: {
    equipment: string[];
    reagents: string[];
    steps: {
      stepNumber: number;
      action: string;
      parameters: string;
      criticalControlPoint: string;
    }[];
  };

  citizenFieldTrack: {
    accessibleTools: string[];
    householdReagents: string[];
    steps: {
      stepNumber: number;
      action: string;
      tips: string;
      whatToLookFor: string;
    }[];
  };
}

export interface CrowdsourcedDataPoint {
  id: string;
  challengeId: string;
  sampleId: string;
  location: string;
  collectedBy: string;
  collectorRole: string;
  date: string;
  parameterName: string;
  numericValue: number;
  unit: string;
  methodology: 'citizen_test_strip' | 'diy_colorimeter' | 'university_icp_ms' | 'commercial_gc_ms';
  isVerified: boolean;
  verificationNotes: string;
}

export interface LexiconTerm {
  id: string;
  domain: string;
  scientificTerm: string;
  phoneticSpelling?: string;
  plainEnglishTranslation: string;
  realWorldAnalogy: string;
  whyItMattersToCitizens: string;
  howScientistsMeasureIt: string;
}
