import { motion } from "framer-motion";
import { CheckCircle, Rocket } from "lucide-react";

const conclusions = [
  "Integrates question bank analysis, exam configuration, intelligent selection, and AI-based rephrasing in a single web platform",
  "Successfully automates structured exam paper generation with Bloom's taxonomy alignment",
  "Reduces faculty workload while ensuring syllabus coverage and formatting consistency",
  "Evaluated with a real question bank (213 questions) — generates balanced papers with minimal manual intervention",
];

const futureWork = [
  "Adaptive exam generation based on student performance analytics",
  "Automatic answer key creation",
  "Integration with Learning Management Systems (LMS)",
  "Fully automated assessment workflows for outcome-based education",
];

const ConclusionSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <CheckCircle className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-4xl font-bold">Conclusion & Future Scope</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-card border border-primary/30"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Conclusion
          </h3>
          <ul className="space-y-3">
            {conclusions.map((c, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary mt-0.5">✓</span>
                {c}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-xl bg-card border border-accent/30"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-accent" />
            Future Scope
          </h3>
          <ul className="space-y-3">
            {futureWork.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <span className="text-accent mt-0.5">→</span>
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ConclusionSlide;
