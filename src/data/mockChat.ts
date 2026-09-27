import { ChatChannel, ChatMessage } from '../types/chat';

export const INITIAL_CHANNELS: ChatChannel[] = [
  {
    id: 'chan-pfas',
    name: 'pfas-blood-clearance',
    slug: 'pfas-blood-clearance',
    topic: 'Hemoperfusion, cyclodextrin polymer traps, enterohepatic interruption & community serum tracking',
    activeResearchersCount: 14,
  },
  {
    id: 'chan-minerals',
    name: 'mineral-bioleaching',
    slug: 'mineral-bioleaching',
    topic: 'Ambient microbial leaching (Gluconobacter), deep eutectic solvents & e-waste magnet recycling',
    activeResearchersCount: 19,
  },
  {
    id: 'chan-microplastics',
    name: 'microplastics-harvesting',
    slug: 'microplastics-harvesting',
    topic: 'Acoustic standing-wave vortex traps for washing machines & ambient PETase enzyme degradation',
    activeResearchersCount: 11,
  },
  {
    id: 'chan-water-sampling',
    name: 'field-water-sampling',
    slug: 'field-water-sampling',
    topic: 'Citizen water collection protocols, open-source colorimeters & split-sample lab validation',
    activeResearchersCount: 22,
  },
  {
    id: 'chan-general',
    name: 'grand-challenge-bridge',
    slug: 'grand-challenge-bridge',
    topic: 'Interdisciplinary open science, hypothesis incubation & matchmaking professionals with citizens',
    activeResearchersCount: 38,
  },
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    channelId: 'chan-pfas',
    senderId: 'user-2',
    senderName: 'Elena Rostova',
    senderRole: 'Community Health Advocate & Patient',
    senderAvatar: 'ER',
    isProfessional: false,
    timestamp: 'Today at 09:14 AM',
    content: 'Question for the clinicians here: I just received my 6-month blood lab. After 4 plasma donations, my serum PFOS dropped from 78 ng/mL to 44 ng/mL. But our community members who only installed kitchen reverse osmosis filters without donating blood are only seeing about a 5% drop per year. Is that expected with the natural liver half-life?',
    category: 'citizen_observation',
    reactions: [
      { emoji: '🔬', count: 4, userReacted: true },
      { emoji: '💡', count: 6, userReacted: false },
    ],
  },
  {
    id: 'msg-2',
    channelId: 'chan-pfas',
    senderId: 'user-4',
    senderName: 'Dr. Soraya Lin',
    senderRole: 'Nephrologist & Clinical Toxicologist',
    senderAvatar: 'SL',
    isProfessional: true,
    timestamp: 'Today at 09:18 AM',
    content: 'Yes Elena, that matches physiological pharmacokinetic models exactly. Without active interventions like plasma donation or bile acid sequestrants (cholestyramine), the half-life of PFOS in human serum is 5.4 years due to 95% enterohepatic biliary recycling. The reverse osmosis filter stops NEW intake, but does not accelerate clearance of what is already bound to your albumin.',
    category: 'mechanism',
    reactions: [
      { emoji: '👍', count: 5, userReacted: false },
    ],
  },
  {
    id: 'msg-3',
    channelId: 'chan-pfas',
    senderId: 'ai-admin',
    senderName: 'Dr. Synapse AI',
    senderRole: 'AI Research Moderator & Protocol Admin',
    senderAvatar: 'AI',
    isProfessional: true,
    isAIAdmin: true,
    timestamp: 'Today at 09:20 AM',
    content: '🧬 **AI Admin Protocol Synthesis**: 
1. **Plain-English Analogy**: Think of the RO water filter like locking the front door during a flood—it stops new water from entering the house, but you still need a pump (like plasma donation or gut sorbents) to get the water that\'s already inside the basement out.
2. **Clinical Safety Control**: When recommending increased donation frequency for PFAS clearance, monitor serum ferritin and IgG immunoglobulins to prevent iatrogenic anemia or transient hypogammaglobulinemia.',
    category: 'admin_synthesis',
    reactions: [
      { emoji: '🧠', count: 8, userReacted: true },
      { emoji: '✨', count: 9, userReacted: true },
    ],
  },
  {
    id: 'msg-4',
    channelId: 'chan-pfas',
    senderId: 'user-1',
    senderName: 'Dr. Aris Vance',
    senderRole: 'Senior Research Biochemist',
    senderAvatar: 'AV',
    isProfessional: true,
    timestamp: 'Today at 09:25 AM',
    content: 'Our team just synthesized the first 50g batch of quaternary ammonium-functionalized β-cyclodextrin beads for the hemoperfusion column. In bovine plasma spiked with 100 ng/mL PFOA, clearance was 88.6% within 60 minutes. We need a clinical partner to review our hemocompatibility hemolysis assay before publishing the protocol.',
    category: 'mechanism',
    reactions: [
      { emoji: '🚀', count: 11, userReacted: true },
    ],
  },
  {
    id: 'msg-5',
    channelId: 'chan-minerals',
    senderId: 'user-3',
    senderName: 'Marcus Thorne',
    senderRole: 'Bio-Metallurgy Tinkerer & Open Hardware Dev',
    senderAvatar: 'MT',
    isProfessional: false,
    timestamp: 'Today at 10:02 AM',
    content: 'Hey everyone, I completed a 48-hour run in the Detroit maker space using the ambient Gluconobacter cider vinegar culture on shredded computer hard drive platters. The leachate liquid turned a very clear faint lavender. How do I know if the neodymium dissolved without having a $100k spectrometer in my garage?',
    category: 'citizen_observation',
    reactions: [
      { emoji: '🛠️', count: 5, userReacted: false },
    ],
  },
  {
    id: 'msg-6',
    channelId: 'chan-minerals',
    senderId: 'ai-admin',
    senderName: 'Dr. Synapse AI',
    senderRole: 'AI Research Moderator & Protocol Admin',
    senderAvatar: 'AI',
    isProfessional: true,
    isAIAdmin: true,
    timestamp: 'Today at 10:05 AM',
    content: '💡 **AI Admin Makerspace Verification Guide**:
Great work, Marcus! Neodymium(III) ions have a distinctive pale lilac/violet hue in aqueous organic acid solution due to f-f electronic transitions.
To verify without an ICP-MS:
1. **DIY Smartphone Spectrophotometry**: Use an inexpensive diffraction grating slide ($3) taped over your phone camera with an incandescent light source behind the vial. Neodymium has razor-sharp absorption bands at 522 nm and 575 nm.
2. **Colorimetric Complexation**: Adding Arsenazo III indicator produces an intense blue-green complex specific to trivalent rare earths at pH 3.0.
3. **Mailing Protocol**: You can mail a 5 mL filtered aliquot to Dr. Vance\'s university lab via our open registry for complimentary ICP-OES validation.',
    category: 'admin_synthesis',
    reactions: [
      { emoji: '⚡', count: 7, userReacted: true },
    ],
  },
];
