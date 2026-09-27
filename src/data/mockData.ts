import { GrandChallenge, ResearchHypothesis, DualProtocol, CrowdsourcedDataPoint, LexiconTerm, UserProfile } from '../types/research';

export const INITIAL_USER_PROFILES: UserProfile[] = [
  {
    id: 'user-1',
    name: 'Dr. Aris Vance',
    role: 'professional_scientist',
    roleLabel: 'Senior Research Biochemist',
    affiliationOrBackground: 'Center for Supramolecular Biomaterials',
    avatarInitials: 'AV',
    verifiedStatus: 'peer_reviewed',
    bio: 'Investigating cyclodextrin macromolecular host-guest encapsulation and therapeutic clearance of persistent organofluorines.',
    contributionsCount: 42
  },
  {
    id: 'user-2',
    name: 'Elena Rostova',
    role: 'impacted_community',
    roleLabel: 'Community Health Advocate & Patient',
    affiliationOrBackground: 'Ohio River Valley Clean Water Coalition',
    avatarInitials: 'ER',
    verifiedStatus: 'community_lead',
    bio: 'Diagnosed with 78 ng/mL serum PFOS. Tracking community blood serum biomarker declines following phlebotomy and water filtration.',
    contributionsCount: 29
  },
  {
    id: 'user-3',
    name: 'Marcus Thorne',
    role: 'applied_engineer',
    roleLabel: 'Bio-Metallurgy Tinkerer & Open Hardware Dev',
    affiliationOrBackground: 'Circular Metals Laboratory (Independent)',
    avatarInitials: 'MT',
    verifiedStatus: 'field_collector',
    bio: 'Designing benchtop ambient bioreactors for microbial neodymium and cobalt leaching from crushed electronic waste.',
    contributionsCount: 35
  },
  {
    id: 'user-4',
    name: 'Dr. Soraya Lin',
    role: 'clinical_physician',
    roleLabel: 'Nephrologist & Clinical Toxicologist',
    affiliationOrBackground: 'University Hospital Toxicology Consortium',
    avatarInitials: 'SL',
    verifiedStatus: 'clinical_fellow',
    bio: 'Studying hemoperfusion cartridges and bile acid sequestrant protocols to inhibit enterohepatic recirculation of PFAS.',
    contributionsCount: 18
  },
  {
    id: 'user-5',
    name: 'Jared Kim',
    role: 'citizen_researcher',
    roleLabel: 'Citizen Water Monitor & Educator',
    affiliationOrBackground: 'Great Lakes Watershed Watch',
    avatarInitials: 'JK',
    verifiedStatus: 'field_collector',
    bio: 'Organizing municipal catchment testing and open-source solid-phase extraction column builds for community volunteers.',
    contributionsCount: 51
  }
];

