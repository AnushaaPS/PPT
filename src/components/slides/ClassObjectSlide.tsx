import { motion } from "framer-motion";
import { Box, Boxes } from "lucide-react";
import CodeBlock from "../CodeBlock";

const ClassObjectSlide = () => {
  const codeExample = `// Class - Blueprint
class Student {
    String name;
    int age;
    
    void display() {
        System.out.println(name + ", " + age);
    }
}

// Object - Instance of Class
Student s1 = new Student();
s1.name = "John";
s1.age = 20;
s1.display();  // John, 20`;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-4"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <Boxes className="w-8 h-8 text-primary" />
        </div>
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">OOP Foundation</span>
          <h2 className="text-4xl font-bold">Class & Object</h2>
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
            <div className="flex items-center gap-2 mb-3">
              <Box className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-lg">Class (Blueprint)</h4>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                Template or blueprint for creating objects
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                Defines attributes (fields/properties)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                Defines behaviors (methods/functions)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                Uses <code className="code-keyword">class</code> keyword
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-card border border-border"
          >
            <div className="flex items-center gap-2 mb-3">
              <Boxes className="w-5 h-5 text-secondary" />
              <h4 className="font-semibold text-lg">Object (Instance)</h4>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary mt-1.5" />
                Real-world entity created from a class
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary mt-1.5" />
                Has its own state (attribute values)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary mt-1.5" />
                Created using <code className="code-keyword">new</code> keyword
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary mt-1.5" />
                Multiple objects from same class
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 rounded-lg bg-muted/50 border border-border"
          >
            <h4 className="font-semibold text-sm mb-2">Class Components</h4>
            <div className="space-y-1 text-sm font-mono">
              <p><span className="code-type">Fields</span> - Variables to store data</p>
              <p><span className="code-type">Constructor</span> - Initialize object</p>
              <p><span className="code-type">Methods</span> - Define behaviors</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CodeBlock code={codeExample} title="Car.java" delay={0.5} />
        </motion.div>
      </div>
    </div>
  );
};

export default ClassObjectSlide;
