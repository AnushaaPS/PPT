import { motion } from "framer-motion";
import { AlertTriangle, Target } from "lucide-react";

const ProblemStatementSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-destructive/20">
          <AlertTriangle className="w-6 h-6 text-destructive" />
        </div>
        <h2 className="text-4xl font-bold">Problem Statement & Objectives</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-xl bg-card border border-destructive/30"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Problem Statement
          </h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex gap-2"><span className="text-destructive">✗</span> Manual question paper preparation is time-consuming and repetitive</li>
            <li className="flex gap-2"><span className="text-destructive">✗</span> Difficulty maintaining proper Bloom's taxonomy level alignment</li>
            <li className="flex gap-2"><span className="text-destructive">✗</span> Risk of question repetition and syllabus imbalance</li>
            <li className="flex gap-2"><span className="text-destructive">✗</span> Lack of integrated systems for analysis, selection, and export</li>
            <li className="flex gap-2"><span className="text-destructive">✗</span> No AI-based rephrasing for question diversity</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 rounded-xl bg-card border border-primary/30"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Objectives
          </h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex gap-2"><span className="text-primary">✓</span> To design an automated system for generating structured exam papers</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> To analyze question banks with unit-wise and Bloom's level distribution</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> To implement intelligent question selection with filtering constraints</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> To integrate AI-based question rephrasing (OpenAI, Gemini, Claude)</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> To export formatted DOCX papers following institutional standards</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemStatementSlide;