export const INITIAL_GRAND_CHALLENGES: GrandChallenge[] = [
  {
    id: 'pfas-blood-clearance',
    slug: 'pfas-blood-clearance',
    title: 'Systemic PFAS & Fluorocarbon Blood Clearance',
    domain: 'Human Physiology & Environmental Toxicology',
    bannerImage: '/src/assets/images/pfas_molecular_clearing_1790534070127.jpg',
    summaryCitizen: 'Over 98% of people have "forever chemicals" (PFAS) trapped in their blood. Because their carbon-fluorine bonds never break down naturally, they stay in human tissue for 3 to 8 years, increasing cancer and thyroid risks. We are co-designing safe ways to draw PFAS out of human serum and stop it from circulating repeatedly through the liver.',
    summaryScience: 'Per- and polyfluoroalkyl substances (PFOA, PFOS, GenX) exhibit extreme thermal and metabolic stability due to the 485 kJ/mol C-F covalent bond enthalpy. Bound primarily to human serum albumin (HSA) with sub-micromolar dissociation constants (Kd ≈ 10⁻⁶ M), they undergo extensive enterohepatic recirculation via organic anion transporters (OAT1/OAT3), resulting in elimination half-lives of 3.8 to 8.5 years.',
    urgencyMetrics: [
      { label: 'Global Human Serum Prevalence', value: '98.7', unit: '%', trend: 'Universal saturation' },
      { label: 'Serum Elimination Half-Life', value: '5.4', unit: 'years', trend: 'Persistent retention' },
      { label: 'Typical Serum PFAS (Exposed)', value: '64.2', unit: 'ng/mL', trend: 'Above safety limit' },
      { label: 'Safe Guideline Benchmark', value: '2.0', unit: 'ng/mL', trend: 'Target ceiling' }
    ],
    keyBottlenecks: [
      {
        title: 'Enterohepatic Recirculation Loop',
        citizenDescription: 'Even when the liver filters PFAS into the gut to be excreted, the intestines absorb it right back into the bloodstream like a closed loop.',
        scientificMechanism: 'OAT1/3 and NTCP sodium-taurocholate cotransporters mediate 95% reabsorption of fluorinated sulfonates from the biliary duct into portal circulation.'
      },
      {
        title: 'Albumin Tight Binding',
        citizenDescription: 'PFAS chemicals act like greasy magnets that bury themselves inside the body\'s main transport protein, making them hard to filter without damaging healthy blood.',
        scientificMechanism: 'High-affinity hydrophobic interaction at Subdomain IIA of human serum albumin prevents standard glomerular filtration (MW cut-off 60 kDa).'
      },
      {
        title: 'Toxic Breakdown Intermediates',
        citizenDescription: 'If we try to aggressively burn or split PFAS inside the body, the chopped pieces can be more dangerous than the intact chain.',
        scientificMechanism: 'Partial defluorination may yield short-chain perfluoroalkyl intermediates (PFBA, PFPeA) with elevated cellular membrane mobility.'
      }
    ],
    activeHypothesesCount: 8,
    openFieldProtocolsCount: 3,
    verifiedDataPointsCount: 142
  },
  {
    id: 'critical-mineral-bioleaching',
    slug: 'critical-mineral-bioleaching',
    title: 'Clean Rare Earth & Critical Mineral Bio-Extraction',
    domain: 'Clean Metallurgy & Industrial Ecology',
    bannerImage: '/src/assets/images/mineral_bioleaching_extraction_1790534080727.jpg',
    summaryCitizen: 'Clean energy relies on rare minerals like neodymium, lithium, and cobalt, but mining them today involves toxic open pits, acid lakes, and heavy smelting. Meanwhile, millions of tons of old electronics and batteries end up in landfills. We are developing low-heat, biological "living sponge" methods using safe microbes and organic plant acids to recover metals locally without toxic fumes.',
    summaryScience: 'Conventional pyrometallurgy and hydrometallurgy for critical raw materials (REEs, Li, Co, Ni) emit massive greenhouse gases and generate millions of tons of phosphogypsum and acidic tailings. This track focuses on chemolithotrophic biolixiviation using Acidithiobacillus and Gluconobacter consortia, combined with deep eutectic solvents (DES) and siderophore-mediated lanthanide chelation for urban e-waste black mass.',
    urgencyMetrics: [
      { label: 'E-Waste Discarded Annually', value: '62.0', unit: 'Mt', trend: 'Growing 2.6 Mt/yr' },
      { label: 'REE Recycling Rate', value: '1.2', unit: '%', trend: 'Severe material loss' },
      { label: 'Acid Leaching Energy Footprint', value: '310', unit: 'MJ/kg', trend: 'High fossil usage' },
      { label: 'Bioleaching Energy Savings', value: '74', unit: '%', trend: 'Ambient reduction' }
    ],
    keyBottlenecks: [
      {
        title: 'Slow Bacterial Leaching Kinetics',
        citizenDescription: 'Microbes naturally chew through metal ores, but under normal conditions they take weeks or months to yield usable quantities.',
        scientificMechanism: 'Oxidation of ferrous iron (Fe²⁺ → Fe³⁺) and elemental sulfur is rate-limited by oxygen mass transfer (kLa) and microbial lag phases in dense slurries.'
      },
      {
        title: 'Selective Separation of Similar Metals',
        citizenDescription: 'Rare earth metals are like identical twins chemically—separating valuable neodymium from common iron is like sorting grains of sand by microscope.',
        scientificMechanism: 'Lanthanide contraction results in virtually identical ionic radii (0.98–1.03 Å), making standard precipitation separation non-selective without fluorinated extractants.'
      },
      {
        title: 'Toxic Heavy Metal Runoff Risk',
        citizenDescription: 'If tinkerers or small co-ops dissolve circuit boards with improper chemicals, dangerous heavy metals like lead and cadmium can seep into groundwater.',
        scientificMechanism: 'Uncontrolled acid hydrometallurgy mobilizes hazardous Pb²⁺, Cd²⁺, and Cr⁶⁺ ions into effluent streams lacking passive precipitation wetlands.'
      }
    ],
    activeHypothesesCount: 11,
    openFieldProtocolsCount: 5,
    verifiedDataPointsCount: 208
  },
  {
    id: 'microplastics-enzymatic-degradation',
    slug: 'microplastics-enzymatic-degradation',
    title: 'Microplastic Harvesting & Enzymatic Biocatalysis',
    domain: 'Polymer Remediation & Synthetic Biology',
    bannerImage: '/src/assets/images/citizen_field_research_1790534090663.jpg',
    summaryCitizen: 'Tiny plastic specks smaller than a grain of salt are found in our drinking water, food, and clouds. Washing machines shed 700,000 synthetic microfibers in a single load. Together, engineers and citizens are building low-power sound-wave traps for drains, while biochemists test bacterial enzymes that "digest" plastics into harmless natural plant nutrients.',
    summaryScience: 'Synthetic micro- and nanoplastics (MNPs: PET, PE, PP, PS) accumulate in ecological and human biological barriers. This challenge links physical acoustophoretic standing-wave separation (acoustofluidics) for municipal wastewater outfalls with engineered PETase/MHETase esterase cascades operating at ambient temperatures (22–35°C).',
    urgencyMetrics: [
      { label: 'Weekly Human Intake', value: '5.0', unit: 'g/wk', trend: 'Credit card equivalent' },
      { label: 'Ocean Surface Concentration', value: '24.4', unit: 'trillion', trend: 'Exponential rise' },
      { label: 'Enzyme Ambient Cleavage Rate', value: '92.4', unit: '%', trend: 'Lab breakthrough' },
      { label: 'Washing Machine Shed/Cycle', value: '700', unit: 'k fibers', trend: 'Unfiltered outflow' }
    ],
    keyBottlenecks: [
      {
        title: 'High Polymer Crystallinity',
        citizenDescription: 'Water bottles and polyester clothes are manufactured with tightly packed molecular chains that enzymes bounce right off of.',
        scientificMechanism: 'Amorphous PET domains are easily cleaved by cutinases, whereas rigid crystalline lattices (crystallinity > 35%) restrict enzyme active site access.'
      },
      {
        title: 'Filtering Without Clogging',
        citizenDescription: 'Physical screens with holes small enough to catch microscopic fibers plug up within minutes and overflow household washing machines.',
        scientificMechanism: 'Cake filtration resistance (Rc) scales exponentially with sub-micron particle packing, requiring acoustic vortex deflection rather than physical mesh.'
      }
    ],
    activeHypothesesCount: 7,
    openFieldProtocolsCount: 4,
    verifiedDataPointsCount: 96
  }
];

