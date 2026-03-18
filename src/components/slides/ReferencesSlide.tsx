import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const refs = [
  "[1] Narayana et al., \"Automated Question Paper Generation using NLP,\" IEEE ICCIGST, 2024.",
  "[2] Antony et al., \"AI Based Automatic Question Paper Generation Using NLP,\" Springer, 2024.",
  "[3] Murshida et al., \"Automated System for Question Generation and Answer Evaluation,\" IEEE RAICS, 2024.",
  "[5] Cohen et al., \"Automatic rephrasing of transcripts-based action items,\" ACL-IJCNLP, 2021.",
  "[6] Dhomse & Ranjan, \"Automatic question paper generation using ML: A review,\" TJCME, 2021.",
  "[7] Liu et al., \"G-Asks: Intelligent automatic question generation system,\" D&D, 2012.",
  "[12] Zhang et al., \"A review on question generation from natural language text,\" ACM TOIS, 2021.",
  "[15] Lee et al., \"Few-shot ChatGPT prompt engineering for question generation,\" EIT, 2024.",
  "[16] Sharma et al., \"Automated Questions Unique Arrangement (AQUA),\" JAZ, 2023.",
];

const ReferencesSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-muted">
          <BookOpen className="w-6 h-6 text-muted-foreground" />
        </div>
        <h2 className="text-4xl font-bold">References</h2>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center max-w-4xl">
        {refs.map((ref, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="text-sm text-muted-foreground py-2 border-b border-border/30 last:border-0"
          >
            {ref}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default ReferencesSlide;
