import { motion } from "framer-motion";
import { Timer } from "lucide-react";

const modules = [
  { name: "Question Parsing", time: "O(N)", space: "O(Q)" },
  { name: "Unit Classification", time: "O(U)", space: "O(U)" },
  { name: "Question Selection", time: "O(Q)", space: "O(Q)" },
  { name: "Duplication Detection", time: "O(Q²)", space: "O(Q)" },
  { name: "Document Generation", time: "O(Q)", space: "O(Q)" },
];

const ComplexitySlide = () => {
  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-3"
      >
        <div className="p-3 rounded-lg bg-secondary/20">
          <Timer className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-3xl font-bold">Time & Space Complexity</h2>
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary/30">
                <th className="text-left p-4 text-primary font-semibold">Module</th>
                <th className="text-center p-4 text-primary font-semibold">Time Complexity</th>
                <th className="text-center p-4 text-primary font-semibold">Space Complexity</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m, i) => (
                <motion.tr
                  key={m.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="border-b border-border/50 hover:bg-muted/20"
                >
                  <td className="p-4 font-medium">{m.name}</td>
                  <td className="p-4 text-center">
                    <code className="px-3 py-1 rounded bg-primary/10 text-primary font-mono text-sm">{m.time}</code>
                  </td>
                  <td className="p-4 text-center">
                    <code className="px-3 py-1 rounded bg-secondary/10 text-secondary font-mono text-sm">{m.space}</code>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-xs text-muted-foreground text-center"
          >
            N = document lines, Q = total questions, U = number of units
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplexitySlide;