export const INITIAL_HYPOTHESES: ResearchHypothesis[] = [
  {
    id: 'hypo-101',
    challengeId: 'pfas-blood-clearance',
    title: 'Modified Beta-Cyclodextrin Supramolecular Hemoperfusion Sorbent for High-Affinity PFOA Clearance',
    stage: 'in_bench_testing',
    stageLabel: 'In Bench Testing',
    author: {
      name: 'Elena Rostova & Dr. Aris Vance',
      role: 'impacted_community',
      roleLabel: 'Citizen-Scientist Co-Lead',
      avatarInitials: 'ER',
      isProfessional: false
    },
    coAuthorsCount: 6,
    createdAt: '2026-09-12',
    citizenSpark: {
      observation: 'In our water coalition, we observed that food-grade starches and cyclic oligosaccharides (cyclodextrin) could bind strange chemical smells. Elena asked: "Since cyclodextrins are hollow molecular rings like miniature donut cages, could we tune their internal pocket size to swallow linear PFAS chains directly out of blood during standard plasma donation?"',
      intuitiveQuestion: 'Can an affordable, plant-derived hollow sugar molecule capture forever chemicals in blood without sucking out the essential vitamins and proteins our body needs?',
      practicalImpact: 'If adapted into a standard kidney-dialysis or plasma donation cartridge, exposed community members could safely cut their blood PFAS load in half during a single 90-minute clinic visit.'
    },
    scientificRigorous: {
      theoreticalMechanism: 'Beta-cyclodextrin (β-CD) cavity diameter (~7.8 Å) geometrically mirrors the cross-sectional molecular envelope of perfluorooctanoate (PFOA, 7.5 Å). Functionalizing the primary hydroxyl rim with quaternary ammonium ethyl groups confers electrostatic attraction toward the terminal sulfonate/carboxylate headgroups, while the hydrophobic fluorocarbon tail is thermodynamically driven into the apolar cavity (ΔG° = -31.4 kJ/mol).',
      chemicalOrPhysicalPrinciples: 'Hydrophobic fluorophilic desolvation driving force coupled with Coulombic ion-pairing. Equilibrium dissociation constant Kd = 1.4 × 10⁻⁷ M, demonstrating higher affinity than human serum albumin (HSA Kd ≈ 1.2 × 10⁻⁶ M), enabling competitive transfer without albumin denaturation.',
      analyticalMethods: 'Liquid chromatography-tandem mass spectrometry (LC-MS/MS) on spiked bovine serum; isothermal titration calorimetry (ITC) for binding thermodynamics; flow cytometry for hemocompatibility (red cell lysis < 0.5%).',
      primaryCitations: [
        'Dichtel et al., J. Am. Chem. Soc. 138 (2016): Polymerized cyclodextrins for micropollutant removal.',
        'Silver et al., Lancet Planet Health (2022): Effect of plasma donation on serum fluoroalkyl concentrations.'
      ]
    },
    collaboratorsNeeded: [
      'Clinical toxicologist with IRB protocol design experience',
      'Polymer chemist specializing in cross-linked dextran bead synthesis',
      'Citizen volunteers with documented serum PFAS tests to supply anonymized timeline data'
    ],
    feasibilityVotes: {
      scientificRigorousScore: 89,
      communityRelevanceScore: 98,
      upvotes: 147
    },
    userHasUpvoted: true,
    comments: [
      {
        id: 'c-1',
        authorName: 'Dr. Soraya Lin',
        authorRole: 'Clinical Toxicologist',
        isProfessional: true,
        timestamp: '2 days ago',
        type: 'mechanism_critique',
        content: 'Thermodynamics are solid. Our main safety gate in clinical hemoperfusion is ensuring the immobilized quaternary ammonium groups do not induce complement activation or strip physiological heparin. We should validate with an in-vitro whole blood circuit before animal trials.'
      },
      {
        id: 'c-2',
        authorName: 'Jared Kim',
        authorRole: 'Citizen Water Monitor',
        isProfessional: false,
        timestamp: '1 day ago',
        type: 'community_reality_check',
        content: 'From the community perspective: plasma exchange clinics already exist in almost every major town. If this cartridge is compatible with standard Terumo or Baxter apheresis machines, it eliminates the need to build special new hospital infrastructure.'
      }
    ]
  },
  {
    id: 'hypo-102',
    challengeId: 'pfas-blood-clearance',
    title: 'Dual-Phase Enterohepatic Interception: Micronized Biochar & Cholestyramine Conjugate',
    stage: 'formulation',
    stageLabel: 'Formulation & Modeling',
    author: {
      name: 'Marcus Thorne',
      role: 'applied_engineer',
      roleLabel: 'Independent Researcher',
      avatarInitials: 'MT',
      isProfessional: false
    },
    coAuthorsCount: 4,
    createdAt: '2026-09-18',
    citizenSpark: {
      observation: 'Lived experience in affected water districts showed that people taking prescription cholesterol binders for unrelated heart conditions coincidentally had lower PFAS blood tests. Marcus proposed combining activated bamboo biochar with safe medical bile binders to trap PFAS right in the stomach and gut.',
      intuitiveQuestion: 'Instead of invasive blood needles, can people simply drink an edible microscopic "sponge" that catches PFAS as the liver dumps it into bile, flushing it out safely in stool?',
      practicalImpact: 'A daily oral sachet that could be distributed in pharmacies across contaminated municipal water zones, costing under $1.50 per day.'
    },
    scientificRigorous: {
      theoreticalMechanism: 'Enterohepatic interruption targeting the 95% biliary reabsorption cycle. Cholestyramine (quaternary ammonium anion-exchange resin) binds perfluorinated carboxylates in the duodenum at neutral pH (7.2). Micronized mesoporous pyrolyzed carbon (pore aperture 2–5 nm) provides secondary surface adsorption via London dispersion forces across the perfluorinated tail, preventing desorption in the terminal ileum.',
      chemicalOrPhysicalPrinciples: 'In-situ competitive binding over endogenous taurocholate. Langmuir sorption capacity Qmax = 142 mg PFOA/g adsorbent under simulated intestinal fluid (SIF) conditions without enzymatic breakdown.',
      analyticalMethods: 'Simulated Gastric/Intestinal Fluid batch equilibrium assays; in-vivo murine feces-to-serum partition coefficient testing.',
      primaryCitations: [
        'Genuis et al., Sci Total Environ 450 (2013): Bile acid sequestrants in human PFAS detoxification.',
        'Xiao et al., Chemosphere 173 (2017): Sorption kinetics of perfluoroalkyl acids to functionalized biochars.'
      ]
    },
    collaboratorsNeeded: [
      'Gastrointestinal pharmacologist',
      'Food-grade pyrolysis engineer for batch-to-batch pore size consistency',
      'Community trial coordinators'
    ],
    feasibilityVotes: {
      scientificRigorousScore: 82,
      communityRelevanceScore: 94,
      upvotes: 112
    },
    userHasUpvoted: false,
    comments: [
      {
        id: 'c-3',
        authorName: 'Elena Rostova',
        authorRole: 'Community Health Advocate',
        isProfessional: false,
        timestamp: '3 days ago',
        type: 'community_reality_check',
        content: 'This would be life-changing for parents who are terrified of seeing their kids undergo blood draws. An oral option that tastes neutral and is shelf-stable is the holy grail for community trust.'
      }
    ]
  },
  {
    id: 'hypo-201',
    challengeId: 'critical-mineral-bioleaching',
    title: 'Consortium Biolixiviation of Neodymium & Dysprosium from E-Waste with Ambient Gluconobacter Oxydans',
    stage: 'in_bench_testing',
    stageLabel: 'In Bench Testing',
    author: {
      name: 'Marcus Thorne & Dr. Aris Vance',
      role: 'applied_engineer',
      roleLabel: 'Open Hardware Engineer',
      avatarInitials: 'MT',
      isProfessional: false
    },
    coAuthorsCount: 7,
    createdAt: '2026-08-28',
    citizenSpark: {
      observation: 'Marcus noticed kombucha and vinegar mothers (acetic acid bacteria) slowly corroded discarded hard drive platters in an unsealed workshop shed, leaving behind a pale blue precipitate without any dangerous chlorine fumes.',
      intuitiveQuestion: 'Can harmless food-grade sugar-eating microbes produce safe bio-acids that selectively dissolve rare earth magnets out of shredded electronics at room temperature?',
      practicalImpact: 'Enables high schools, community maker spaces, and decentralized e-waste co-ops to harvest rare magnets from landfill electronics without toxic smelters or government hazmat licenses.'
    },
    scientificRigorous: {
      theoreticalMechanism: 'Gluconobacter oxydans secretes high titers of 2-ketogluconic acid and gluconic acid via membrane-bound pyrroloquinoline quinone (PQQ)-dependent glucose dehydrogenases. The bio-generated carboxylate chelators proton-attack the NdFeB alloy matrix, complexing trivalent lanthanides (Nd³⁺, Dy³⁺) into soluble coordination complexes at pH 2.8–3.4 while minimizing co-dissolution of ferromagnetic iron.',
      chemicalOrPhysicalPrinciples: 'Proton-promoted and ligand-controlled surface dissolution. Stability constants: log β₁ (Nd-gluconate) = 3.82 vs log β₁ (Fe²⁺) = 1.95, establishing thermodynamic preference for rare earth solubilization over iron matrix.',
      analyticalMethods: 'Inductively coupled plasma optical emission spectroscopy (ICP-OES); powder X-ray diffraction (PXRD) of residual magnet powders; HPLC determination of organic acid metabolites.',
      primaryCitations: [
        'Reed et al., Environ Sci Technol 50 (2016): Bioleaching of rare earth elements using Gluconobacter oxydans.',
        'Brisson et al., Hydrometallurgy 197 (2020): Biohydrometallurgical recycling of rare earths from NdFeB magnets.'
      ]
    },
    collaboratorsNeeded: [
      'Microbiologist to optimize PQQ co-factor supplementation in low-cost corn steep liquor',
      'Makerspace hardware designer for open-source 20L 3D-printed bioreactor vessel',
      'Electronic recyclers willing to supply standardized crushed NdFeB powder'
    ],
    feasibilityVotes: {
      scientificRigorousScore: 93,
      communityRelevanceScore: 91,
      upvotes: 189
    },
    userHasUpvoted: true,
    comments: [
      {
        id: 'c-4',
        authorName: 'Dr. Aris Vance',
        authorRole: 'Research Biochemist',
        isProfessional: true,
        timestamp: '5 days ago',
        type: 'mechanism_critique',
        content: 'We ran ICP-OES validation on Marcus\'s batch last week. Neodymium recovery reached 68.4% at 30°C within 48 hours using simple glucose broth. If we pulse aeration to 1.5 VVM, we expect to cross 82% extraction efficiency without any mineral acid addition.'
      }
    ]
  },
  {
    id: 'hypo-202',
    challengeId: 'critical-mineral-bioleaching',
    title: 'Closed-Loop Deep Eutectic Solvent (Choline Chloride-Citric Acid) Leaching for Battery Black Mass',
    stage: 'spark',
    stageLabel: 'Citizen Spark',
    author: {
      name: 'Elena Rostova',
      role: 'citizen_researcher',
      roleLabel: 'Citizen Researcher',
      avatarInitials: 'ER',
      isProfessional: false
    },
    coAuthorsCount: 3,
    createdAt: '2026-09-24',
    citizenSpark: {
      observation: 'When mixing vitamin B4 (choline chloride) with common lemon juice crystals (citric acid), they melt into a clear liquid at room temperature that acts like a powerful organic solvent with zero toxic fumes.',
      intuitiveQuestion: 'Could a non-flammable mixture of vitamin supplement and lemon powder dissolve lithium and cobalt out of crushed dead phone batteries safely?',
      practicalImpact: 'Safe backyard or garage recycling of lithium battery powder with kitchen-safe ingredients and 100% reusable solvent liquid.'
    },
    scientificRigorous: {
      theoreticalMechanism: 'Formation of type III deep eutectic solvent (DES) with hydrogen bond acceptor (ChCl) and donor (citric acid) in 1:2 molar ratio. High chloride ion activity accelerates coordination reduction of insoluble Co³⁺ (in LiCoO₂) to soluble Co²⁺ hexachloro complexes without requiring exogenous toxic hydrogen peroxide.',
      chemicalOrPhysicalPrinciples: 'Eutectic depression of melting point below 25°C. Simultaneous protonation and transition metal chlorometallate complexation: LiCoO₂ + 3H⁺ + 4Cl⁻ + e⁻ → Li⁺ + [CoCl₄]²⁻ + 2H₂O.',
      analyticalMethods: 'UV-Vis spectrophotometry of cobalt chloro-complex at 665 nm; cyclic voltammetry for redox potential; rotary evaporation for solvent regeneration.',
      primaryCitations: [
        'Tran et al., Nat Commun 10 (2019): Deep eutectic solvents for eco-friendly lithium-ion battery recycling.',
        'Chen et al., Green Chem 23 (2021): Sustainable leaching of spent battery cathode materials.'
      ]
    },
    collaboratorsNeeded: [
      'Chemical safety engineer for thermal runaway prevention in unwashed black mass',
      'Analytical chemist for cobalt purity quantification'
    ],
    feasibilityVotes: {
      scientificRigorousScore: 88,
      communityRelevanceScore: 92,
      upvotes: 94
    },
    userHasUpvoted: false,
    comments: []
  }
];

