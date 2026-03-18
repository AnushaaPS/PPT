import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const points = [
  "Examination question papers must evaluate multiple cognitive levels defined in Bloom's Revised Taxonomy — remembering, understanding, applying, analyzing, evaluating, and creating.",
  "Traditionally, question papers are manually prepared by faculty based on syllabus content, course outcomes, and examination regulations.",
  "Manual preparation introduces challenges: time consumption, question repetition, imbalance in syllabus coverage, and difficulty in maintaining cognitive level alignment.",
  "With advances in AI and NLP, automated systems can analyze syllabus content, extract topics, and generate questions with varying difficulty levels.",
  "This research proposes an intelligent system that automates selecting and structuring exam questions using a web-based interface aligned with Bloom's Taxonomy.",
];

const IntroductionSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Section I</span>
          <h2 className="text-4xl font-bold">Introduction</h2>
        </div>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center gap-4 max-w-4xl">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="flex gap-3 p-4 rounded-lg bg-card border border-border"
          >
            <span className="text-primary font-bold mt-0.5">•</span>
            <p className="text-muted-foreground leading-relaxed text-sm">{point}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntroductionSlide;
