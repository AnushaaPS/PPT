import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const levels = [
  { level: "K1", name: "Remember", marks: 0, color: "bg-muted" },
  { level: "K2", name: "Understand", marks: 14, color: "bg-primary/60" },
  { level: "K3", name: "Apply", marks: 76, color: "bg-primary" },
  { level: "K4", name: "Analyze", marks: 0, color: "bg-muted" },
];

const BloomsTaxonomySlide = () => {
  const total = 90;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-accent/20">
          <Layers className="w-6 h-6 text-accent" />
        </div>
        <h2 className="text-3xl font-bold">Bloom's Taxonomy Distribution</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {levels.map((l, i) => (
            <motion.div
              key={l.level}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{l.level} — {l.name}</span>
                <span className="text-muted-foreground">{l.marks} marks</span>
              </div>
              <div className="h-8 bg-muted/50 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(l.marks / total) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  className={`h-full ${l.color} rounded-lg flex items-center justify-center`}
                >
                  {l.marks > 0 && (
                    <span className="text-xs font-bold text-primary-foreground">{l.marks}</span>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}

          <div className="pt-4 border-t border-border flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-primary">{total} marks</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <h3 className="font-semibold mb-4">Key Insight</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The system successfully maintains instructor-defined cognitive level distribution. In the test case, <span className="text-primary font-semibold">84.4%</span> of marks were assigned to Apply (K3) level, demonstrating the system's ability to enforce Bloom's taxonomy constraints precisely.
          </p>
          <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-xs text-primary">
              ✓ Validated that question selection algorithm correctly filters and assigns questions matching the defined cognitive level requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BloomsTaxonomySlide;