export const INITIAL_PROTOCOLS: DualProtocol[] = [
  {
    id: 'proto-pfas-01',
    challengeId: 'pfas-blood-clearance',
    hypothesisId: 'hypo-101',
    title: 'Supramolecular Cyclodextrin Bead Sorption Kinetic Assay',
    estimatedDuration: '180 minutes',
    safetyLevel: 'certified_wet_lab',
    safetyWarning: 'Requires BSL-2 biological containment when handling human plasma. Always wear chemical-resistant nitrile gloves and eye protection.',
    wetLabTrack: {
      equipment: [
        'High-Resolution LC-MS/MS (Agilent 6495C or equivalent)',
        'Benchtop Orbital Shaker incubator with ±0.5°C control',
        '0.22 μm PTFE syringe filters (fluoropolymer-free polypropylene housing)',
        'Centrifuge capable of 4,000 × g at 4°C'
      ],
      reagents: [
        'Epichlorohydrin-crosslinked β-cyclodextrin polymer beads (100–250 μm)',
        'Native PFOA/PFOS analytical standards (Wellington Laboratories, >98% purity)',
        'Mass-labeled internal standard solution (¹³C₄-PFOA, ¹³C₄-PFOS)',
        'De-identified pooled human serum matrix (screened baseline < 0.5 ng/mL)'
      ],
      steps: [
        {
          stepNumber: 1,
          action: 'Pre-rinse all autosampler vials and glassware with 3x HPLC-grade methanol to eliminate laboratory fluorosurfactant background contamination.',
          parameters: 'Methanol rinse volume: 5 mL/vial; dry under high-purity N₂ stream.',
          criticalControlPoint: 'Verify blank method sample gives < 0.05 ng/mL PFAS background.'
        },
        {
          stepNumber: 2,
          action: 'Spike serum aliquots with target PFOA to establish standard baseline concentration (50 ng/mL).',
          parameters: 'V = 10.0 mL per sample; equilibrate at 37°C for 30 min to ensure complete HSA binding.',
          criticalControlPoint: 'Ensure internal standard ¹³C₄-PFOA is spiked after equilibrium to track recovery.'
        },
        {
          stepNumber: 3,
          action: 'Introduce calibrated mass of cyclodextrin polymer beads into serum vials and initiate orbital agitation.',
          parameters: 'Sorbent loading: 5.0 mg/mL; agitation: 200 rpm at 37.0°C; timepoints: 0, 15, 30, 60, 120 min.',
          criticalControlPoint: 'Take 200 μL micro-aliquots and quench immediately by centrifugation at 4,000 × g for 3 min.'
        },
        {
          stepNumber: 4,
          action: 'Perform solid-phase extraction (SPE) cleanup and inject into LC-MS/MS in negative electrospray mode (ESI-).',
          parameters: 'MRM transition PFOA m/z 413 → 369; ¹³C₄-PFOA m/z 417 → 372.',
          criticalControlPoint: 'Calculate instantaneous clearance percentage and Langmuir isotherm fit.'
        }
      ]
    },
    citizenFieldTrack: {
      accessibleTools: [
        'Open-Source 3D printed manual mini-centrifuge or salad spinner centrifuge adapter',
        'Smartphone with open-source colorimetric color-spot app (Colorimeter OpenSource)',
        'Food-grade glass Mason jars (avoid all plastic caps with Teflon liners)',
        'Polypropylene 10 mL syringes with cotton filter plugs'
      ],
      householdReagents: [
        'Food-grade beta-cyclodextrin powder (bulk baking / dietary supplement supply)',
        'Methylene Blue dye solution (0.01% indicator solution from aquarium store)',
        'Distilled water (tested PFAS-free certified jug water)'
      ],
      steps: [
        {
          stepNumber: 1,
          action: 'Verify your water container has zero non-stick or Teflon coating. Use rinsed clean glass mason jars.',
          tips: 'Never use pans with non-stick coatings anywhere near your testing area, as dust particles carry PFAS.',
          whatToLookFor: 'Clear glass with no cloudy detergent film.'
        },
        {
          stepNumber: 2,
          action: 'Prepare the test dye solution. Add 2 drops of Methylene Blue to 100 mL of distilled water.',
          tips: 'Methylene blue serves as an accessible visual surrogate: it binds to cyclodextrin similarly to organic molecules.',
          whatToLookFor: 'A uniform sky-blue transparent liquid.'
        },
        {
          stepNumber: 3,
          action: 'Add 1/4 teaspoon (approx 1 gram) of cyclodextrin powder and swirl gently for 3 minutes.',
          tips: 'Notice how the blue dye molecules enter the cyclodextrin rings, lightening the visible blue liquid.',
          whatToLookFor: 'The blue intensity visibly drops as the hollow rings capture the dye molecules.'
        },
        {
          stepNumber: 4,
          action: 'Photograph the jar against a pure white sheet of paper using your phone under steady lighting, and log RGB values.',
          tips: 'Upload the photo and color readings to the Convergence Open Registry to cross-reference with our lab calibrations.',
          whatToLookFor: 'Logged absorbance percentage plotted on your community tracker.'
        }
      ]
    }
  },
  {
    id: 'proto-bioleach-01',
    challengeId: 'critical-mineral-bioleaching',
    hypothesisId: 'hypo-201',
    title: 'Ambient Microbial Leaching of Shredded E-Waste Magnets',
    estimatedDuration: '48 hours',
    safetyLevel: 'citizen_safe',
    safetyWarning: 'Gluconobacter strains are non-pathogenic food-grade organisms. Wear safety glasses when handling mechanical shredder fragments.',
    wetLabTrack: {
      equipment: [
        'Inductively Coupled Plasma Optical Emission Spectrometer (PerkinElmer Avio 500)',
        'Bioreactor vessel with dissolved oxygen (DO) probe and pH electrode',
        'Planetary ball mill for powderizing magnet scrap to < 75 μm sieve',
        '0.45 μm cellulose acetate membrane filtration unit'
      ],
      reagents: [
        'Gluconobacter oxydans DSM 3504 pure culture isolate',
        'Yeast extract-peptone-glucose (YPG) growth medium',
        'Crushed NdFeB hard drive magnet fraction (65% Fe, 28% Nd, 3% Dy, 1% B)',
        'Analytical multi-element standard calibration solution (1000 ppm REE)'
      ],
      steps: [
        {
          stepNumber: 1,
          action: 'Inoculate 1.0 L YPG medium with 5% (v/v) active G. oxydans pre-culture and cultivate at 30°C.',
          parameters: 'Agitation: 180 rpm; continuous aeration: 1.0 VVM; monitor glucose consumption.',
          criticalControlPoint: 'Verify pH drops to 3.0 ± 0.2 within 24 hours signaling 2-ketogluconic acid peak.'
        },
        {
          stepNumber: 2,
          action: 'Add demagnetized powdered NdFeB scrap at 1.0% (w/v) pulp density under laminar flow.',
          parameters: 'Slurry loading: 10.0 g/L; temperature fixed at 30.0°C for 48 hours.',
          criticalControlPoint: 'Maintain DO > 40% saturation to prevent bacterial metabolic dormancy.'
        },
        {
          stepNumber: 3,
          action: 'Filter leachate aliquots through 0.45 μm membrane and dilute 1:100 in 2% trace-metal grade HNO₃.',
          parameters: 'Aspiration rate: 1.5 mL/min into ICP-OES torch at 1300 W RF power.',
          criticalControlPoint: 'Record emission intensities at Nd (401.225 nm), Dy (353.171 nm), and Fe (238.204 nm).'
        }
      ]
    },
    citizenFieldTrack: {
      accessibleTools: [
        '1-liter wide-mouth glass fermentation jar with breathable cloth cover',
        'Aquarium air pump with silicone air hose and ceramic airstone bubbler',
        'Digital pocket kitchen scale (0.1g precision) and plastic measuring spoon',
        'Inexpensive digital aquarium pH pen ($12) or broad-range pH test strips'
      ],
      householdReagents: [
        'Raw organic unfiltered apple cider vinegar or kombucha starter culture (rich in Gluconobacter)',
        'Table sugar (sucrose) or corn syrup (glucose source)',
        'Demagnetized shredded computer hard drive pieces or motor scraps (demagnetized by heat or pliers)'
      ],
      steps: [
        {
          stepNumber: 1,
          action: 'Mix 800 mL warm tap water with 3 tablespoons of sugar and 100 mL of raw organic cider vinegar.',
          tips: 'The smell is just pleasant sweet cider; the live bacteria will start converting sugar into natural organic acids.',
          whatToLookFor: 'Clear solution that reads around pH 3.5 to 4.0 on your test strip.'
        },
        {
          stepNumber: 2,
          action: 'Drop the aerator airstone into the jar and turn on the aquarium pump to keep air bubbling continuously.',
          tips: 'Oxygen is the fuel the friendly bacteria need to make bio-acids that can chew through metal bonds.',
          whatToLookFor: 'Gentle steady fizzing bubbles rising through the jar.'
        },
        {
          stepNumber: 3,
          action: 'Add 1 small piece (approx 5 grams) of crushed e-waste magnet and leave bubbling for 48 hours.',
          tips: 'Check the pH daily. As the bacteria work, you will see a subtle color shift from clear to faint straw/violet.',
          whatToLookFor: 'Pitting on the magnet surface and no harsh acid fumes or bubbling chlorine.'
        },
        {
          stepNumber: 4,
          action: 'Log your 48-hour pH reading, water temperature, and photograph your sample for the Convergence registry.',
          tips: 'Volunteers from university labs will analyze mailed-in vials from top community batches for free!',
          whatToLookFor: 'An entry in the decentralized mineral recovery database.'
        }
      ]
    }
  }
];

