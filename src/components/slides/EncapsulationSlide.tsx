import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import CodeBlock from "../CodeBlock";

const EncapsulationSlide = () => {
  const codeExample = `class Student {
    private int age;  // private field
    
    // Getter
    public int getAge() {
        return age;
    }
    
    // Setter
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
}

Student s = new Student();
s.setAge(20);
System.out.println(s.getAge()); // 20`;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-4"
      >
        <div className="p-3 rounded-lg bg-primary/20">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        <div>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">OOP Concept</span>
          <h2 className="text-4xl font-bold">Encapsulation</h2>
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
            <h4 className="font-semibold text-lg mb-2">Key Benefits</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Data hiding protects internal state
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Controlled access through getters/setters
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Flexibility to change implementation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Better code maintenance
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-muted/50 border border-border"
          >
            <h4 className="font-semibold text-lg mb-2">Access Modifiers</h4>
            <div className="space-y-1 text-sm font-mono">
              <p><span className="code-keyword">private</span> - Class only</p>
              <p><span className="code-keyword">protected</span> - Class + Subclasses</p>
              <p><span className="code-keyword">public</span> - Accessible everywhere</p>
              <p><span className="text-muted-foreground">default</span> - Package only</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CodeBlock code={codeExample} title="BankAccount.java" delay={0.5} />
        </motion.div>
      </div>
    </div>
  );
};

export default EncapsulationSlide;
