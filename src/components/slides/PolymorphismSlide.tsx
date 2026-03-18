import { motion } from "framer-motion";
import { Shapes } from "lucide-react";
import CodeBlock from "../CodeBlock";

const PolymorphismSlide = () => {
  const codeExample = `// Overloading - same name, different params
class Calc {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

// Overriding - child redefines parent method
class Animal {
    void sound() { System.out.println("sound"); }
}

class Dog extends Animal {
    void sound() { System.out.println("bark"); }
}

Animal a = new Dog();
a.sound();  // bark`;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-4"
      >
        <div className="p-3 rounded-lg bg-accent/20">
          <Shapes className="w-8 h-8 text-accent" />
        </div>
        <div>
          <span className="text-sm font-medium text-accent uppercase tracking-wider">OOP Concept</span>
          <h2 className="text-4xl font-bold">Polymorphism</h2>
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
            <h4 className="font-semibold text-lg mb-2 text-accent">Method Overloading</h4>
            <p className="text-muted-foreground text-sm mb-2">
              Compile-time polymorphism - same method name, different parameters.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Different number of parameters</li>
              <li>• Different parameter types</li>
              <li>• Resolved at compile time</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-card border border-border"
          >
            <h4 className="font-semibold text-lg mb-2 text-accent">Method Overriding</h4>
            <p className="text-muted-foreground text-sm mb-2">
              Runtime polymorphism - child class redefines parent method.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Same method signature</li>
              <li>• Uses <code className="code-keyword">@Override</code> annotation</li>
              <li>• Resolved at runtime</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CodeBlock code={codeExample} title="Polymorphism.java" delay={0.5} />
        </motion.div>
      </div>
    </div>
  );
};

export default PolymorphismSlide;
