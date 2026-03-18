import { motion } from "framer-motion";
import CodeBlock from "../CodeBlock";

const ReferenceTypesSlide = () => {
  const codeExample = `// String
String name = "Java";

// Array
int[] nums = {1, 2, 3};

// Object
Student s = new Student();

// Wrapper Class
Integer num = 10;`;

  return (
    <div className="flex flex-col h-full px-8 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <span className="text-sm font-medium text-secondary uppercase tracking-wider">Data Types</span>
        <h2 className="text-4xl font-bold mt-2">Reference Types</h2>
      </motion.div>

      <div className="flex-1 grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {[
            { title: 'String', desc: 'Immutable sequence of characters. Most commonly used reference type.' },
            { title: 'Arrays', desc: 'Fixed-size containers that hold multiple values of the same type.' },
            { title: 'Classes', desc: 'User-defined types that bundle data and methods together.' },
            { title: 'Interfaces', desc: 'Abstract types defining a contract for implementing classes.' },
            { title: 'Wrapper Classes', desc: 'Object versions of primitives (Integer, Double, Boolean, etc.)' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-4 rounded-lg bg-card border border-border"
            >
              <h4 className="font-semibold text-lg text-secondary mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CodeBlock code={codeExample} title="ReferenceDemo.java" delay={0.5} />
        </motion.div>
      </div>
    </div>
  );
};

export default ReferenceTypesSlide;
