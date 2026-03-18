import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import CodeBlock from "../CodeBlock";

const InheritanceSlide = () => {
  const codeExample = `// Parent class
class Animal {
    void eat() {
        System.out.println("eating");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println("barking");
    }
}

Dog d = new Dog();
d.eat();   // inherited
d.bark();  // own method`;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-4"
      >
        <div className="p-3 rounded-lg bg-secondary/20">
          <GitBranch className="w-8 h-8 text-secondary" />
        </div>
        <div>
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">OOP Concept</span>
          <h2 className="text-4xl font-bold">Inheritance</h2>
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
            <h4 className="font-semibold text-lg mb-2">Key Concepts</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <code className="code-keyword">extends</code> keyword for inheritance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <code className="code-keyword">super</code> to call parent methods
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Child inherits all non-private members
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Java supports single inheritance only
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-muted/50 border border-border"
          >
            <h4 className="font-semibold text-lg mb-2">Types of Inheritance</h4>
            <div className="space-y-1 text-sm">
              <p><span className="text-secondary font-medium">Single</span> - One parent, one child</p>
              <p><span className="text-secondary font-medium">Multilevel</span> - Chain of inheritance</p>
              <p><span className="text-secondary font-medium">Hierarchical</span> - Multiple children</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CodeBlock code={codeExample} title="Animal.java" delay={0.5} />
        </motion.div>
      </div>
    </div>
  );
};

export default InheritanceSlide;
