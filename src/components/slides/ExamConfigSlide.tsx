import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const ExamConfigSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-secondary/20">
          <Settings className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-3xl font-bold">Examination Configuration</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="font-semibold mb-4 text-primary">Configurable Parameters</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {["Exam Duration", "Assessment Number", "Semester", "Course Code & Title", "Maximum Marks", "Exam Pattern"].map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="p-3 rounded-lg bg-muted/50 border border-border text-muted-foreground"
              >
                {p}
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
          <h3 className="font-semibold mb-4 text-primary">Examination Pattern</h3>
          <div className="space-y-4">
            {[
              { part: "Part A", desc: "5 questions × 2 marks each", detail: "Short answer or MCQ per question", color: "primary" },
              { part: "Part B", desc: "1 question × 8 marks", detail: "Either-or format, may split into sub-questions", color: "secondary" },
              { part: "Part C", desc: "2 questions × 16 marks each", detail: "Long answer, either-or or split format", color: "accent" },
            ].map((item, i) => (
              <motion.div
                key={item.part}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-4 rounded-lg bg-muted/30 border border-border"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-bold text-${item.color}`}>{item.part}</span>
                  <span className="text-sm text-muted-foreground">— {item.desc}</span>
                </div>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExamConfigSlide;
