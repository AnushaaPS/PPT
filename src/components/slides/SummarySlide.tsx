import { motion } from "framer-motion";
import { CheckCircle, Code2, Layers } from "lucide-react";

const SummarySlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-8"
      >
        <CheckCircle className="w-16 h-16 text-primary" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        <span className="gradient-text">Summary</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-xl bg-card border border-border text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold">Data Types</h3>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              8 Primitive types for basic values
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Reference types for complex objects
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Wrapper classes bridge both worlds
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 rounded-xl bg-card border border-border text-left"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold">OOP Concepts</h3>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Encapsulation hides internal details
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Inheritance enables code reuse
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Polymorphism adds flexibility
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Abstraction simplifies complexity
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-muted-foreground text-lg"
      >
        Master these fundamentals to build robust Java applications!
      </motion.p>
    </div>
  );
};

export default SummarySlide;
