import { motion } from "framer-motion";
import { FileOutput, FileText } from "lucide-react";

const GeneratedPaperSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <FileOutput className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold">Question Paper Generation & Export</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Generated Paper Includes
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Institution header and logo",
              "Examination title and duration",
              "Course outcomes (CO mapping)",
              "Structured question numbering",
              "Marks allocation per question",
              "Either-or question formatting",
              "Embedded diagrams and images",
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex gap-2"
              >
                <span className="text-primary">•</span> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="font-semibold mb-4">Export Process</h3>
          <div className="space-y-4">
            {[
              { step: "1", label: "Load question paper template" },
              { step: "2", label: "Insert exam header details" },
              { step: "3", label: "Populate question sections (Part A/B/C)" },
              { step: "4", label: "Apply institutional formatting rules" },
              { step: "5", label: "Generate downloadable DOCX document" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 p-3 rounded-lg bg-accent/10 border border-accent/20"
          >
            <p className="text-xs text-accent">
              Live preview available before export — instructors can review and modify before downloading.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GeneratedPaperSlide;
