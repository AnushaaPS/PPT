import { motion } from "framer-motion";
import { Code2, Layers } from "lucide-react";

const TitleSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 rounded-2xl bg-gradient-primary shadow-glow">
          <Code2 className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="p-4 rounded-2xl bg-gradient-primary shadow-glow">
          <Layers className="w-12 h-12 text-primary-foreground" />
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        <span className="gradient-text">Java Fundamentals</span>
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl md:text-3xl text-muted-foreground font-light mb-8"
      >
        Data Types & Object-Oriented Programming
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
          Primitive Types
        </span>
        <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
          Reference Types
        </span>
        <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
          Class & Object
        </span>
        <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
          Encapsulation
        </span>
        <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
          Inheritance
        </span>
        <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
          Polymorphism
        </span>
        <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
          Abstraction
        </span>
      </motion.div>
    </div>
  );
};

export default TitleSlide;
