import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  title?: string;
  delay?: number;
}

const highlightSyntax = (code: string) => {
  const keywords = ['public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'new', 'return', 'void', 'static', 'final', 'abstract', 'this', 'super', 'if', 'else', 'for', 'while', 'try', 'catch', 'throw', 'throws'];
  const types = ['int', 'byte', 'short', 'long', 'float', 'double', 'boolean', 'char', 'String', 'Integer', 'Double', 'Boolean', 'Object', 'ArrayList', 'List', 'Animal', 'Dog', 'Cat', 'Shape', 'Circle', 'Rectangle', 'Vehicle', 'Car', 'Person', 'BankAccount'];
  
  let result = code;
  
  // Highlight comments
  result = result.replace(/(\/\/.*$)/gm, '<span class="code-comment">$1</span>');
  
  // Highlight strings
  result = result.replace(/(".*?")/g, '<span class="code-string">$1</span>');
  
  // Highlight numbers
  result = result.replace(/\b(\d+\.?\d*[fdlFDL]?)\b/g, '<span class="code-number">$1</span>');
  
  // Highlight keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
    result = result.replace(regex, '<span class="code-keyword">$1</span>');
  });
  
  // Highlight types
  types.forEach(type => {
    const regex = new RegExp(`\\b(${type})\\b`, 'g');
    result = result.replace(regex, '<span class="code-type">$1</span>');
  });
  
  return result;
};

const CodeBlock = ({ code, title, delay = 0 }: CodeBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-lg overflow-hidden shadow-card"
    >
      {title && (
        <div className="bg-muted px-4 py-2 border-b border-border">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
      )}
      <pre className="bg-code-bg p-4 overflow-x-auto">
        <code 
          className="text-sm font-mono leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }}
        />
      </pre>
    </motion.div>
  );
};

export default CodeBlock;
