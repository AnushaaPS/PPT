import { motion } from "framer-motion";
import { BarChart3, CheckCircle } from "lucide-react";

const ResultsSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <BarChart3 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Section IV</span>
          <h2 className="text-4xl font-bold">Results & Discussion</h2>
        </div>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="font-semibold mb-4">Evaluation Dataset</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Tested with real undergraduate course: <span className="text-primary font-medium">VEC311 — Digital VLSI Design and Technology</span>
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Total Questions", value: "213" },
              { label: "Question Types", value: "MCQ, Short, Long" },
              { label: "Syllabus Units", value: "5 Units" },
              { label: "Bloom Levels", value: "K1-K6" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="p-3 rounded-lg bg-muted/50 text-center"
              >
                <div className="text-xl font-bold text-primary">{item.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="font-semibold mb-4">Key Findings</h3>
          <ul className="space-y-3">
            {[
              "Successfully parsed and classified 213 questions from DOCX",
              "Balanced question distribution across all 5 syllabus units",
              "Bloom's taxonomy level constraints enforced correctly",
              "Generated exam papers match institutional formatting standards",
              "AI rephrasing improved question diversity without semantic loss",
              "Significant reduction in faculty workload for exam preparation",
            ].map((finding, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {finding}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsSlide;
