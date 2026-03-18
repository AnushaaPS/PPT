import { motion } from "framer-motion";
import { Search } from "lucide-react";

const reviews = [
  { author: "Narayana et al. (2024)", method: "NLP-based auto question generation", limitation: "Limited question formats & cognitive alignment" },
  { author: "Antony et al. (2024)", method: "AI-driven NLP question paper generation", limitation: "Lacks diverse format support" },
  { author: "Murshida et al. (2024)", method: "Automated Q&A generation + evaluation", limitation: "Inflexible for large-scale exams" },
  { author: "Dhomse & Ranjan (2021)", method: "ML-based question generation review", limitation: "Weak semantic understanding" },
  { author: "Liu et al. (2012)", method: "G-Asks intelligent question system", limitation: "No structured exam pattern adherence" },
  { author: "Zhang et al. (2021)", method: "Deep learning question generation", limitation: "Better context but no exam formatting" },
  { author: "Lee et al. (2024)", method: "ChatGPT prompt engineering for few-shot QG", limitation: "No Bloom's taxonomy enforcement" },
  { author: "Sharma et al. (2023)", method: "AQUA unique question arrangement", limitation: "Rearranges only; no semantic diversity" },
];

const LiteratureReviewSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-secondary/20">
          <Search className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-4xl font-bold">Literature Review</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 overflow-auto"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-3 text-primary font-semibold">Author</th>
              <th className="text-left p-3 text-primary font-semibold">Method</th>
              <th className="text-left p-3 text-primary font-semibold">Limitation</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="border-b border-border/50 hover:bg-muted/30"
              >
                <td className="p-3 font-medium text-foreground whitespace-nowrap">{r.author}</td>
                <td className="p-3 text-muted-foreground">{r.method}</td>
                <td className="p-3 text-destructive/80">{r.limitation}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-sm text-accent font-medium"
      >
        Our system addresses these gaps with an end-to-end solution integrating Bloom's taxonomy, AI rephrasing, and structured document generation.
      </motion.p>
    </div>
  );
};

export default LiteratureReviewSlide;
