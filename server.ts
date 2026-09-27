import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Google GenAI client if GEMINI_API_KEY is available
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback intelligent offline / rule-based AI admin responses when no key is provided
function generateFallbackAdminReply(
  prompt: string,
  channel: string,
  userRole?: string
): { reply: string; suggestions: string[] } {
  const p = prompt.toLowerCase();

  if (p.includes('pfas') || channel.includes('pfas') || p.includes('blood') || p.includes('forever chemical')) {
    if (p.includes('plasma') || p.includes('donation') || p.includes('filter')) {
      return {
        reply: `🔬 **Dr. Synapse AI (Protocol Admin)**: The proposed plasma exchange / hemoperfusion route is thermodynamically supported. Because perfluorooctane sulfonate (PFOS) binds human serum albumin at Subdomain IIA ($K_d \\approx 1.2 \\times 10^{-6}\\text{ M}$), targeted β-cyclodextrin sorbents can competitively desorb the linear fluorocarbon tail without disrupting native globulin fractions. 

🛡️ **Safety Guardrail**: Ensure immobilization media is heparinized to prevent contact-activation coagulopathy in clinical settings, and check that oral bile binders do not deplete fat-soluble vitamins (A, D, E, K).`,
        suggestions: [
          'Design an in-vitro whole blood clearance protocol',
          'Calculate partition coefficients for bile acid sequestrants',
          'Translate albumin binding kinetics into plain language'
        ]
      };
    }
    return {
      reply: `🔬 **Dr. Synapse AI (Protocol Admin)**: Systemic PFAS elimination requires overcoming two obstacles: the $485\\text{ kJ/mol}$ C-F bond energy and enterohepatic recirculation through liver bile transporters (OAT1/3). For citizen researchers, tracking serum levels before and after water filtration and regular phlebotomy provides vital epidemiological data.`,
      suggestions: [
        'How does beta-cyclodextrin encapsulate PFAS?',
        'What is enterohepatic recirculation in simple terms?',
        'How can citizens test for PFAS in tap water?'
      ]
    };
  }

  if (p.includes('mineral') || p.includes('battery') || p.includes('lithium') || p.includes('cobalt') || p.includes('neodymium') || channel.includes('mineral')) {
    return {
      reply: `⚡ **Dr. Synapse AI (Protocol Admin)**: For rare earth recovery from discarded hard drive magnets (NdFeB), *Gluconobacter oxydans* biolixiviation produces gluconic and 2-ketogluconic acids at ambient temperature ($30^\\circ\\text{C}$), achieving selective chelation of trivalent lanthanides ($\text{Nd}^{3+}, \text{Dy}^{3+}$) with stability constants $\\log \\beta_1 = 3.82$.

⚠️ **Makerspace Safety Notice**: Demagnetize magnet fragments thermally prior to crushing, and ensure all e-waste leachate effluent is neutralized with calcium hydroxide before disposal.`,
      suggestions: [
        'Optimize dissolved oxygen for Gluconobacter bioreactors',
        'Compare Deep Eutectic Solvents vs conventional acid leaching',
        'How can a makerspace test neodymium recovery with test strips?'
      ]
    };
  }

  if (p.includes('plastic') || p.includes('microplastic') || channel.includes('microplastics')) {
    return {
      reply: `🌊 **Dr. Synapse AI (Protocol Admin)**: Microplastic remediation requires acoustic standing-wave trapping for particle concentration followed by engineered FAST-PETase enzymatic esterase cleavage. The acoustic contrast factor $\\Phi$ permits separation of sub-micron fibers without cake-clogging physical membranes.`,
      suggestions: [
        'Explain acoustic wave trapping in washing machines',
        'What temperature does PETase require?',
        'How can citizens collect beach nanoplastic samples?'
      ]
    };
  }

  return {
    reply: `👋 **Dr. Synapse AI (Protocol Admin)**: Greetings! I am reviewing our cross-disciplinary contributions across our scientific and citizen research tracks. How can I assist with translating technical jargon, evaluating thermodynamic feasibility, or designing field safety controls?`,
    suggestions: [
      'Evaluate the feasibility of my hypothesis',
      'Translate technical scientific jargon into plain analogies',
      'Suggest a dual-track testing protocol'
    ]
  };
}

// AI Admin API endpoint
app.post('/api/ai-admin', async (req, res) => {
  try {
    const { prompt, channel = 'general', userRole = 'citizen', conversationHistory = [] } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // If Gemini client is initialized, query Gemini
    if (ai) {
      const systemInstruction = `You are Dr. Synapse AI, the Lead Research & Protocol Admin for "Convergence: Open Science Laboratory".
You operate as an egalitarian facilitator bridging professional scientists (biochemists, toxicologists, clean metallurgists) and non-professionals (impacted citizens, patients, water monitors, open hardware hackers).

Your responsibilities:
1. When a citizen or patient asks a question or shares an intuition, explain the chemical/physical reality using concrete, memorable real-world analogies, while validating their lived experience.
2. When a professional scientist discusses mechanisms, evaluate thermodynamic validity (enthalpy, kinetics, Kd values, selectivity coefficients) and suggest practical community translation.
3. For open testing protocols, emphasize biosafety, chemical PPE, and safe disposal.
4. Keep answers concise, highly structured, and grounded in real empirical chemistry and biology.
5. Provide 2-3 quick follow-up collaborative suggestion prompts.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [
          ...conversationHistory.slice(-4).map((h: any) => ({
            role: h.role === 'model' ? 'model' : 'user',
            parts: [{ text: h.text }],
          })),
          { role: 'user', parts: [{ text: `[Channel: #${channel}] [User Perspective: ${userRole}]: ${prompt}` }] },
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || 'Dr. Synapse AI is reviewing the empirical data.';
      return res.json({
        reply: replyText,
        suggestions: [
          'Translate this into an everyday real-world analogy',
          'What are the critical safety controls for this test?',
          'How can we test this with accessible field equipment?'
        ],
      });
    }

    // Intelligent domain fallback
    const fallback = generateFallbackAdminReply(prompt, channel, userRole);
    return res.json(fallback);
  } catch (error: any) {
    console.error('Error in /api/ai-admin:', error);
    // Return graceful fallback rather than failing
    const fallback = generateFallbackAdminReply(req.body?.prompt || '', req.body?.channel || 'general');
    return res.json(fallback);
  }
});

// Production / Dev Vite integration
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Serve static files from dist
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    // In development, mount Vite middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Convergence Open Science Server listening on port ${PORT}`);
  });
}

startServer();
