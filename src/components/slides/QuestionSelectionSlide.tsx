import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import CodeBlock from "../CodeBlock";

const QuestionSelectionSlide = () => {
  const algorithm = `Procedure Select_Question(Unit, Marks, Bloom)
Begin
  Filter where Unit = selected unit
  Filter where Marks = required marks
  Filter where Bloom = selected level
  Return list of valid questions
End`;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <Filter className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold">Intelligent Question Selection</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-5 rounded-xl bg-card border border-border"
          >
            <h3 className="font-semibold mb-3">Filtering Constraints</h3>
            <div className="space-y-3">
              {[
                { label: "Unit Selection", desc: "Match questions to selected syllabus unit" },
                { label: "Question Type", desc: "MCQ, Short Answer, or Long Answer" },
                { label: "Bloom's Level", desc: "K1 (Remember) through K6 (Create)" },
                { label: "Marks Allocation", desc: "2, 8, or 16 marks based on exam part" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex gap-3 items-start"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="text-sm font-medium">{item.label}</span>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <CodeBlock code={algorithm} title="Selection Algorithm" delay={0.4} />
      </div>
    </div>
  );
};

export default QuestionSelectionSlide;
