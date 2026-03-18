import { motion } from "framer-motion";
import { Database, Box } from "lucide-react";

const DataTypesIntroSlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Part 1</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Data Types in Java</h2>
      </motion.div>

      <div className="flex-1 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-xl bg-card border border-border shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <Box className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Primitive Types</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Basic data types that store simple values directly in memory.
          </p>
          <ul className="space-y-2">
            {['byte', 'short', 'int', 'long', 'float', 'double', 'boolean', 'char'].map((type, i) => (
              <motion.li
                key={type}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <code className="font-mono text-code-type">{type}</code>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 rounded-xl bg-card border border-border shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-secondary/20">
              <Database className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold">Reference Types</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Complex types that store references to objects in memory.
          </p>
          <ul className="space-y-2">
            {['String', 'Arrays', 'Classes', 'Interfaces', 'Enums'].map((type, i) => (
              <motion.li
                key={type}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.05 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <code className="font-mono text-code-type">{type}</code>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default DataTypesIntroSlide;