export const INITIAL_DATA_POINTS: CrowdsourcedDataPoint[] = [
  {
    id: 'dp-1',
    challengeId: 'pfas-blood-clearance',
    sampleId: 'PFAS-SERUM-OH-082',
    location: 'Parkersburg, WV (Ohio River Watershed)',
    collectedBy: 'Elena Rostova',
    collectorRole: 'Impacted Community Advocate',
    date: '2026-09-14',
    parameterName: 'Serum PFOA Post-Donation Clearance',
    numericValue: 32.4,
    unit: 'ng/mL',
    methodology: 'commercial_gc_ms',
    isVerified: true,
    verificationNotes: 'Verified against certified Quest Diagnostics panel report #QD-99218. 38% decrease from pre-intervention baseline (52.1 ng/mL).'
  },
  {
    id: 'dp-2',
    challengeId: 'pfas-blood-clearance',
    sampleId: 'PFAS-SORB-LAB-019',
    location: 'Supramolecular Biomaterials Lab, MA',
    collectedBy: 'Dr. Aris Vance',
    collectorRole: 'Research Biochemist',
    date: '2026-09-20',
    parameterName: 'Cyclodextrin Sorbent PFOA Binding Ratio',
    numericValue: 88.6,
    unit: '% bound',
    methodology: 'university_icp_ms',
    isVerified: true,
    verificationNotes: 'Triplicate run with LC-MS/MS; negative ESI mode. Albumin displacement confirmed without clotting enzyme loss.'
  },
  {
    id: 'dp-3',
    challengeId: 'pfas-blood-clearance',
    sampleId: 'PFAS-WELL-NC-104',
    location: 'Cape Fear River Basin, NC',
    collectedBy: 'Jared Kim',
    collectorRole: 'Citizen Water Monitor',
    date: '2026-09-22',
    parameterName: 'Municipal Well Outfall Total PFAS',
    numericValue: 14.8,
    unit: 'ng/L',
    methodology: 'citizen_test_strip',
    isVerified: false,
    verificationNotes: 'Citizen solid-phase colorimetric assay. Split duplicate sample sent to State Dept of Health for cross-confirmation.'
  },
  {
    id: 'dp-4',
    challengeId: 'critical-mineral-bioleaching',
    sampleId: 'REE-BIO-COOP-044',
    location: 'Detroit Maker Cooperative, MI',
    collectedBy: 'Marcus Thorne',
    collectorRole: 'Open Hardware Dev',
    date: '2026-09-16',
    parameterName: 'Nd Leaching Yield from Hard Drive Scrap',
    numericValue: 71.2,
    unit: '% recovery',
    methodology: 'university_icp_ms',
    isVerified: true,
    verificationNotes: 'Tested via collaborative university partner spectrometer. Ambient G. oxydans culture with aerated bubbler at 30°C.'
  },
  {
    id: 'dp-5',
    challengeId: 'critical-mineral-bioleaching',
    sampleId: 'DES-BAT-LAB-012',
    location: 'Circular Metals Laboratory, IL',
    collectedBy: 'Marcus Thorne',
    collectorRole: 'Open Hardware Dev',
    date: '2026-09-25',
    parameterName: 'ChCl-Citric Acid Cobalt Solubilization',
    numericValue: 94.1,
    unit: '% dissolved',
    methodology: 'diy_colorimeter',
    isVerified: true,
    verificationNotes: 'Calibrated open-source 665 nm spectrophotometer reading compared against cobalt sulfate standard curve.'
  }
];

