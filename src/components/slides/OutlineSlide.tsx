import { motion } from "framer-motion";
import { List, BookOpen, Target, Search, Cpu, Settings, BarChart3, CheckCircle } from "lucide-react";

const items = [
  { icon: BookOpen, label: "Introduction" },
  { icon: Target, label: "Problem Statement & Objectives" },
  { icon: Search, label: "Literature Review" },
  { icon: Cpu, label: "Proposed Methodology" },
  { icon: Settings, label: "Experimental Setup / Implementation" },
  { icon: BarChart3, label: "Results & Discussion" },
  { icon: CheckCircle, label: "Conclusion & Future Scope" },
];

const OutlineSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <List className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Outline</h2>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center gap-4 max-w-2xl mx-auto w-full">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-medium">{item.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OutlineSlide;
