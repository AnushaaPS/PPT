import { motion } from "framer-motion";
import { Upload, Database } from "lucide-react";
import CodeBlock from "../CodeBlock";

const QuestionBankSlide = () => {
  const pseudoCode = `Procedure Parse_Question_Bank(Document)
Begin
  Read document text line by line
  Identify question boundaries
  Extract metadata:
    - Unit number & course outcome
    - Bloom's taxonomy level
    - Question type (MCQ/Short/Long)
    - Marks allocation
  Store question + metadata in DB
End`;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-accent/20">
          <Upload className="w-6 h-6 text-accent" />
        </div>
        <h2 className="text-3xl font-bold">Question Bank Upload & Parsing</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-5 rounded-xl bg-card border border-border"
          >
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              Parsing Operations
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Identify question boundaries using numbering patterns</li>
              <li>• Detect unit numbers and course outcome tags</li>
              <li>• Extract Bloom's taxonomy levels (K1-K6)</li>
              <li>• Classify question type: MCQ, Short, Long Answer</li>
              <li>• Store extracted data in structured repository</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-5 rounded-xl bg-card border border-border"
          >
            <h3 className="font-semibold mb-2">Test Results</h3>
            <p className="text-sm text-muted-foreground">
              Successfully processed <span className="text-primary font-semibold">213 questions</span> from a DOCX question bank for VEC311 — Digital VLSI Design and Technology.
            </p>
          </motion.div>
        </div>

        <CodeBlock code={pseudoCode} title="Parsing Algorithm" delay={0.3} />
      </div>
    </div>
  );
};

export default QuestionBankSlide;