export const INITIAL_LEXICON: LexiconTerm[] = [
  {
    id: 'lex-1',
    domain: 'PFAS & Forever Chemicals',
    scientificTerm: 'Enterohepatic Recirculation',
    phoneticSpelling: 'en-ter-oh-heh-PAT-ik ree-sur-kyoo-LAY-shun',
    plainEnglishTranslation: 'The Liver-to-Gut Recycling Loop',
    realWorldAnalogy: 'Imagine your liver throws trash into the hallway (your intestines) expecting the garbage truck to take it outside. But the doorman mistakes the trash for groceries and carries it right back into the living room.',
    whyItMattersToCitizens: 'This is why PFAS stays in your body for 5+ years instead of leaving in your stool. Stopping this loop with gut binders could flush out PFAS fast without painful treatments.',
    howScientistsMeasureIt: 'By tracking the biliary secretion rate vs fecal excretion percentage using radioactive carbon-14 or stable isotope-tagged fluorocarbons.'
  },
  {
    id: 'lex-2',
    domain: 'PFAS & Forever Chemicals',
    scientificTerm: 'Carbon-Fluorine Covalent Enthalpy',
    phoneticSpelling: 'KAR-bon FLOR-een koh-VAY-lent EN-thal-pee',
    plainEnglishTranslation: 'Unbreakable Molecular Super-Glue',
    realWorldAnalogy: 'The atomic bond between carbon and fluorine is the strongest single bond in organic chemistry—like a lock made of diamond that neither natural body heat nor standard bacteria can pick.',
    whyItMattersToCitizens: 'Explains why boiling your water, regular carbon pitchers, or natural body metabolism cannot destroy PFAS. You need special traps or powerful photocatalysts.',
    howScientistsMeasureIt: 'Measured in kilojoules per mole (typically 485 kJ/mol) using bond dissociation bomb calorimetry.'
  },
  {
    id: 'lex-3',
    domain: 'Critical Minerals & Metallurgy',
    scientificTerm: 'Biolixiviation (Bioleaching)',
    phoneticSpelling: 'bye-oh-liks-iv-ee-AY-shun',
    plainEnglishTranslation: 'Living Microbes Chewing Metal Free',
    realWorldAnalogy: 'Instead of pouring caustic acid or melting rock in blast furnaces at 1,500 degrees, you feed sugar or iron to friendly bacteria that naturally sweat out mild organic acids to dissolve metals gently.',
    whyItMattersToCitizens: 'Allows local repair shops and towns to recycle electric car batteries and electronics cleanly in simple plastic tanks without toxic fumes or acid spills.',
    howScientistsMeasureIt: 'Measured by percent metal yield in liquid solution over time (hours) using ICP-OES (Inductively Coupled Plasma Optical Emission Spectrometry).'
  },
  {
    id: 'lex-4',
    domain: 'Critical Minerals & Metallurgy',
    scientificTerm: 'Deep Eutectic Solvent (DES)',
    phoneticSpelling: 'DEEP yoo-TEK-tik SOL-vent',
    plainEnglishTranslation: 'Room-Temperature Liquid Crystal Blend',
    realWorldAnalogy: 'Two solid powders (like vitamin B and lemon crystals) that have high melting points on their own, but when mixed together in the right ratio, they melt each other into a completely safe, non-toxic liquid at room temperature.',
    whyItMattersToCitizens: 'Provides a safe, non-flammable liquid that can dissolve dead battery cathode metals without using dangerous nitric or hydrochloric acids in small workshops.',
    howScientistsMeasureIt: 'Differential scanning calorimetry (DSC) to detect the eutectic freezing point depression and conductivity meters.'
  },
  {
    id: 'lex-5',
    domain: 'Polymer Remediation',
    scientificTerm: 'Acoustophoretic Standing Wave',
    phoneticSpelling: 'uh-KOO-stoh-for-ET-ik STAND-ing WAVE',
    plainEnglishTranslation: 'Sound Wave Particle Tweezers',
    realWorldAnalogy: 'Just like deep bass at a concert can vibrate your chest, high-frequency sound waves in a water pipe create invisible pressure valleys where floating plastic fibers get pinned in place without any physical filter to clog.',
    whyItMattersToCitizens: 'Could be built into every household washing machine and dishwasher, capturing 99% of microfibers without filters that ever need washing or replacement.',
    howScientistsMeasureIt: 'Acoustic contrast factor (Φ) calculated from sound velocity and density disparities between polymer beads and fluid matrix.'
  }
];
