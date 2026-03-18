import { motion } from "framer-motion";
import { Brain, FileText } from "lucide-react";

const ConferenceTitleSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4">
        
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">
          MESMT-2026 — International Conference
        </span>
        <p className="text-xs text-muted-foreground mt-1">Modern Trends in Engineering, Science, Management, and Technology</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-4 mb-6">
        
        <div className="p-4 rounded-2xl bg-gradient-primary shadow-glow">
          <Brain className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="p-4 rounded-2xl bg-gradient-primary shadow-glow">
          <FileText className="w-10 h-10 text-primary-foreground" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl leading-tight">
        
        <span className="gradient-text">AI-Driven Automated Question Paper Generation System</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
        
        Using Bloom's Taxonomy and AI-Assisted Rephrasing
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="space-y-2 text-sm text-muted-foreground">
        
        <p>Anushaa P S, Sharmila P, Bhuvaneswari D, Alwyn Rajiv S, Pushpalatha G C
        </p>
        <p className="text-xs">Kamaraj College of Engineering and Technology, Madurai </p>
      </motion.div>
    </div>);
};

export default ConferenceTitleSlide;