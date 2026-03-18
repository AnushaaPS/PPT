import { motion } from "framer-motion";
import CodeBlock from "../CodeBlock";

const primitiveTypes = [
  { type: 'byte', size: '8-bit', range: '-128 to 127', example: 'byte age = 25;' },
  { type: 'short', size: '16-bit', range: '-32,768 to 32,767', example: 'short year = 2024;' },
  { type: 'int', size: '32-bit', range: '-2³¹ to 2³¹-1', example: 'int count = 1000000;' },
  { type: 'long', size: '64-bit', range: '-2⁶³ to 2⁶³-1', example: 'long bigNum = 9999999999L;' },
  { type: 'float', size: '32-bit', range: '~±3.4e38', example: 'float price = 19.99f;' },
  { type: 'double', size: '64-bit', range: '~±1.7e308', example: 'double pi = 3.14159265;' },
  { type: 'boolean', size: '1-bit', range: 'true or false', example: 'boolean active = true;' },
  { type: 'char', size: '16-bit', range: 'Unicode character', example: "char grade = 'A';" },
];

const PrimitiveTypesSlide = () => {
  const codeExample = `// Primitive Data Types Example
public class DataTypesDemo {
    public static void main(String[] args) {
        byte age = 25;
        int salary = 50000;
        double price = 99.99;
        boolean isActive = true;
        char grade = 'A';
        
        System.out.println("Age: " + age);
        System.out.println("Price: " + price);
    }
}`;

  return (
    <div className="flex flex-col h-full px-8 py-12 overflow-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">Data Types</span>
        <h2 className="text-4xl font-bold mt-2">Primitive Types</h2>
      </motion.div>

      <div className="flex-1 grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-auto"
        >
          <div className="grid grid-cols-1 gap-2">
            {primitiveTypes.map((item, i) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 border border-border"
              >
                <code className="font-mono font-semibold text-code-type w-16">{item.type}</code>
                <span className="text-xs text-muted-foreground w-14">{item.size}</span>
                <span className="text-xs text-muted-foreground flex-1">{item.range}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CodeBlock code={codeExample} title="Example.java" delay={0.5} />
        </motion.div>
      </div>
    </div>
  );
};

export default PrimitiveTypesSlide;
