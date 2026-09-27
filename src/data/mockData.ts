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
  },
  {
    id: 'user-6',
    name: 'Dr. Tarek Mansour',
    role: 'professional_scientist',
    roleLabel: 'Marine Biogeochemist',
    affiliationOrBackground: 'Reef Resilience & Ocean Chemistry Institute',
    avatarInitials: 'TM',
    verifiedStatus: 'peer_reviewed',
    bio: 'Specializing in ocean alkalinity enhancement (OAE), olivine weathering rates, and low-voltage mineral accretion for coral larvae.',
    contributionsCount: 38
  },
  {
    id: 'user-7',
    name: 'Chloe Dubois',
    role: 'citizen_researcher',
    roleLabel: 'Grassroots Phage Hunter & Microbiology Educator',
    affiliationOrBackground: 'Open Phage Hunters Collective',
    avatarInitials: 'CD',
    verifiedStatus: 'field_collector',
    bio: 'Collecting urban waterway and compost isolates to discover natural bacteriophages against antibiotic-resistant superbugs.',
    contributionsCount: 44
  },
  {
    id: 'user-8',
    name: 'Silas Green',
    role: 'impacted_community',
    roleLabel: 'Regenerative Farmer & Soil Advocate',
    affiliationOrBackground: 'Alliance for Clean Farmland & Biosolid Safety',
    avatarInitials: 'SG',
    verifiedStatus: 'community_lead',
    bio: 'Testing industrial hemp and mycoremediation cover crops to stop PFAS from leaching from historical biosolid sludge into pasture grass.',
    contributionsCount: 22
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
  },
  {
    id: 'ocean-acidification-coral-alkalinity',
    slug: 'ocean-acidification-coral-alkalinity',
    title: 'Ocean Acidification & Coral Alkalinity Enhancement',
    domain: 'Marine Geochemistry & Coastal Ecology',
    bannerImage: '/src/assets/images/coral_alkalinity_restoration_1790534978122.jpg',
    summaryCitizen: 'Burning fossil fuels creates carbon dioxide that dissolves into the oceans, turning seawater increasingly acidic. Shellfish shells and coral skeletons are literally dissolving, destroying nurseries for 25% of all marine life. Divers, coastal communities, and scientists are testing crushed volcanic rock weathering and gentle solar-powered electric mineral accretion to make local waters alkaline and help baby corals rebuild their stone homes.',
    summaryScience: 'Ocean pH has declined from 8.25 to 8.05 since the industrial revolution (a 30% increase in [H⁺] hydronium activity), driving down the aragonite saturation state (Ω_arag) below the critical 3.2 threshold required for scleractinian coral calcification. This track explores accelerated chemical weathering of olivine/forsterite (Mg₂SiO₄ + 4CO₂ + 4H₂O → 2Mg²⁺ + 4HCO₃⁻ + H₄SiO₄) and low-voltage cathodic electrolytic mineral accretion (Biorock process) to restore local carbonate equilibria.',
    urgencyMetrics: [
      { label: 'Surface Ocean pH Drop', value: '-0.11', unit: 'pH units', trend: '30% acid increase' },
      { label: 'Aragonite Saturation (Ω_arag)', value: '2.84', unit: 'index', trend: 'Below calcification target' },
      { label: 'Coral Reef Loss by 2050 (Base)', value: '72.0', unit: '%', trend: 'Severe risk without intervention' },
      { label: 'Electrolytic Accretion Growth Gain', value: '+340', unit: '%', trend: '3.4x faster calcification' }
    ],
    keyBottlenecks: [
      {
        title: 'Carbonate Ion Starvation',
        citizenDescription: 'When water gets slightly acidic, the chemical building blocks that baby clams and corals need to build shells are stripped away into dissolved gas.',
        scientificMechanism: 'Excess aqueous H⁺ reacts with free carbonate ions (H⁺ + CO₃²⁻ ↔ HCO₃⁻), depleting the carbonate ion pool necessary for calcium carbonate precipitation.'
      },
      {
        title: 'Mineral Dissolution Speed',
        citizenDescription: 'Volcanic rocks naturally soak up acid and neutralize oceans, but in nature it takes thousands of years. We need safe ways to speed this up in coastal bays.',
        scientificMechanism: 'Forsterite olivine dissolution kinetics are surface-area limited, requiring sub-50 μm mechanical milling and wave kinetic agitation to avoid passivation silica rinds.'
      },
      {
        title: 'Trace Nickel Runoff in Coastal Waters',
        citizenDescription: 'Some natural volcanic minerals contain small amounts of nickel or chromium that could hurt sea life if dumped carelessly without testing.',
        scientificMechanism: 'Natural olivine contains 0.2–0.4 wt% NiO. Bioluminescent algal bioassays must verify that mobilized Ni²⁺ stays below the 8.2 μg/L EPA saltwater toxicity threshold.'
      }
    ],
    activeHypothesesCount: 6,
    openFieldProtocolsCount: 3,
    verifiedDataPointsCount: 118
  },
  {
    id: 'antimicrobial-resistance-phage-hunting',
    slug: 'antimicrobial-resistance-phage-hunting',
    title: 'Citizen Phage Hunting & Superbug Biofilm Adjuvants',
    domain: 'Microbiology & Infectious Disease Defense',
    bannerImage: '/src/assets/images/bacteriophage_hunting_amr_1790534990887.jpg',
    summaryCitizen: 'Overuse of antibiotics has created "superbugs" that immune systems and modern medicine cannot kill. By 2050, drug-resistant infections could kill 10 million people each year. But nature has a natural predator: bacteriophages—friendly viruses that eat only specific bad bacteria without harming human cells. Citizen scientists are collecting water and soil samples from puddles and compost to find new wild phages, while biochemists match them against hospital superbugs.',
    summaryScience: 'Pathogenic bacteria (MRSA, Pseudomonas aeruginosa, Acinetobacter baumannii) produce dense extracellular polymeric substance (EPS) biofilms and express multidrug efflux pumps that render beta-lactams and carbapenems ineffective. This research stream pairs crowdsourced environmental isolation of lytic Caudoviricetes bacteriophages with biofilm-disrupting phytochemical adjuvants (carvacrol, quercetin) to resensitize resistant pathogens.',
    urgencyMetrics: [
      { label: 'Annual Global AMR Deaths', value: '1.27', unit: 'million', trend: 'Projected 10M by 2050' },
      { label: 'Hospital Biofilm Antibiotic Resistance', value: '1000', unit: 'x fold', trend: 'Standard doses fail' },
      { label: 'Citizen Phage Isolation Success', value: '28.4', unit: '%', trend: 'From raw storm runoff' },
      { label: 'Phage + Adjuvant Synergy Rate', value: '88.5', unit: '%', trend: 'Resensitization achieved' }
    ],
    keyBottlenecks: [
      {
        title: 'Bacterial Slime Fortress (Biofilm)',
        citizenDescription: 'Bacteria surround themselves in a sticky shield of biological slime that prevents medicines from reaching them.',
        scientificMechanism: 'Extracellular polymeric substances (alginate, Pel, Psl polysaccharides) form a steric and electrostatic barrier preventing antibiotic diffusion into the colony core.'
      },
      {
        title: 'Hyper-Specific Phage Locks',
        citizenDescription: 'Each phage virus is like a key made for only one single lock. If a patient gets infected with a slightly different strain, the phage misses completely.',
        scientificMechanism: 'Tail fiber adhesins exhibit strict specificity for specific lipopolysaccharide (LPS) O-antigen epitopes or flagellar proteins, necessitating broad-spectrum cocktail formulation.'
      },
      {
        title: 'Safety from Bacterial Toxins (Endotoxins)',
        citizenDescription: 'When phages burst bad bacteria, dead bacterial fragments release poisons into the water or body that must be filtered out cleanly before testing.',
        scientificMechanism: 'Gram-negative bacterial lysis releases lipopolysaccharide endotoxin (lipid A), which induces severe pyrogenic sepsis if not removed below < 5.0 EU/kg.'
      }
    ],
    activeHypothesesCount: 9,
    openFieldProtocolsCount: 4,
    verifiedDataPointsCount: 164
  },
  {
    id: 'agricultural-pfas-phytoremediation',
    slug: 'agricultural-pfas-phytoremediation',
    title: 'Farmland PFAS Remediation & Biosolid Detoxification',
    domain: 'Agricultural Ecology & Soil Biogeochemistry',
    bannerImage: '/src/assets/images/agricultural_phytoremediation_soil_1790535001003.jpg',
    summaryCitizen: 'For decades, wastewater sludge ("biosolids") was sold to farmers as fertilizer. We now know it was loaded with PFAS, which has poisoned farm soils, dairy cattle, and crops across the country. Family farmers and plant scientists are co-designing non-food cover crop rotations (like industrial hemp and sunflowers) and specially fired wood charcoal (biochar) that trap forever chemicals in the soil so they cannot enter our food.',
    summaryScience: 'Municipal biosolids application has contaminated hundreds of thousands of hectares with perfluorinated alkyl acids (PFAAs) at levels exceeding 100 ng/g dry weight. This challenge investigates the biophysical remediation matrix: combining high-temperature pyrolyzed pinewood biochar (surface area > 450 m²/g) to immobilize PFOA/PFOS via pore entrapment, while evaluating root exudate transpirational pull and fungal laccase-mediator biotransformation.',
    urgencyMetrics: [
      { label: 'Farmland Receiving Biosolids', value: '20.0', unit: 'million acres', trend: 'Widespread legacy loading' },
      { label: 'Plant Root-to-Shoot Translocation', value: '4.2', unit: 'TF ratio', trend: 'Migrates into silage feed' },
      { label: 'Biochar Soil Immobilization', value: '94.8', unit: '%', trend: 'Stops plant uptake' },
      { label: 'Target Safe Soil PFOA', value: '0.05', unit: 'ppb', trend: 'Zero tolerance standard' }
    ],
    keyBottlenecks: [
      {
        title: 'Plant Translocation into Edible Parts',
        citizenDescription: 'Crops like corn and grass act like straws, sucking up PFAS from contaminated soil and depositing it directly into grains, feed, and cow milk.',
        scientificMechanism: 'Short-chain perfluoroalkyl acids (PFBA, PFBS) mimic acetate and water-soluble anions, passing through root Casparian strips via passive xylem transpirational stream.'
      },
      {
        title: 'Trapping Toxins Without Ruining Soil Fertility',
        citizenDescription: 'If you add heavy binding agents to a field, you might accidentally lock up essential plant nutrients like phosphorus, leaving crops unable to grow.',
        scientificMechanism: 'Sorbent amendments must selectively bind perfluoroalkyl anions without suppressing cation exchange capacity (CEC) or stripping orthophosphate (PO₄³⁻) fertilizers.'
      }
    ],
    activeHypothesesCount: 8,
    openFieldProtocolsCount: 3,
    verifiedDataPointsCount: 132
  },
  {
    id: 'low-carbon-geopolymer-cements',
    slug: 'low-carbon-geopolymer-cements',
    title: 'Zero-Kiln Geopolymers & Atmospheric CO₂ Concrete',
    domain: 'Sustainable Materials & Geological Chemistry',
    bannerImage: '/src/assets/images/geopolymer_carbon_cement_1790535011685.jpg',
    summaryCitizen: 'Traditional concrete is responsible for 8% of all greenhouse gas emissions on Earth because limestone must be baked in giant kilns at 2,700°F. Builders, potters, and materials scientists are creating "stone without fire"—mixing volcanic ash, clay, and agricultural waste with gentle alkali water to create concrete that cures cold, sets in hours, and permanently soaks up carbon dioxide directly from the atmosphere.',
    summaryScience: 'Ordinary Portland Cement (OPC) calcination (CaCO₃ → CaO + CO₂) and kiln combustion emit ~0.85 kg CO₂ per kg clinker. This challenge designs alkali-activated geopolymeric materials (AAM) using industrial aluminosilicate pozzolans (metakaolin, class F fly ash, ground granulated blast furnace slag) cured at ambient temperatures (20–35°C), engineered with accelerated atmospheric carbonation that permanently mineralizes CO₂ into durable calcium-silicate-hydrate (C-S-H) phases.',
    urgencyMetrics: [
      { label: 'Global Cement CO₂ Emissions', value: '8.0', unit: '% of planet total', trend: '2.8 Gt CO₂/yr' },
      { label: 'Geopolymer Embodied Carbon Cut', value: '-82.0', unit: '%', trend: 'Near zero-emission potential' },
      { label: '28-Day Compressive Strength', value: '54.5', unit: 'MPa', trend: 'Exceeds standard concrete' },
      { label: 'CO₂ Permanently Mineralized', value: '112', unit: 'kg/ton', trend: 'Direct carbon sequestration' }
    ],
    keyBottlenecks: [
      {
        title: 'Caustic Activator Safety for DIY Builders',
        citizenDescription: 'Commercial geopolymers often use strong lye that burns skin; home builders and small workshops need gentle, food-safe recipe alternatives.',
        scientificMechanism: 'Dissolution of vitreous aluminosilicate networks typically demands pH > 13.5 (NaOH/Na₂SiO₃), requiring milder bicarbonate-carbonate activated alternative activator buffers.'
      },
      {
        title: 'Fast Setting Unpredictability',
        citizenDescription: 'Depending on the humidity or local clay source, geopolymer concrete can either harden in five minutes before you can pour it, or stay wet for days.',
        scientificMechanism: 'Geopolymerization polycondensation kinetics (Si-O-Al-O-Si cross-linking) exhibit high sensitivity to ambient temperature and reactive aluminum dissolution rates.'
      }
    ],
    activeHypothesesCount: 7,
    openFieldProtocolsCount: 4,
    verifiedDataPointsCount: 88
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
    id: 'hypo-301',
    challengeId: 'ocean-acidification-coral-alkalinity',
    title: 'Low-Voltage Solar Cathodic Aragonite Accretion for Community Reef Nurseries',
    stage: 'field_validated',
    stageLabel: 'Field Validated',
    author: {
      name: 'Dr. Tarek Mansour',
      role: 'professional_scientist',
      roleLabel: 'Marine Biogeochemist',
      avatarInitials: 'TM',
      isProfessional: true
    },
    coAuthorsCount: 9,
    createdAt: '2026-09-02',
    citizenSpark: {
      observation: 'Indonesian dive instructors and indigenous fishermen noticed that submerged wire mesh structures accidentally connected to a small boat solar battery began growing thick, white calcium rock in months, and baby corals naturally anchored there and survived severe heatwaves.',
      intuitiveQuestion: 'Can an ultra-gentle electric charge from a $50 floating solar panel change the local water chemistry around a dying reef to stop acid dissolution and feed coral calcification?',
      practicalImpact: 'Coastal diving communities and islanders can construct modular reef-growing cradles using cheap steel rebar and small floating solar panels to protect shorelines.'
    },
    scientificRigorous: {
      theoreticalMechanism: 'Low-voltage direct current (1.2–3.0 V, current density 0.1–0.5 A/m²) applied across a submerged steel cathode and inert titanium-mixed-metal oxide (MMO) anode drives water electrolysis: 2H₂O + 2e⁻ → H₂ + 2OH⁻ at the cathode surface. The resulting localized hydroxyl generation raises surface pH to 9.2–9.8, shifting carbonate equilibria toward CO₃²⁻ and triggering spontaneous epitaxy of aragonite (CaCO₃) and brucite (Mg(OH)₂).',
      chemicalOrPhysicalPrinciples: 'Electrochemical precipitation kinetics governed by Faraday\'s law and the saturation index log(IAP/Ksp). Coral polyp cellular ATP consumption for proton pumping (Ca²⁺-ATPase) is cut by 60% due to favorable proton gradient, accelerating tissue growth.',
      analyticalMethods: 'In-situ microelectrode profiling of pH and dissolved oxygen; scanning electron microscopy (SEM-EDS) of crystal polymorphs; buoyant weight coral growth measurement.',
      primaryCitations: [
        'Goreau & Hilbertz, Int J Oceanogr (2012): Marine electrolysis for coral reef and fisheries habitat restoration.',
        'Albright et al., Nature 531 (2016): Reversal of ocean acidification enhances net coral reef calcification.'
      ]
    },
    collaboratorsNeeded: [
      'Marine electrical engineer to build open-source MPPT solar trickle regulators',
      'Scuba dive club leaders willing to deploy monitoring camera rigs',
      'Larval biologist to measure settlement preference on fresh aragonite coatings'
    ],
    feasibilityVotes: {
      scientificRigorousScore: 95,
      communityRelevanceScore: 97,
      upvotes: 215
    },
    userHasUpvoted: true,
    comments: [
      {
        id: 'c-301',
        authorName: 'Jared Kim',
        authorRole: 'Citizen Water Monitor',
        isProfessional: false,
        timestamp: '1 week ago',
        type: 'community_reality_check',
        content: 'We set up two test frames off Key Largo using repurposed rebar and a 40W floating solar panel. Within 3 weeks, a hard white aragonite crust 2mm thick had formed with zero flaking. Baby Acropora frags cemented onto the mesh are growing twice as fast as control blocks!'
      }
    ]
  },
  {
    id: 'hypo-401',
    challengeId: 'antimicrobial-resistance-phage-hunting',
    title: 'Phage-Phytochemical Synergy: Synergistic Lytic Cocktails with Terpene Biofilm Permeabilizers',
    stage: 'in_bench_testing',
    stageLabel: 'In Bench Testing',
    author: {
      name: 'Chloe Dubois & Dr. Soraya Lin',
      role: 'citizen_researcher',
      roleLabel: 'Citizen Phage Hunter Co-Lead',
      avatarInitials: 'CD',
      isProfessional: false
    },
    coAuthorsCount: 5,
    createdAt: '2026-09-08',
    citizenSpark: {
      observation: 'Chloe collected storm drain water from an urban park and isolated a wild virus that attacked Pseudomonas bacteria on agar plates. However, inside stubborn hospital slime biofilms, the phages got stuck. Chloe tested adding micro-drops of food-grade oregano oil (carvacrol) and observed the biofilm dissolve, allowing the phages to wipe out 99.9% of the bacteria.',
      intuitiveQuestion: 'Can harmless herbal plant oils crack open the slime shield around antibiotic-resistant bacteria so wild virus hunters can eliminate the infection?',
      practicalImpact: 'Could be formulated as a topical spray or wound wash for diabetic foot ulcers and burn victims facing amputations from drug-resistant hospital infections.'
    },
    scientificRigorous: {
      theoreticalMechanism: 'Carvacrol (2-methyl-5-(1-methylethyl)phenol) intercalates into the bacterial outer membrane and destabilizes the extracellular polymeric substance (EPS) matrix by disrupting hydrophobic bonding in Pel/Psl exopolysaccharides. This reduces biofilm viscoelastic modulus by 78%, allowing unhindered Brownian diffusion of Caudoviricetes bacteriophages to outer-membrane OprM and LPS receptors, initiating lytic cycle replication.',
      chemicalOrPhysicalPrinciples: 'Membrane fluidity perturbation measured by fluorescence polarization of DPH; lytic burst size amplification (140 phages/bacterium); fractional inhibitory concentration index (FICI) < 0.35 indicating strong pharmacodynamic synergy.',
      analyticalMethods: 'Confocal laser scanning microscopy (CLSM) with LIVE/DEAD BacLight staining; plaque assay titration; dynamic light scattering (DLS) of viral particle size distribution.',
      primaryCitations: [
        'Kutateladze & Adamia, Trends Biotechnol 28 (2010): Bacteriophages as potential new therapeutics to replace antibiotics.',
        'Nostro et al., J Med Microbiol 56 (2007): Susceptibility of biofilm bacteria to plant essential oils.'
      ]
    },
    collaboratorsNeeded: [
      'Infectious disease clinician with clinical isolate panel of MDR Pseudomonas',
      'Formulation chemist to prepare stable oil-in-water microemulsion without inactivating viral capsids',
      'Community phage hunters with water sample coordinates'
    ],
    feasibilityVotes: {
      scientificRigorousScore: 91,
      communityRelevanceScore: 99,
      upvotes: 231
    },
    userHasUpvoted: true,
    comments: [
      {
        id: 'c-401',
        authorName: 'Dr. Soraya Lin',
        authorRole: 'Clinical Toxicologist',
        isProfessional: true,
        timestamp: '4 days ago',
        type: 'mechanism_critique',
        content: 'This combination is exceptionally promising. Our key safety control is ensuring carvacrol concentration is kept below 0.05% (w/v) to prevent keratinocyte toxicity, while maintaining sufficient disruption to let the phage cocktail clear the bacterial load.'
      }
    ]
  },
  {
    id: 'hypo-501',
    challengeId: 'agricultural-pfas-phytoremediation',
    title: 'Engineered Pyrolyzed Biochar Amendment to Halt Plant Root PFAAs Bioaccumulation',
    stage: 'in_bench_testing',
    stageLabel: 'In Bench Testing',
    author: {
      name: 'Silas Green & Dr. Aris Vance',
      role: 'impacted_community',
      roleLabel: 'Regenerative Farmer Co-Lead',
      avatarInitials: 'SG',
      isProfessional: false
    },
    coAuthorsCount: 4,
    createdAt: '2026-09-15',
    citizenSpark: {
      observation: 'After a dairy farm had to dump thousands of gallons of milk due to historical biosolid fertilizer containing PFAS, Silas tested mixing crushed charcoal from his wood stove into a small greenhouse test bed. The sunflowers and pasture grass grown in the charcoal-amended soil tested 92% cleaner than the un-amended beds.',
      intuitiveQuestion: 'Can farmers apply affordable, locally-made charcoal to their pastures to permanently trap forever chemicals in the dirt so cows can safely graze again?',
      practicalImpact: 'Saves multi-generational family farms from bankruptcy and ensures safe, non-toxic milk and produce for the food supply.'
    },
    scientificRigorous: {
      theoreticalMechanism: 'Slow pyrolysis of hardwood/pinewood at 700°C creates high aromaticity and specific surface area (> 420 m²/g) dominated by micropores (1.0–2.0 nm). Perfluorooctanesulfonate (PFOS) molecules undergo sterically favorable pore entrapment combined with hydrophobic interactions and π-π electron-donor-acceptor interactions with condensed polycyclic aromatic graphene sheets, lowering soil pore-water free PFAS concentration below root uptake thresholds.',
      chemicalOrPhysicalPrinciples: 'Freundlich sorption coefficient Kf increases from 4.2 L/kg (native soil) to 840 L/kg (2% w/w biochar amendment). Plant root translocation factor TF drops from 3.8 to 0.18 for PFOA and < 0.05 for PFOS.',
      analyticalMethods: 'LC-MS/MS of soil pore-water lysimeters; plant tissue microwave acid digestion; nitrogen BET surface area porosimetry.',
      primaryCitations: [
        'Kuppusamy et al., Environ Pollut 216 (2016): Remediation of PFAS-contaminated soils using biochar.',
        'Sohrabi et al., Chemosphere 301 (2022): Immobilization of PFOA and PFOS in agricultural soils.'
      ]
    },
    collaboratorsNeeded: [
      'Soil extension scientist for large-acreage trial permitting',
      'Mobile pyrolysis kiln operator for local farm waste processing',
      'Agricultural economics modeler'
    ],
    feasibilityVotes: {
      scientificRigorousScore: 92,
      communityRelevanceScore: 96,
      upvotes: 178
    },
    userHasUpvoted: true,
    comments: [
      {
        id: 'c-501',
        authorName: 'Silas Green',
        authorRole: 'Regenerative Farmer',
        isProfessional: false,
        timestamp: '2 days ago',
        type: 'community_reality_check',
        content: 'Farmers cannot afford $20,000 per acre soil excavation. Applying 5 tons/acre of farm-waste biochar during standard tilling is something every tractor operator can do tomorrow without special equipment.'
      }
    ]
  },
  {
    id: 'hypo-601',
    challengeId: 'low-carbon-geopolymer-cements',
    title: 'Ambient Carbonation-Cured Rice Husk Ash & Slag Geopolymer Blocks',
    stage: 'spark',
    stageLabel: 'Citizen Spark',
    author: {
      name: 'Marcus Thorne',
      role: 'applied_engineer',
      roleLabel: 'Open Hardware Dev',
      avatarInitials: 'MT',
      isProfessional: false
    },
    coAuthorsCount: 3,
    createdAt: '2026-09-22',
    citizenSpark: {
      observation: 'Marcus burned discarded agricultural rice husks into amorphous silica ash, stirred it with waste steel mill slag and dissolved washing soda (sodium carbonate), and poured it into brick molds. In the presence of ambient air, the bricks absorbed carbon dioxide and became harder than standard concrete within 48 hours without baking.',
      intuitiveQuestion: 'Can we build fireproof, waterproof masonry blocks out of farm waste and baking soda that literally suck carbon out of the room as they harden?',
      practicalImpact: 'Empowers off-grid communities, refugee shelters, and small builders to make certified foundation blocks without expensive Portland cement or fossil-fueled kilns.'
    },
    scientificRigorous: {
      theoreticalMechanism: 'Amorphous reactive silica from rice husk ash (SiO₂ > 90%) reacts with calcium aluminosilicate slag under mild alkali activation (Na₂CO₃ / Ca(OH)₂ buffer at pH 12.0). The gel matrix forms hydrated calcium aluminosilicate (C-A-S-H) phases. Passive exposure to ambient CO₂ (420 ppm) induces accelerated mineral carbonation, precipitating microcrystalline calcite into capillary pores, yielding 48 MPa compressive strength and negative net embodied carbon (-110 kg CO₂/m³).',
      chemicalOrPhysicalPrinciples: 'Polycondensation of silicate tetrahedra: Si(OH)₄ + Al(OH)₄⁻ → (OH)₃Si-O-Al(OH)₃⁻ + H₂O. Carbonation densification reduces total water absorption below 4.5% and doubles elastic modulus.',
      analyticalMethods: 'Universal testing machine (UTM) ASTM C109 compressive testing; FTIR spectroscopy of Si-O-Si stretching; thermogravimetric analysis (TGA) for mineralized CO₂ quantification.',
      primaryCitations: [
        'Provis & van Deventer, Geopolymers: Structures, Processing, Properties (2009).',
        'Bernal et al., Mater Struct 47 (2014): Durability of alkali-activated materials in civil infrastructure.'
      ]
    },
    collaboratorsNeeded: [
      'Structural engineer to perform certified ASTM freeze-thaw and seismic shear testing',
      'Agricultural co-op for bulk rice husk supply'
    ],
    feasibilityVotes: {
      scientificRigorousScore: 87,
      communityRelevanceScore: 94,
      upvotes: 126
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
  },
  {
    id: 'proto-phage-01',
    challengeId: 'antimicrobial-resistance-phage-hunting',
    hypothesisId: 'hypo-401',
    title: 'Waterway Bacteriophage Isolation & Plaque Enumeration',
    estimatedDuration: '24 hours',
    safetyLevel: 'supervised_field',
    safetyWarning: 'Use disposable gloves and clean surfaces. Do not touch or ingest raw environmental sewage waters.',
    wetLabTrack: {
      equipment: [
        'Class II Biosafety Cabinet (BSL-2)',
        'Benchtop 0.22 μm PES syringe filters',
        'Standard incubator at 37.0°C',
        'Transmission Electron Microscope (TEM) for capsid imaging'
      ],
      reagents: [
        'Nutrient broth and 0.7% soft top-agar (tryptic soy base)',
        'Clinical reference strain Pseudomonas aeruginosa PAO1',
        'SM buffer (50 mM Tris-HCl, 100 mM NaCl, 8 mM MgSO₄, pH 7.5)',
        '0.5% chloroform for sample sterilization'
      ],
      steps: [
        {
          stepNumber: 1,
          action: 'Filter environmental water sample through 0.22 μm membrane to eliminate all intact bacterial cells while letting nanoscale phages pass.',
          parameters: 'Flow rate: 2 mL/min; collect 10 mL sterile filtrate.',
          criticalControlPoint: 'Verify sterile filtrate produces zero colony forming units (CFU) on negative control agar.'
        },
        {
          stepNumber: 2,
          action: 'Enrich with target bacterial host: add 1.0 mL log-phase P. aeruginosa PAO1 and 2x nutrient broth, incubate overnight at 37°C.',
          parameters: 'Agitation: 150 rpm; incubation time: 16–18 hours.',
          criticalControlPoint: 'Observe clearing of culture signaling active viral lysis.'
        },
        {
          stepNumber: 3,
          action: 'Perform double-layer agar plaque assay: mix 100 μL filtrate dilution with 200 μL host culture in molten soft agar and pour over base plate.',
          parameters: 'Agar temperature: 48°C (prevent host heat shock); incubate 24 hours at 37°C.',
          criticalControlPoint: 'Count circular clear plaque forming units (PFU) and isolate single plaque with sterile pipette tip.'
        }
      ]
    },
    citizenFieldTrack: {
      accessibleTools: [
        'Sterile 50 mL plastic centrifuge tubes or clean unused specimen cups',
        'Smartphone macro lens attachment ($10) for photographing plaque halos',
        'Coffee filter or sterile cotton syringe pre-filter',
        'Cooler bag with blue ice pack for field sample transit'
      ],
      householdReagents: [
        '70% Isopropyl alcohol spray for sanitizing hands and collection gear',
        'Distilled spring water'
      ],
      steps: [
        {
          stepNumber: 1,
          action: 'Locate a stagnant urban stormwater pond, creek eddy, or compost drainage seep. Dip specimen tube 10 cm below surface.',
          tips: 'Avoid fast-running mountain streams; phages thrive where bacteria congregate in warm, organic-rich waters.',
          whatToLookFor: 'Slightly murky pond water with organic sediment.'
        },
        {
          stepNumber: 2,
          action: 'Record exact GPS coordinates, water temperature, and take a photo of the watershed environment.',
          tips: 'Upload location to the Open Phage Hunt map so university researchers know where unique wild strains originate.',
          whatToLookFor: 'GPS fix accurate to within 5 meters.'
        },
        {
          stepNumber: 3,
          action: 'Pre-filter through clean sterile syringe plug and store on cold ice pack immediately.',
          tips: 'Do not leave in hot car sunlight, which damages viral DNA/capsids.',
          whatToLookFor: 'Clear yellow-tinted liquid ready for mailing to university partner lab.'
        }
      ]
    }
  },
  {
    id: 'proto-coral-01',
    challengeId: 'ocean-acidification-coral-alkalinity',
    hypothesisId: 'hypo-301',
    title: 'Low-Voltage Solar Cathodic Aragonite Accretion Setup',
    estimatedDuration: '14 days (Continuous)',
    safetyLevel: 'citizen_safe',
    safetyWarning: 'Direct current below 12V poses zero shock hazard in seawater, but keep all electrical wire connections waterproofed to prevent terminal corrosion.',
    wetLabTrack: {
      equipment: [
        'Regulated precision DC power supply with current limiting (0.01A precision)',
        'Unisense micro-pH and calcium ion-selective electrode (ISE) profiling system',
        'Mixed Metal Oxide (MMO) coated titanium mesh anode (anode-to-cathode ratio 1:4)',
        'Closed-circuit artificial seawater flume tank with controlled CO₂ injection'
      ],
      reagents: [
        'Synthetic Sea Salt meeting ASTM D1141 standard',
        'Certified reference seawater (Scripps Institute of Oceanography, Batch #192)',
        'Calibrated aragonite seed crystals'
      ],
      steps: [
        {
          stepNumber: 1,
          action: 'Establish baseline seawater alkalinity (2300 μmol/kg) and aragonite saturation Ω_arag = 2.8 at 25.0°C.',
          parameters: 'Salinity: 35.0 PSU; dissolved inorganic carbon (DIC) monitored via spectrophotometric pH.',
          criticalControlPoint: 'Verify zero heavy metal leaching from electrical leads.'
        },
        {
          stepNumber: 2,
          action: 'Energize circuit at calibrated current density: 0.25 A/m² cathode surface area.',
          parameters: 'Cathode potential: -0.95 V vs Ag/AgCl reference electrode.',
          criticalControlPoint: 'Measure interfacial boundary layer pH: must stabilize at 9.4 ± 0.2 without excessive Mg(OH)₂ precipitation.'
        },
        {
          stepNumber: 3,
          action: 'Harvest mineral crust at 14 days, rinse in deionized water, and analyze with Powder X-Ray Diffraction (PXRD).',
          parameters: 'Scan range 20–60° 2θ; quantify aragonite-to-calcite polymorph ratio.',
          criticalControlPoint: 'Confirm > 85% aragonite mineral phase.'
        }
      ]
    },
    citizenFieldTrack: {
      accessibleTools: [
        '50-watt small marine solar panel with waterproof IP68 cable gland',
        '5-amp low-voltage marine DC-DC buck converter set to 2.4 Volts',
        'Clean welded steel wire mesh / reinforcing rebar cage (cathode)',
        'Small scrap titanium wire or graphite carbon rod from art pencil (anode)',
        'Digital multimeter and digital aquarium salinity refractometer'
      ],
      householdReagents: [
        'Food-grade silicone sealant for electrical terminals',
        'Zip ties for securing cage in shallow protected bay or saltwater tub'
      ],
      steps: [
        {
          stepNumber: 1,
          action: 'Cut and shape steel wire mesh into a 30cm dome or cradle. This is the cathodic frame baby corals will live on.',
          tips: 'Clean any machine grease off the steel with rubbing alcohol or hot soapy water first.',
          whatToLookFor: 'Clean metallic steel with no loose oil.'
        },
        {
          stepNumber: 2,
          action: 'Connect the negative (-) wire from the solar converter to the steel cage. Connect positive (+) to the titanium/graphite rod.',
          tips: 'Negative is always the cathode that grows rock. If you reverse it, the metal will dissolve!',
          whatToLookFor: 'Tiny micro-bubbles (pure harmless hydrogen gas) gently rising from the steel wires.'
        },
        {
          stepNumber: 3,
          action: 'Inspect every 3 days. Within 7 days, you will see a hard snow-white stone crust coating the steel wires.',
          tips: 'Attach rescued coral fragments with non-toxic marine epoxy or cable ties directly to the white mineral crust.',
          whatToLookFor: 'Thick white rock coating with coral tissue rapidly expanding onto it.'
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
  },
  {
    id: 'dp-6',
    challengeId: 'ocean-acidification-coral-alkalinity',
    sampleId: 'REEF-ELEC-FL-011',
    location: 'Key Largo Reef Nursery, FL',
    collectedBy: 'Dr. Tarek Mansour',
    collectorRole: 'Marine Biogeochemist',
    date: '2026-09-18',
    parameterName: 'Cathodic Aragonite Accretion Rate',
    numericValue: 1.84,
    unit: 'mm / month',
    methodology: 'university_icp_ms',
    isVerified: true,
    verificationNotes: 'Solar cathodic frame powered at 2.4V (0.22 A/m²). XRD confirmed 91.2% pure aragonite mineral polymorph.'
  },
  {
    id: 'dp-7',
    challengeId: 'antimicrobial-resistance-phage-hunting',
    sampleId: 'AMR-PHG-NYC-009',
    location: 'Gowanus Canal Outfall, NY',
    collectedBy: 'Chloe Dubois',
    collectorRole: 'Grassroots Phage Hunter',
    date: '2026-09-19',
    parameterName: 'Wild Lytic Phage Plaque Density (PAO1)',
    numericValue: 3.4e5,
    unit: 'PFU/mL',
    methodology: 'citizen_test_strip',
    isVerified: true,
    verificationNotes: 'Double-layer agar plaque assay validated with university lab. Plaque clearing halo diameter 3.5 mm.'
  },
  {
    id: 'dp-8',
    challengeId: 'agricultural-pfas-phytoremediation',
    sampleId: 'SOIL-BIOCHAR-ME-023',
    location: 'Central Maine Dairy Farm, ME',
    collectedBy: 'Silas Green',
    collectorRole: 'Regenerative Farmer',
    date: '2026-09-21',
    parameterName: 'Pasture Soil Pore-Water PFOA Lockup',
    numericValue: 96.2,
    unit: '% immobilized',
    methodology: 'commercial_gc_ms',
    isVerified: true,
    verificationNotes: 'Tested after 3% w/w 700°C pinewood biochar tilling. Silage corn tested below 0.02 ppb detection limit.'
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
  },
  {
    id: 'lex-6',
    domain: 'Ocean Acidification',
    scientificTerm: 'Aragonite Saturation State (Ω_arag)',
    phoneticSpelling: 'uh-RAG-uh-nyte sach-yoo-RAY-shun',
    plainEnglishTranslation: 'The Shell-Building Sweet Spot',
    realWorldAnalogy: 'Like sugar in your tea: if you add plenty of sugar, it easily forms crystals on a string (rock candy). If the tea is too watered down or acidic, the crystals dissolve. Above 3.2, corals build thick rock effortlessly; below 2.0, baby shells literally dissolve into water.',
    whyItMattersToCitizens: 'Tells oyster farmers, divers, and coastal communities whether their local bay water will protect or dissolve baby shellfish and reef structures.',
    howScientistsMeasureIt: 'Calculated using total dissolved inorganic carbon (DIC) and spectrophotometric seawater pH sensors.'
  },
  {
    id: 'lex-7',
    domain: 'Antimicrobial Resistance',
    scientificTerm: 'Lytic Bacteriophage Plaque',
    phoneticSpelling: 'LY-tik bak-TEER-ee-oh-fayj PLAK',
    plainEnglishTranslation: 'The Superbug Bullseye Ring',
    realWorldAnalogy: 'A cloudy lawn of millions of bacteria on a petri dish where a single microscopic virus lands. As it multiplies and bursts through the bacteria, it creates a transparent circular clearing—a clear bullseye where the superbug was wiped out.',
    whyItMattersToCitizens: 'Shows citizen researchers with their naked eyes that an ordinary water droplet from a park pond contains natural medicine capable of killing fatal hospital infections.',
    howScientistsMeasureIt: 'Counted as Plaque Forming Units per milliliter (PFU/mL) on double-layer nutrient agar.'
  },
  {
    id: 'lex-8',
    domain: 'Soil Remediation',
    scientificTerm: 'Pyrolyzed Biochar Adsorption Isotherm',
    phoneticSpelling: 'py-RAH-lyzd BY-oh-char ad-SORP-shun EYE-so-therm',
    plainEnglishTranslation: 'The Microscopic Charcoal Magnet Curve',
    realWorldAnalogy: 'Wood baked without oxygen turns into a sponge with millions of microscopic tunnels. This curve graphs exactly how much toxic chemical can be trapped per spoonful of charcoal at different soil moisture levels.',
    whyItMattersToCitizens: 'Allows farmers to calculate the exact number of pounds of biochar to spread per acre to guarantee that toxins never seep into their cows\' milk or crops.',
    howScientistsMeasureIt: 'Fitted using Langmuir and Freundlich mathematical equations based on batch equilibrium shake-flask experiments.'
  }
];
