import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import CodeBlock from "../CodeBlock";

const AbstractionSlide = () => {
  const codeExample = `// Abstract class
abstract class Shape {
    abstract void draw();  // no body
}

class Circle extends Shape {
    void draw() {
        System.out.println("circle");
    }
}

// Interface
interface Printable {
    void print();
}

class Doc implements Printable {
    public void print() {
        System.out.println("printing");
    }
}`;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-4"
      >
        <div className="p-3 rounded-lg bg-destructive/20">
          <Eye className="w-8 h-8 text-destructive" />
        </div>
        <div>
          <span className="text-sm font-medium text-destructive uppercase tracking-wider">OOP Concept</span>
          <h2 className="text-4xl font-bold">Abstraction</h2>
        </div>
      </motion.div>

      <div className="flex-1 grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 rounded-lg bg-card border border-border"
          >
            <h4 className="font-semibold text-lg mb-2">Abstract Class</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive mt-1.5" />
                Can have both abstract and concrete methods
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive mt-1.5" />
                Cannot be instantiated directly
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive mt-1.5" />
                Can have constructors and fields
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-card border border-border"
          >
            <h4 className="font-semibold text-lg mb-2">Interface</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive mt-1.5" />
                100% abstraction (before Java 8)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive mt-1.5" />
                All methods implicitly public abstract
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive mt-1.5" />
                Supports multiple implementation
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CodeBlock code={codeExample} title="Abstraction.java" delay={0.5} />
        </motion.div>
      </div>
    </div>
  );
};

export default AbstractionSlide;
