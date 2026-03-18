import { motion } from "framer-motion";
import { Cpu, Upload, BarChart3, Settings, Filter, Sparkles, FileOutput } from "lucide-react";

const stages = [
  { icon: Upload, label: "Question Bank Upload & Parsing", desc: "Upload DOCX, extract questions with metadata (unit, marks, Bloom level, type)" },
  { icon: BarChart3, label: "Question Bank Analysis", desc: "Statistical analysis: unit-wise distribution, question counts, type breakdown" },
  { icon: Settings, label: "Examination Configuration", desc: "Set exam duration, semester, course, marks, pattern (Part A/B/C)" },
  { icon: Filter, label: "Intelligent Question Selection", desc: "Filter by unit, type, Bloom level, marks allocation with constraint solving" },
  { icon: Sparkles, label: "AI-Based Question Rephrasing", desc: "Rephrase via OpenAI, Gemini, Claude, or offline NLP engine" },
  { icon: FileOutput, label: "Question Paper Generation & Export", desc: "Generate formatted DOCX with header, course outcomes, numbered questions" },
];

const MethodologySlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <Cpu className="w-6 h-6 text-primary" />
        </div>
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Section III</span>
          <h2 className="text-4xl font-bold">Proposed Methodology</h2>
        </div>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="p-5 rounded-xl bg-card border border-border hover:shadow-glow transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {i + 1}
                </div>
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{stage.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{stage.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MethodologySlide;
