import { motion } from "framer-motion";
import { Sparkles, Globe, Wifi, WifiOff } from "lucide-react";

const providers = [
  { name: "OpenAI (ChatGPT)", desc: "GPT-based rephrasing with high contextual understanding", icon: Globe },
  { name: "Google Gemini", desc: "Multi-modal AI for diverse linguistic transformations", icon: Globe },
  { name: "Anthropic Claude", desc: "Safety-focused AI with precise semantic preservation", icon: Globe },
  { name: "Offline NLP Engine", desc: "Compromise.js — no internet needed", icon: WifiOff },
];

const offlineOps = [
  "Verb tense transformation",
  "Synonym substitution",
  "Sentence restructuring",
  "Expansion of contractions",
  "Question phrasing modifications",
];

const AIRephrasingSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-accent/20">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        <h2 className="text-3xl font-bold">AI-Based Question Rephrasing</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            Enhances question diversity and reduces repetition by rewriting questions while preserving semantic meaning.
          </motion.p>

          {providers.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="p-4 rounded-lg bg-card border border-border flex items-center gap-3"
              >
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="text-sm font-semibold">{p.name}</span>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <WifiOff className="w-5 h-5 text-secondary" />
            Offline NLP Operations
          </h3>
          <ul className="space-y-3">
            {offlineOps.map((op, i) => (
              <motion.li
                key={op}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.06 }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                {op}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AIRephrasingSlide;
